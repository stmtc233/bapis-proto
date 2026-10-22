// Download the newest international bilibili 6.x bundle (.apkm) from APKMirror.
// APKMirror sits behind Cloudflare, which rejects headless browsers, so this
// must run headed (e.g. under xvfb-run) with the installed Google Chrome
// (set CHROME_PATH to use another Chromium build).
//
// Usage: xvfb-run -a node tools/download_apkmirror.mjs <output.apkm> <release-url.txt>
// Writes the release page URL to <release-url.txt> (stdout is not reliable under xvfb-run).
import { writeFileSync } from 'node:fs';
import { chromium } from 'playwright';

const BASE = 'https://www.apkmirror.com';
const LISTING = `${BASE}/apk/bilibili-inc/bilibili/`;
const RELEASE_RE = /\/apk\/bilibili-inc\/bilibili\/[^/]+-(6)-(\d+)-(\d+)-release\/$/;
const USER_AGENT =
  'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';

const [output, releaseUrlFile] = process.argv.slice(2);
if (!output || !releaseUrlFile) {
  console.error('Usage: download_apkmirror.mjs <output.apkm> <release-url.txt>');
  process.exit(2);
}

const browser = await chromium.launch({
  ...(process.env.CHROME_PATH ? { executablePath: process.env.CHROME_PATH } : { channel: 'chrome' }),
  headless: false,
  args: ['--no-sandbox', '--disable-blink-features=AutomationControlled'],
});

try {
  const context = await browser.newContext({
    userAgent: USER_AGENT,
    locale: 'en-US',
    acceptDownloads: true,
  });
  const page = await context.newPage();

  async function open(url) {
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 60_000 });
    for (let i = 0; i < 30 && /Just a moment|Attention Required/.test(await page.title()); i++) {
      await page.waitForTimeout(2000);
    }
    const title = await page.title();
    if (/Just a moment|Attention Required/.test(title)) throw new Error(`Blocked by Cloudflare at ${url}`);
    console.error(`opened: ${title}`);
  }

  const hrefs = async (re) =>
    page.$$eval('a', (as) => as.map((a) => a.getAttribute('href') || ''), null)
      .then((all) => [...new Set(all.filter((h) => re.test(h)))]);

  await open(LISTING);
  const releases = (await hrefs(RELEASE_RE))
    .map((href) => ({ href, v: href.match(RELEASE_RE).slice(1).map(Number) }))
    .sort((a, b) => b.v[1] - a.v[1] || b.v[2] - a.v[2]);
  if (releases.length === 0) throw new Error('No international 6.x release found on APKMirror');
  const releasePage = BASE + releases[0].href;

  await open(releasePage);
  const variants = await hrefs(/-android-apk-download\/$/);
  if (variants.length === 0) throw new Error(`No downloadable variant on ${releasePage}`);

  await open(BASE + variants[0]);
  const step1 = await page.$eval('a.downloadButton', (a) => a.getAttribute('href'));
  await open(BASE + step1);
  const direct = (await hrefs(/download\.php\?id=/))[0];
  if (!direct) throw new Error('Final download link not found');

  const [download] = await Promise.all([
    page.waitForEvent('download', { timeout: 180_000 }),
    page.goto(BASE + direct).catch(() => {}),
  ]);
  await download.saveAs(output);
  writeFileSync(releaseUrlFile, releasePage);
} finally {
  await browser.close();
}
