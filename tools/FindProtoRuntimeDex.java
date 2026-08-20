import java.io.File;

import com.android.tools.smali.dexlib2.DexFileFactory;

/** Finds the dex file which defines the protobuf-lite runtime base class. */
public final class FindProtoRuntimeDex {
    private static final String RUNTIME_CLASS = "Lcom/google/protobuf/GeneratedMessageLite;";

    private FindProtoRuntimeDex() {
    }

    public static void main(String[] args) throws Exception {
        for (String arg : args) {
            File dex = new File(arg);
            for (var classDef : DexFileFactory.loadDexFile(dex, null).getClasses()) {
                if (RUNTIME_CLASS.equals(classDef.getType())) {
                    System.out.println(dex.getPath());
                    return;
                }
            }
        }
        System.exit(1);
    }
}
