# TV 版 v1.8.8

来源标签：`tv-v1.8.8`。共 34 个 service，95 个 RPC。

中文说明基于名称自动推断；字段号、类型、重复与 oneof 信息来自对应 proto。

## Service

- [`com.bapis.bcg.sunspot.ad.api.Sunspot`](services/com/bapis/bcg/sunspot/ad/api/Sunspot.md)：广告 接口 业务 服务，1 个 RPC
- [`com.bapis.bcg.sunspot.ad.spi.AdSearcher`](services/com/bapis/bcg/sunspot/ad/spi/AdSearcher.md)：广告 服务，1 个 RPC
- [`com.bapis.bcg.sunspot.test.api.Sunspot`](services/com/bapis/bcg/sunspot/test/api/Sunspot.md)：测试 接口 业务 服务，1 个 RPC
- [`com.bapis.bilibili.api.probe.v1.Probe`](services/com/bapis/bilibili/api/probe/v1/Probe.md)：接口 探测 服务，4 个 RPC
- [`com.bapis.bilibili.app.dynamic.v1.Dynamic`](services/com/bapis/bilibili/app/dynamic/v1/Dynamic.md)：应用 动态 服务，9 个 RPC
- [`com.bapis.bilibili.app.interface.v1.History`](services/com/bapis/bilibili/app/interface/v1/History.md)：应用 接口 历史记录 服务，2 个 RPC
- [`com.bapis.bilibili.app.interface.v1.Search`](services/com/bapis/bilibili/app/interface/v1/Search.md)：应用 接口 搜索 服务，1 个 RPC
- [`com.bapis.bilibili.app.interface.v1.SearchTest`](services/com/bapis/bilibili/app/interface/v1/SearchTest.md)：应用 接口 搜索 测试 服务，1 个 RPC
- [`com.bapis.bilibili.app.playurl.v1.PlayURL`](services/com/bapis/bilibili/app/playurl/v1/PlayURL.md)：应用 播放 地址 服务，5 个 RPC
- [`com.bapis.bilibili.app.show.v1.Popular`](services/com/bapis/bilibili/app/show/v1/Popular.md)：应用 热门 服务，1 个 RPC
- [`com.bapis.bilibili.app.show.v1.Rank`](services/com/bapis/bilibili/app/show/v1/Rank.md)：应用 排行 服务，2 个 RPC
- [`com.bapis.bilibili.app.show.v1.Region`](services/com/bapis/bilibili/app/show/v1/Region.md)：应用 分区 服务，1 个 RPC
- [`com.bapis.bilibili.app.view.v1.View`](services/com/bapis/bilibili/app/view/v1/View.md)：应用 查看 服务，8 个 RPC
- [`com.bapis.bilibili.app.wall.v1.Wall`](services/com/bapis/bilibili/app/wall/v1/Wall.md)：应用 壁纸 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.message.tv.LiveDm`](services/com/bapis/bilibili/broadcast/message/tv/LiveDm.md)：广播 消息 直播 弹幕 服务，4 个 RPC
- [`com.bapis.bilibili.broadcast.message.tv.Tv`](services/com/bapis/bilibili/broadcast/message/tv/Tv.md)：广播 消息 业务 服务，16 个 RPC
- [`com.bapis.bilibili.broadcast.v1.Add`](services/com/bapis/bilibili/broadcast/v1/Add.md)：广播 添加 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.v1.Broadcast`](services/com/bapis/bilibili/broadcast/v1/Broadcast.md)：广播 服务，5 个 RPC
- [`com.bapis.bilibili.broadcast.v1.BroadcastRoom`](services/com/bapis/bilibili/broadcast/v1/BroadcastRoom.md)：广播 直播间 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.v1.BroadcastTunnel`](services/com/bapis/bilibili/broadcast/v1/BroadcastTunnel.md)：广播 通道 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.v1.Laser`](services/com/bapis/bilibili/broadcast/v1/Laser.md)：广播 业务 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.v1.ModManager`](services/com/bapis/bilibili/broadcast/v1/ModManager.md)：广播 业务 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.v1.Push`](services/com/bapis/bilibili/broadcast/v1/Push.md)：广播 业务 服务，1 个 RPC
- [`com.bapis.bilibili.broadcast.v2.Laser`](services/com/bapis/bilibili/broadcast/v2/Laser.md)：广播 业务 服务，1 个 RPC
- [`com.bapis.bilibili.cheese.gateway.player.v1.PlayURL`](services/com/bapis/bilibili/cheese/gateway/player/v1/PlayURL.md)：网关 播放器 播放 地址 服务，2 个 RPC
- [`com.bapis.bilibili.community.service.dm.v1.DM`](services/com/bapis/bilibili/community/service/dm/v1/DM.md)：社区 弹幕 服务，6 个 RPC
- [`com.bapis.bilibili.main.community.reply.v1.Reply`](services/com/bapis/bilibili/main/community/reply/v1/Reply.md)：社区 响应 服务，1 个 RPC
- [`com.bapis.bilibili.pgc.gateway.player.v1.PlayURL`](services/com/bapis/bilibili/pgc/gateway/player/v1/PlayURL.md)：网关 播放器 播放 地址 服务，3 个 RPC
- [`com.bapis.bilibili.polymer.chronos.v1.ChronosService`](services/com/bapis/bilibili/polymer/chronos/v1/ChronosService.md)：资源包 服务，2 个 RPC
- [`com.bapis.bilibili.tv.interface.v1.CardView`](services/com/bapis/bilibili/tv/interface/v1/CardView.md)：接口 卡片 查看 服务，2 个 RPC
- [`com.bapis.bilibili.tv.interface.v1.community.UserCommunity`](services/com/bapis/bilibili/tv/interface/v1/community/UserCommunity.md)：接口 社区 用户 服务，3 个 RPC
- [`com.bapis.bilibili.tv.interface.v1.DM`](services/com/bapis/bilibili/tv/interface/v1/DM.md)：接口 弹幕 服务，4 个 RPC
- [`com.bapis.bilibili.tv.interface.v1.Search`](services/com/bapis/bilibili/tv/interface/v1/Search.md)：接口 搜索 服务，1 个 RPC
- [`com.bapis.bilibili.web.interface.v1.WebInterface`](services/com/bapis/bilibili/web/interface/v1/WebInterface.md)：网页 接口 服务，1 个 RPC
