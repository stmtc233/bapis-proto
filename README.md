# BAPIS Proto Archive

This repository reconstructs Protocol Buffer schemas from Bilibili Android
APKs. The generated schemas are written below `extracted_proto/com/bapis`.

The `international` branch targets the international app (`com.bilibili.app.in`),
while the `tv` branch targets the TV app (`com.xiaodianshi.tv.yst`). Each branch
has its own updater and generated archive. The mainland `main` branch continues
to use the official `tv.danmaku.bili` APK feed.

## Updates

The `Update BAPIS Proto` GitHub Actions workflow runs once a day on the default
mainland branch and can also be started manually from the Actions tab. It
downloads the selected APK, extracts its Android version name and code,
decompiles only the dex files with JADX, and reconstructs protobuf-lite
metadata with `extract_bapis_proto.mjs`.

For each new Android `versionName`, the workflow commits the generated proto
files, creates a version tag, and creates a GitHub Release. Existing tags are
treated as already processed, and workflow concurrency prevents two
generations from running at once.

The international workflow uses `international-v<versionName>` tags, and the TV
workflow uses `tv-v<versionName>` tags, so releases do not collide with mainland
`v<versionName>` tags. Run the corresponding workflow manually from its branch
to refresh that archive. The default-branch scheduler dispatches both branch
workflows daily because GitHub scheduled workflows otherwise run only from the
default branch.

## Local regeneration

The extractor expects JADX output in `decompiled/sources/com/bapis`:

```sh
node extract_bapis_proto.mjs
```

Alternate source and output directories can be selected with
`BAPIS_SOURCE_ROOT` and `BAPIS_OUTPUT_ROOT`, which is useful when comparing
APK editions without replacing the checked-in archive:

```sh
BAPIS_SOURCE_ROOT=.work/decompiled-int626/sources/com/bapis \
BAPIS_OUTPUT_ROOT=.work/extracted-int626/com/bapis \
node extract_bapis_proto.mjs
```

The reconstructed files retain the protobuf field numbers, scalar wire types,
repeated fields, maps, oneofs, and recoverable enum definitions. The extractor
also recovers gRPC service names, RPC methods, and streaming modes from the
generated `*Grpc.java` descriptors included in the APK. Original proto file
names, comments, and custom options are not present in protobuf-lite metadata
and cannot be reconstructed reliably.
