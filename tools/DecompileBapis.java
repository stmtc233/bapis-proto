import java.io.File;
import java.util.ArrayList;
import java.util.List;

import jadx.api.JadxArgs;
import jadx.api.JadxDecompiler;

/** Decompiles only protobuf sources required by the extractor. */
public final class DecompileBapis {
    private static final String TARGET_PACKAGE = "com.bapis.";

    private DecompileBapis() {
    }

    public static void main(String[] args) {
        System.setProperty("org.slf4j.simpleLogger.defaultLogLevel", "error");
        if (args.length < 2) {
            System.err.println("Usage: DecompileBapis <output-dir> <classes.dex>...");
            System.exit(2);
        }

        File outputDir = new File(args[0]);
        List<File> inputs = new ArrayList<>();
        for (int index = 1; index < args.length; index++) {
            File input = new File(args[index]);
            if (!input.isFile()) {
                System.err.printf("Missing dex input: %s%n", input);
                System.exit(2);
            }
            inputs.add(input);
        }

        JadxArgs jadxArgs = new JadxArgs();
        jadxArgs.setInputFiles(inputs);
        jadxArgs.setOutDir(outputDir);
        jadxArgs.setOutDirSrc(new File(outputDir, "sources"));
        jadxArgs.setSkipResources(true);
        jadxArgs.setThreadsCount(2);
        jadxArgs.setIncludeDependencies(false);
        jadxArgs.setClassFilter(className -> className.startsWith(TARGET_PACKAGE));

        try (JadxDecompiler jadx = new JadxDecompiler(jadxArgs)) {
            jadx.load();
            jadx.saveSources();
            int errors = jadx.getErrorsCount();
            int sourceFiles = countJavaFiles(new File(outputDir, "sources/com/bapis"));
            System.out.printf("JADX errors=%d, com.bapis source files=%d%n", errors, sourceFiles);
            if (errors != 0 || sourceFiles == 0) {
                System.exit(3);
            }
        }
    }

    private static int countJavaFiles(File directory) {
        File[] files = directory.listFiles();
        if (files == null) {
            return 0;
        }
        int count = 0;
        for (File file : files) {
            if (file.isDirectory()) {
                count += countJavaFiles(file);
            } else if (file.getName().endsWith(".java")) {
                count++;
            }
        }
        return count;
    }
}
