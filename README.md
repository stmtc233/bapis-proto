# BAPIS Proto Archive

This repository reconstructs Protocol Buffer schemas from the current 64-bit
Android Bilibili APK. The generated schemas are written below
`extracted_proto/com/bapis`.

## Updates

The `Update BAPIS Proto` GitHub Actions workflow runs once a day and can also
be started manually from the Actions tab. It downloads the upstream APK,
extracts its Android version name and code, decompiles only the dex files with
JADX, and reconstructs protobuf-lite metadata with `extract_bapis_proto.mjs`.

For each new Android `versionName`, the workflow commits the generated proto
files, creates the `v<versionName>` tag, and creates a GitHub Release. Existing
tags are treated as already processed, and workflow concurrency prevents two
generations from running at once.

The initial schema is intentionally not included in this repository. Run the
workflow manually once after creating the repository to generate it.

## Local regeneration

The extractor expects JADX output in `decompiled/sources/com/bapis`:

```sh
node extract_bapis_proto.mjs
```

The reconstructed files retain the protobuf field numbers, scalar wire types,
repeated fields, maps, oneofs, and recoverable enum definitions. Original proto
file names, comments, custom options, and RPC services are not present in the
protobuf-lite metadata and cannot be reconstructed reliably.
