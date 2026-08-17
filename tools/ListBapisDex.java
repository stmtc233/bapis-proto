import java.io.File;

import com.android.tools.smali.dexlib2.DexFileFactory;

/** Lists dex files which define classes in the BAPIS package. */
public final class ListBapisDex {
    private ListBapisDex() {
    }

    public static void main(String[] args) throws Exception {
        for (String arg : args) {
            File dex = new File(arg);
            long count = 0;
            for (var classDef : DexFileFactory.loadDexFile(dex, null).getClasses()) {
                if (classDef.getType().startsWith("Lcom/bapis/")) {
                    count++;
                }
            }
            if (count != 0) {
                System.out.printf("%s %d%n", dex.getPath(), count);
            }
        }
    }
}
