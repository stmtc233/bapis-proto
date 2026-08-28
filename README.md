# BAPIS Proto Archive

This repository reconstructs Protocol Buffer schemas from Bilibili Android
APKs. The `main` branch targets the mainland 64-bit app, while the
`international` and `tv` branches maintain independent archives for the
international app and TV app. Generated schemas are written below
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

The default-branch `schedule-international-proto.yml` and
`schedule-tv-proto.yml` workflows dispatch the corresponding branch updaters
daily. This keeps the international and TV archives independent while still
allowing scheduled runs, since GitHub scheduled workflows run only from the
default branch.

The initial schema is intentionally not included in this repository. Run the
workflow manually once after creating the repository to generate it.

## Local regeneration

The extractor expects JADX output in `decompiled/sources/com/bapis`:

```sh
node extract_bapis_proto.mjs
```

The reconstructed files retain the protobuf field numbers, scalar wire types,
repeated fields, maps, oneofs, and recoverable enum definitions. The extractor
also recovers gRPC service names, RPC methods, and streaming modes from the
generated `*Grpc.java` descriptors included in the APK. Original proto file
names, comments, and custom options are not present in protobuf-lite metadata
and cannot be reconstructed reliably.

## 快速调试 gRPC 接口

`tools/grpc_debug.mjs` 从三个已发布的 proto 标签读取接口定义，可检索服务、查看请求/响应的直接字段、生成可编辑 JSON 请求模板，以及通过 `grpcurl` 发起调用。

```sh
# 在指定版本中搜索 RPC
node tools/grpc_debug.mjs list --version tv --query PlayURL

# 查看一个方法的请求与响应字段
node tools/grpc_debug.mjs describe --version main \
  --service com.bapis.bilibili.app.view.v1.View --method View

# 生成可编辑的请求 JSON
node tools/grpc_debug.mjs template --version main \
  --service com.bapis.bilibili.app.view.v1.View --method View --output request.json

# 使用自己的目标地址和鉴权信息调用；先以 --dry-run 验证参数
node tools/grpc_debug.mjs call --version main --target example.com:443 \
  --service com.bapis.bilibili.app.view.v1.View --method View \
  --data request.json --header 'authorization: Bearer <token>' --dry-run
```

实际 `call` 需要在 PATH 中安装 `protoc` 和 `grpcurl`。工具不会硬编码服务地址或凭据，并会在系统临时目录中从所选 Git 标签生成描述符，调用结束后自动清理。
