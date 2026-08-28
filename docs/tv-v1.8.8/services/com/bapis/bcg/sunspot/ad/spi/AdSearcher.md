# `com.bapis.bcg.sunspot.ad.spi.AdSearcher`

中文说明：广告 服务。说明根据接口标识符自动推断，实际业务语义以客户端实现和服务端行为为准。

## RPC

| 方法 | 调用模式 | 请求 | 响应 | 中文说明 |
| --- | --- | --- | --- | --- |
| `AdSearch` | 一元调用 | `com.bapis.bcg.sunspot.ad.dto.AdRequestDto` | `com.bapis.bcg.sunspot.ad.dto.ServiceResponseDto` | 广告 搜索 |

## 请求与响应字段

### 请求 `com.bapis.bcg.sunspot.ad.dto.AdRequestDto`

中文说明：广告 请求。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `requestId` | `string` | - | 请求 标识 |
| 2 | `requestTime` | `int64` | - | 请求 时间 |
| 3 | `requestType` | `string` | - | 请求 类型 |
| 4 | `mid` | `int64` | - | 用户 ID |
| 5 | `buvid` | `string` | - | 设备标识 |
| 6 | `sid` | `string` | - | 会话 ID |
| 7 | `resourceList` | `LocationResourceDto` | repeated | 资源 列表 |
| 8 | `ip` | `string` | - | IP 地址 |
| 9 | `country` | `string` | - | 业务字段 `country`（名称未提供可靠中文语义） |
| 10 | `province` | `string` | - | 业务字段 `province`（名称未提供可靠中文语义） |
| 11 | `city` | `string` | - | 业务字段 `city`（名称未提供可靠中文语义） |
| 12 | `network` | `string` | - | 网络 |
| 13 | `mobiApp` | `string` | - | 应用 |
| 14 | `build` | `int32` | - | 业务字段 `build`（名称未提供可靠中文语义） |
| 15 | `coldBoot` | `bool` | - | 业务字段 `coldBoot`（名称未提供可靠中文语义） |
| 16 | `feeds` | `bool` | - | 业务字段 `feeds`（名称未提供可靠中文语义） |
| 17 | `videoPageRecommend` | `bool` | - | 视频 分页 |
| 18 | `dynamicPage` | `bool` | - | 动态 分页 |
| 19 | `imei` | `string` | - | 业务字段 `imei`（名称未提供可靠中文语义） |
| 20 | `idfa` | `string` | - | 业务字段 `idfa`（名称未提供可靠中文语义） |
| 21 | `androidId` | `string` | - | 标识 |
| 22 | `mac` | `string` | - | 业务字段 `mac`（名称未提供可靠中文语义） |
| 23 | `oaid` | `string` | - | 业务字段 `oaid`（名称未提供可靠中文语义） |
| 24 | `miniGameAppId` | `string` | - | 应用 标识 |
| 25 | `lon` | `string` | - | 业务字段 `lon`（名称未提供可靠中文语义） |
| 26 | `lat` | `string` | - | 业务字段 `lat`（名称未提供可靠中文语义） |
| 27 | `screenSize` | `string` | - | 大小 |
| 28 | `vendor` | `string` | - | 业务字段 `vendor`（名称未提供可靠中文语义） |
| 29 | `model` | `string` | - | 业务字段 `model`（名称未提供可靠中文语义） |
| 30 | `ua` | `string` | - | 业务字段 `ua`（名称未提供可靠中文语义） |
| 31 | `uaSys` | `string` | - | 业务字段 `uaSys`（名称未提供可靠中文语义） |
| 32 | `uaWeb` | `string` | - | 网页 |
| 33 | `osV` | `string` | - | 业务字段 `osV`（名称未提供可靠中文语义） |
| 34 | `imageStyle` | `int32` | - | 图片 |
| 35 | `fromSpmid` | `string` | - | 来源 |
| 36 | `spmid` | `string` | - | 业务字段 `spmid`（名称未提供可靠中文语义） |
| 37 | `from` | `string` | - | 来源 |
| 38 | `aid` | `int64` | - | 稿件 ID |
| 39 | `cid` | `int64` | - | 分 P ID |
| 40 | `seasonId` | `int64` | - | 剧集 标识 |
| 41 | `epId` | `int64` | - | 标识 |
| 42 | `videoCategory` | `int32` | - | 视频 分类 |
| 43 | `videoUpMid` | `int64` | - | 视频 用户 ID |
| 44 | `vctags` | `int32` | repeated | 业务字段 `vctags`（名称未提供可靠中文语义） |
| 45 | `videoPoliticalSensitive` | `bool` | - | 视频 |
| 46 | `avDuration` | `string` | - | 业务字段 `avDuration`（名称未提供可靠中文语义） |
| 47 | `avOriginal` | `int32` | - | 业务字段 `avOriginal`（名称未提供可靠中文语义） |
| 48 | `avIsVerticalScreen` | `int32` | - | 是否 |
| 49 | `avPlayDuration` | `int32` | - | 播放 |
| 50 | `avPlayDurationPercent` | `int32` | - | 播放 |
| 51 | `avNumDanmu` | `int32` | - | 业务字段 `avNumDanmu`（名称未提供可靠中文语义） |
| 52 | `avNumReply` | `int32` | - | 响应 |
| 53 | `avNumCoin` | `int32` | - | 投币 |
| 54 | `avNumShare` | `int32` | - | 分享 |
| 55 | `avNumFav` | `int32` | - | 收藏 |
| 56 | `avNumLike` | `int32` | - | 点赞 |
| 57 | `dmpUserProfileMark` | `int32` | - | 用户 |
| 58 | `vip` | `bool` | - | 业务字段 `vip`（名称未提供可靠中文语义） |
| 59 | `age` | `int32` | - | 业务字段 `age`（名称未提供可靠中文语义） |
| 60 | `ageProbList` | `double` | repeated | 列表 |
| 61 | `gender` | `int32` | - | 业务字段 `gender`（名称未提供可靠中文语义） |
| 62 | `genderProb` | `double` | - | 业务字段 `genderProb`（名称未提供可靠中文语义） |
| 63 | `preferTagIds` | `int32` | repeated | 标签 |
| 64 | `expPreferTagIds` | `int32` | repeated | 标签 |
| 65 | `crowIds` | `int32` | repeated | 业务字段 `crowIds`（名称未提供可靠中文语义） |
| 66 | `regularGroups` | `int32` | repeated | 业务字段 `regularGroups`（名称未提供可靠中文语义） |
| 67 | `businessGroups` | `int32` | repeated | 业务 |
| 68 | `packageGroups` | `int32` | repeated | 业务字段 `packageGroups`（名称未提供可靠中文语义） |
| 69 | `extendGroups` | `int32` | repeated | 业务字段 `extendGroups`（名称未提供可靠中文语义） |
| 70 | `otherGroups` | `int32` | repeated | 业务字段 `otherGroups`（名称未提供可靠中文语义） |
| 71 | `followList` | `int64` | repeated | 关注 列表 |
| 72 | `blackListMids` | `int64` | repeated | 列表 |
| 73 | `blackListedMids` | `int64` | repeated | 业务字段 `blackListedMids`（名称未提供可靠中文语义） |
| 74 | `persoanlFlyShieldList` | `int64` | repeated | 列表 |
| 75 | `preferStypeIds` | `int32` | repeated | 业务字段 `preferStypeIds`（名称未提供可靠中文语义） |
| 76 | `lastVideos` | `LongEventEntryDto` | repeated | 业务字段 `lastVideos`（名称未提供可靠中文语义） |
| 77 | `lastAdsClick` | `LongEventEntryDto` | repeated | 点击 |
| 78 | `userAppInfoList` | `UserAppInfoDto` | repeated | 用户 应用 信息 列表 |
| 79 | `unitConversions` | `string` | repeated | 业务字段 `unitConversions`（名称未提供可靠中文语义） |
| 80 | `adAccountConversions` | `string` | repeated | 广告 账户 |
| 81 | `companyGroupConversions` | `string` | repeated | 业务字段 `companyGroupConversions`（名称未提供可靠中文语义） |
| 82 | `dmpContentTags` | `int32` | repeated | 内容 |
| 83 | `dmpClickEvents` | `AdEventDto` | repeated | 点击 |
| 84 | `companyGroupClickEvents` | `AdEventDto` | repeated | 点击 |
| 85 | `dmpFollowUps` | `int32` | repeated | 关注 |
| 86 | `dmpFollowUpCategories` | `int32` | repeated | 关注 |
| 87 | `subscribeTags` | `int32` | repeated | 业务字段 `subscribeTags`（名称未提供可靠中文语义） |
| 88 | `searchKeyWords` | `StringEventEntryDto` | repeated | 搜索 |
| 89 | `bangumis` | `int32` | repeated | 业务字段 `bangumis`（名称未提供可靠中文语义） |
| 90 | `sensitiveCategoryIds` | `int64` | repeated | 分类 |
| 91 | `sensitiveCompanyIds` | `int64` | repeated | 业务字段 `sensitiveCompanyIds`（名称未提供可靠中文语义） |
| 92 | `styleAbilityEnumIds` | `int64` | repeated | 业务字段 `styleAbilityEnumIds`（名称未提供可靠中文语义） |
| 93 | `sensitiveCreativeTagIds` | `int64` | repeated | 标签 |
| 94 | `avoidCompanyGroupIdSet` | `int64` | repeated | 标识 |
| 95 | `feedsNxtPtr` | `int32` | - | 业务字段 `feedsNxtPtr`（名称未提供可靠中文语义） |
| 96 | `unitShowCounts` | `map<int64, int64>` | map | 业务字段 `unitShowCounts`（名称未提供可靠中文语义） |
| 97 | `scheduleShowCounts` | `map<int64, int64>` | map | 业务字段 `scheduleShowCounts`（名称未提供可靠中文语义） |
| 98 | `unitShowConfigCounts` | `map<int64, int64>` | map | 配置 |
| 99 | `recentUnitIds` | `int64` | repeated | 业务字段 `recentUnitIds`（名称未提供可靠中文语义） |
| 100 | `feedsUnitIdSet` | `int64` | repeated | 标识 |
| 101 | `videoAvoidUnitIdSet` | `int64` | repeated | 视频 标识 |
| 102 | `lastAds` | `LongEventEntryDto` | repeated | 业务字段 `lastAds`（名称未提供可靠中文语义） |
| 103 | `inlineControlModule` | `int32` | - | 模块 |
| 104 | `recentAccountBusinessCategoryTupleSetForFeeds` | `AccountBusinessCategoryTupleDto` | repeated | 账户 业务 分类 |
| 105 | `recentAccountBusinessCategoryTupleSetForVideo` | `AccountBusinessCategoryTupleDto` | repeated | 账户 业务 分类 视频 |
| 106 | `recentCompanyGroupProductTupleSetForFeeds` | `AccountBusinessCategoryTupleDto` | repeated | 业务字段 `recentCompanyGroupProductTupleSetForFeeds`（名称未提供可靠中文语义） |
| 107 | `namedFrequencyCellShowCounts` | `map<string, int64>` | map | 业务字段 `namedFrequencyCellShowCounts`（名称未提供可靠中文语义） |
| 108 | `namedLastestCells` | `map<string, IntLatestCellDto>` | map | 业务字段 `namedLastestCells`（名称未提供可靠中文语义） |
| 109 | `typedNamedFrequencyCells` | `map<string, StringLongEntryMap>` | map | 业务字段 `typedNamedFrequencyCells`（名称未提供可靠中文语义） |
| 110 | `feedsTypeLatestSingleFrequencyTargets` | `map<string, LongList>` | map | 类型 |
| 111 | `typeLastestSingleCoolings` | `map<string, StringLongMap>` | map | 类型 |
| 112 | `coGroupOrAccMultiBrushTupleSetForDynamic` | `CompanyGroupProductTupleDto` | repeated | 动态 |
| 113 | `coGroupOrAccHoursTupleInfoForDynamic` | `CompanyGroupOrAccountProductInfoDto` | repeated | 信息 动态 |
| 114 | `coGroupOrAccDaysTupleInfoForDynamic` | `CompanyGroupOrAccountProductInfoDto` | repeated | 信息 动态 |
| 115 | `styleAbilityCooling` | `map<string, int64>` | map | 业务字段 `styleAbilityCooling`（名称未提供可靠中文语义） |
| 116 | `styleAbilityBrush` | `string` | repeated | 业务字段 `styleAbilityBrush`（名称未提供可靠中文语义） |
| 117 | `dislikeGradeConcreteIds` | `map<int32, StringList>` | map | 业务字段 `dislikeGradeConcreteIds`（名称未提供可靠中文语义） |
| 118 | `experimentName` | `string` | - | 名称 |
| 119 | `cpcPriceFirst` | `bool` | - | 业务字段 `cpcPriceFirst`（名称未提供可靠中文语义） |
| 120 | `openCpc` | `bool` | - | 业务字段 `openCpc`（名称未提供可靠中文语义） |
| 121 | `cpcTagFilter` | `bool` | - | 标签 筛选 |
| 122 | `cpcCrowdTarget` | `bool` | - | 业务字段 `cpcCrowdTarget`（名称未提供可靠中文语义） |
| 123 | `enableFilterByMinEcpm` | `bool` | - | 启用 筛选 |
| 124 | `playPageCtrPredictor` | `bool` | - | 播放 分页 |
| 125 | `noQJust` | `bool` | - | 业务字段 `noQJust`（名称未提供可靠中文语义） |
| 126 | `enableDynamicFlowControl` | `bool` | - | 启用 动态 |
| 127 | `feedTargeting` | `bool` | - | 信息流 |
| 128 | `feedLooseFreq` | `bool` | - | 信息流 |
| 129 | `coldBootBudget` | `bool` | - | 业务字段 `coldBootBudget`（名称未提供可靠中文语义） |
| 130 | `feedsRandomResult` | `bool` | - | 结果 |
| 131 | `videoPageRandomResult` | `bool` | - | 视频 分页 结果 |
| 132 | `lrBussInterestOn` | `bool` | - | 业务字段 `lrBussInterestOn`（名称未提供可靠中文语义） |
| 133 | `playpageMidPlaypage7dShwClkFromRedisOn` | `bool` | - | 用户 ID 来源 |
| 134 | `dmpOnPreferTagExp` | `bool` | - | 标签 |
| 135 | `pcvrStrategy` | `string` | - | 业务字段 `pcvrStrategy`（名称未提供可靠中文语义） |
| 136 | `pcvrTable` | `string` | - | 业务字段 `pcvrTable`（名称未提供可靠中文语义） |
| 137 | `adxPkEnhanceFatcor` | `int32` | - | 业务字段 `adxPkEnhanceFatcor`（名称未提供可靠中文语义） |
| 138 | `adMechanismMonitor` | `int32` | - | 广告 |
| 139 | `disabledSources` | `int32` | repeated | 业务字段 `disabledSources`（名称未提供可靠中文语义） |
| 140 | `feedsRotateBrushes` | `int32` | - | 业务字段 `feedsRotateBrushes`（名称未提供可靠中文语义） |
| 141 | `feedsRotateBrushesForVip` | `int32` | - | 业务字段 `feedsRotateBrushesForVip`（名称未提供可靠中文语义） |
| 142 | `userAdsShowEta` | `int32` | - | 用户 |
| 143 | `videoAvoidUnitTimes` | `int32` | - | 视频 |
| 144 | `videoAvoidUnitTimesForVip` | `int32` | - | 视频 |
| 145 | `enableGd` | `bool` | - | 启用 |
| 146 | `removeFrequencyControl` | `bool` | - | 业务字段 `removeFrequencyControl`（名称未提供可靠中文语义） |
| 147 | `pctrStrategy` | `string` | - | 业务字段 `pctrStrategy`（名称未提供可靠中文语义） |
| 148 | `pctrFlyStrategy` | `string` | - | 业务字段 `pctrFlyStrategy`（名称未提供可靠中文语义） |
| 149 | `playpagePctrStrategy` | `string` | - | 业务字段 `playpagePctrStrategy`（名称未提供可靠中文语义） |
| 150 | `usePlaypagePctrStrategy` | `bool` | - | 业务字段 `usePlaypagePctrStrategy`（名称未提供可靠中文语义） |
| 151 | `pctrForCpm` | `bool` | - | 业务字段 `pctrForCpm`（名称未提供可靠中文语义） |
| 152 | `genderDemographicStrategyEnum` | `string` | - | 业务字段 `genderDemographicStrategyEnum`（名称未提供可靠中文语义） |
| 153 | `ageDemographicStrategyEnum` | `string` | - | 业务字段 `ageDemographicStrategyEnum`（名称未提供可靠中文语义） |
| 154 | `brushDuplicateFilterForVip` | `bool` | - | 筛选 |
| 155 | `brushDuplicateFilterForNormal` | `bool` | - | 筛选 |
| 156 | `outterCtrQFactor` | `double` | - | 业务字段 `outterCtrQFactor`（名称未提供可靠中文语义） |
| 157 | `innerCtrQFactor` | `double` | - | 业务字段 `innerCtrQFactor`（名称未提供可靠中文语义） |
| 158 | `pkOuterCtrQFactor` | `double` | - | 业务字段 `pkOuterCtrQFactor`（名称未提供可靠中文语义） |
| 159 | `pkInnerCtrQFactor` | `double` | - | 业务字段 `pkInnerCtrQFactor`（名称未提供可靠中文语义） |
| 160 | `accTagWeightName` | `string` | - | 标签 名称 |
| 161 | `freqLimit` | `int32` | - | 限制 |
| 162 | `outerThres` | `bool` | - | 业务字段 `outerThres`（名称未提供可靠中文语义） |
| 163 | `outerThresBottom` | `bool` | - | 业务字段 `outerThresBottom`（名称未提供可靠中文语义） |
| 164 | `outerQuitWhenNoInner` | `bool` | - | 业务字段 `outerQuitWhenNoInner`（名称未提供可靠中文语义） |
| 165 | `outerLowCtrLimit` | `int64` | - | 限制 |
| 166 | `androidCpcCtrThreshold` | `int64` | - | 业务字段 `androidCpcCtrThreshold`（名称未提供可靠中文语义） |
| 167 | `iosCpcCtrThreshold` | `int64` | - | 业务字段 `iosCpcCtrThreshold`（名称未提供可靠中文语义） |
| 168 | `ipadCpcCtrThreshold` | `int64` | - | 业务字段 `ipadCpcCtrThreshold`（名称未提供可靠中文语义） |
| 169 | `androidCpcEcpmThreshold` | `int64` | - | 业务字段 `androidCpcEcpmThreshold`（名称未提供可靠中文语义） |
| 170 | `iosCpcEcpmThreshold` | `int64` | - | 业务字段 `iosCpcEcpmThreshold`（名称未提供可靠中文语义） |
| 171 | `ipadCpcEcpmThreshold` | `int64` | - | 业务字段 `ipadCpcEcpmThreshold`（名称未提供可靠中文语义） |
| 172 | `androidCpmCtrThreshold` | `int64` | - | 业务字段 `androidCpmCtrThreshold`（名称未提供可靠中文语义） |
| 173 | `iosCpmCtrThreshold` | `int64` | - | 业务字段 `iosCpmCtrThreshold`（名称未提供可靠中文语义） |
| 174 | `ipadCpmCtrThreshold` | `int64` | - | 业务字段 `ipadCpmCtrThreshold`（名称未提供可靠中文语义） |
| 175 | `androidCpmEcpmThreshold` | `int64` | - | 业务字段 `androidCpmEcpmThreshold`（名称未提供可靠中文语义） |
| 176 | `iosCpmEcpmThreshold` | `int64` | - | 业务字段 `iosCpmEcpmThreshold`（名称未提供可靠中文语义） |
| 177 | `ipadCpmEcpmThreshold` | `int64` | - | 业务字段 `ipadCpmEcpmThreshold`（名称未提供可靠中文语义） |
| 178 | `dpaPctrCoefficient` | `double` | - | 业务字段 `dpaPctrCoefficient`（名称未提供可靠中文语义） |
| 179 | `unDpaPctrCoefficient` | `double` | - | 业务字段 `unDpaPctrCoefficient`（名称未提供可靠中文语义） |
| 180 | `dpaAndroidCtrThreshold` | `int64` | - | 业务字段 `dpaAndroidCtrThreshold`（名称未提供可靠中文语义） |
| 181 | `dpaIosCtrThreshold` | `int64` | - | 业务字段 `dpaIosCtrThreshold`（名称未提供可靠中文语义） |
| 182 | `unDpaAndroidCtrThreshold` | `int64` | - | 业务字段 `unDpaAndroidCtrThreshold`（名称未提供可靠中文语义） |
| 183 | `unDpaIosCtrThreshold` | `int64` | - | 业务字段 `unDpaIosCtrThreshold`（名称未提供可靠中文语义） |
| 184 | `dpaAndroidEcpmThreshold` | `double` | - | 业务字段 `dpaAndroidEcpmThreshold`（名称未提供可靠中文语义） |
| 185 | `dpaIosEcpmThreshold` | `double` | - | 业务字段 `dpaIosEcpmThreshold`（名称未提供可靠中文语义） |
| 186 | `unDpaAndroidEcpmThreshold` | `double` | - | 业务字段 `unDpaAndroidEcpmThreshold`（名称未提供可靠中文语义） |
| 187 | `unDpaIosEcpmThreshold` | `double` | - | 业务字段 `unDpaIosEcpmThreshold`（名称未提供可靠中文语义） |
| 188 | `playpageInnerAndroidCtrThreshold` | `int64` | - | 业务字段 `playpageInnerAndroidCtrThreshold`（名称未提供可靠中文语义） |
| 189 | `playpageInnerIosCtrThreshold` | `int64` | - | 业务字段 `playpageInnerIosCtrThreshold`（名称未提供可靠中文语义） |
| 190 | `playpageInnerAndroidEcpmThreshold` | `double` | - | 业务字段 `playpageInnerAndroidEcpmThreshold`（名称未提供可靠中文语义） |
| 191 | `playpageInnerIosEcpmThreshold` | `double` | - | 业务字段 `playpageInnerIosEcpmThreshold`（名称未提供可靠中文语义） |
| 192 | `usePrior` | `bool` | - | 业务字段 `usePrior`（名称未提供可靠中文语义） |
| 193 | `useRedisStockConfig` | `bool` | - | 配置 |
| 194 | `playpagePcvrTable` | `string` | - | 业务字段 `playpagePcvrTable`（名称未提供可靠中文语义） |
| 195 | `cpaPcvrTable` | `string` | - | 业务字段 `cpaPcvrTable`（名称未提供可靠中文语义） |
| 196 | `cpaPlayPagePcvrTable` | `string` | - | 播放 分页 |
| 197 | `cpaConfigKey` | `string` | - | 配置 |
| 198 | `expRatioTracer` | `int32` | - | 业务字段 `expRatioTracer`（名称未提供可靠中文语义） |
| 199 | `dynamicFrom` | `string` | - | 动态 来源 |
| 200 | `dynamicBrushTimes` | `int32` | - | 动态 |
| 201 | `enableCtrTruncation` | `bool` | - | 启用 |
| 202 | `ctrTruncationNewOuterUnitNum` | `int32` | - | 业务字段 `ctrTruncationNewOuterUnitNum`（名称未提供可靠中文语义） |
| 203 | `ctrTruncationNewInnerUnitNum` | `int32` | - | 业务字段 `ctrTruncationNewInnerUnitNum`（名称未提供可靠中文语义） |
| 204 | `ctrTruncationOldOuterUnitNum` | `int32` | - | 业务字段 `ctrTruncationOldOuterUnitNum`（名称未提供可靠中文语义） |
| 205 | `ctrTruncationOldInnerUnitNum` | `int32` | - | 业务字段 `ctrTruncationOldInnerUnitNum`（名称未提供可靠中文语义） |
| 206 | `enableColdBootStrategy` | `bool` | - | 启用 |
| 207 | `coldBootPickedNumber` | `int32` | - | 业务字段 `coldBootPickedNumber`（名称未提供可靠中文语义） |
| 208 | `outerAdPriority` | `bool` | - | 广告 |
| 209 | `androidInnerCpcCtrThreshold` | `int64` | - | 业务字段 `androidInnerCpcCtrThreshold`（名称未提供可靠中文语义） |
| 210 | `iosInnerCpcCtrThreshold` | `int64` | - | 业务字段 `iosInnerCpcCtrThreshold`（名称未提供可靠中文语义） |
| 211 | `androidInnerCpcEcpmThreshold` | `int64` | - | 业务字段 `androidInnerCpcEcpmThreshold`（名称未提供可靠中文语义） |
| 212 | `iosInnerCpcEcpmThreshold` | `int64` | - | 业务字段 `iosInnerCpcEcpmThreshold`（名称未提供可靠中文语义） |
| 213 | `ipadInnerCpcEcpmThreshold` | `int64` | - | 业务字段 `ipadInnerCpcEcpmThreshold`（名称未提供可靠中文语义） |
| 214 | `androidInnerCpmCtrThreshold` | `int64` | - | 业务字段 `androidInnerCpmCtrThreshold`（名称未提供可靠中文语义） |
| 215 | `iosInnerCpmCtrThreshold` | `int64` | - | 业务字段 `iosInnerCpmCtrThreshold`（名称未提供可靠中文语义） |
| 216 | `androidInnerCpmEcpmThreshold` | `int64` | - | 业务字段 `androidInnerCpmEcpmThreshold`（名称未提供可靠中文语义） |
| 217 | `iosInnerCpmEcpmThreshold` | `int64` | - | 业务字段 `iosInnerCpmEcpmThreshold`（名称未提供可靠中文语义） |
| 218 | `switchOnLowCreativeWeight` | `bool` | - | 业务字段 `switchOnLowCreativeWeight`（名称未提供可靠中文语义） |
| 219 | `nonRotateSourceIndex` | `int32` | - | 来源 |
| 220 | `noOuterAdOverMaxBrush` | `bool` | - | 广告 |
| 221 | `cardIndexInnerOuterControl` | `int32` | - | 卡片 |
| 222 | `feedbackStrategyId` | `int32` | - | 标识 |
| 223 | `enableCvrThreshold` | `bool` | - | 启用 |
| 224 | `resistGif` | `int32` | - | 业务字段 `resistGif`（名称未提供可靠中文语义） |
| 225 | `landscape` | `bool` | - | 业务字段 `landscape`（名称未提供可靠中文语义） |
| 226 | `personalFlyFeedCtrThreshold` | `int64` | - | 信息流 |
| 227 | `personalFlyPlayPageCtrThreshold` | `int64` | - | 播放 分页 |
| 228 | `personalFlyFeedEcpmThreshold` | `int64` | - | 信息流 |
| 229 | `personalFlyPlayPageEcpmThreshold` | `int64` | - | 播放 分页 |
| 230 | `contentUpMinCtr` | `int64` | - | 内容 |
| 231 | `contentFlyFeedEcpmThreshold` | `int64` | - | 内容 信息流 |
| 232 | `contentFlyPlayPageEcpmThreshold` | `int64` | - | 内容 播放 分页 |
| 233 | `personalUpEcpmWeight` | `double` | - | 业务字段 `personalUpEcpmWeight`（名称未提供可靠中文语义） |
| 234 | `personalUpFeatureWeightExpName` | `string` | - | 名称 |
| 235 | `personalUpFeatureWeightInnerSquashing` | `double` | - | 业务字段 `personalUpFeatureWeightInnerSquashing`（名称未提供可靠中文语义） |
| 236 | `personalUpFeatureWeightOuterSquashing` | `double` | - | 业务字段 `personalUpFeatureWeightOuterSquashing`（名称未提供可靠中文语义） |
| 237 | `openDivin` | `bool` | - | 业务字段 `openDivin`（名称未提供可靠中文语义） |
| 238 | `upMid` | `int64` | - | 用户 ID |
| 239 | `followPolicy` | `bool` | - | 关注 |
| 240 | `outerBeatInnerExpName` | `string` | - | 名称 |
| 241 | `onFilterOptimize` | `bool` | - | 筛选 |
| 242 | `enablePredictionForDpa` | `bool` | - | 启用 |
| 243 | `openFlyDynamicThreshold` | `bool` | - | 动态 |
| 244 | `useNewDynamicThreshold` | `bool` | - | 动态 |
| 245 | `personUpDynamicThresholdPlayCounts` | `double` | - | 动态 播放 |
| 246 | `personUpDynamicThresholdFansIncreaseT` | `double` | - | 动态 |
| 247 | `personUpDynamicThresholdExpKey` | `string` | - | 动态 |
| 248 | `personUpDynamicThresholdPlayCountDefaultThreshold` | `double` | - | 动态 播放 数量 |
| 249 | `personUpDynamicThresholdFansIncreaseDefaultThreshold` | `double` | - | 动态 |
| 250 | `creativeGradeScore` | `int32` | - | 业务字段 `creativeGradeScore`（名称未提供可靠中文语义） |
| 251 | `creativeGradeStrategy` | `string` | - | 业务字段 `creativeGradeStrategy`（名称未提供可靠中文语义） |
| 252 | `enableCompanyProductFilter` | `bool` | - | 启用 筛选 |
| 253 | `removeComCreativeTypeFilter` | `bool` | - | 类型 筛选 |
| 254 | `limitAdxAfterTime` | `bool` | - | 限制 时间 |
| 255 | `pricingStrategyName` | `string` | - | 名称 |
| 256 | `innerDynamicPriceRatio` | `int32` | - | 动态 |
| 257 | `outerDynamicPriceRatio` | `int32` | - | 动态 |
| 258 | `enablePricingStrategy` | `bool` | - | 启用 |
| 259 | `enableParallel` | `bool` | - | 启用 |
| 260 | `playpageRecallStrategy` | `string` | - | 业务字段 `playpageRecallStrategy`（名称未提供可靠中文语义） |
| 261 | `feedRecallStrategy` | `string` | - | 信息流 |
| 262 | `businessMarkGroup` | `string` | - | 业务 |
| 263 | `dynamicFlyExpName` | `string` | - | 动态 名称 |
| 264 | `openDivinPcvr` | `bool` | - | 业务字段 `openDivinPcvr`（名称未提供可靠中文语义） |
| 265 | `openDivinPf` | `bool` | - | 业务字段 `openDivinPf`（名称未提供可靠中文语义） |
| 266 | `useH5` | `bool` | - | 业务字段 `useH5`（名称未提供可靠中文语义） |
| 267 | `h5AndroidTestVersion` | `int32` | - | 测试 版本 |
| 268 | `h5IosTestVersion` | `int32` | - | 测试 版本 |
| 269 | `h5IpadTestVersion` | `int32` | - | 测试 版本 |
| 270 | `openPlayPageDynamicTitle` | `bool` | - | 播放 分页 动态 标题 |
| 271 | `openFeedsDynamicTitle` | `bool` | - | 动态 标题 |
| 272 | `openPlayPageDynamicImg` | `bool` | - | 播放 分页 动态 |
| 273 | `openFeedsDynamicImg` | `bool` | - | 动态 |
| 274 | `dynamicTitleTableName` | `string` | - | 动态 标题 名称 |
| 275 | `dynamicImgTableName` | `string` | - | 动态 名称 |
| 276 | `ocpxNew` | `bool` | - | 业务字段 `ocpxNew`（名称未提供可靠中文语义） |
| 277 | `flyCpaConfigKey` | `string` | - | 配置 |
| 278 | `pcvrFlyStrategy` | `string` | - | 业务字段 `pcvrFlyStrategy`（名称未提供可靠中文语义） |
| 279 | `performanceExpName` | `string` | - | 名称 |
| 280 | `topViewId` | `int32` | - | 查看 标识 |
| 281 | `gameId` | `string` | - | 标识 |
| 282 | `playpageDpaCreativeCutOn` | `bool` | - | 业务字段 `playpageDpaCreativeCutOn`（名称未提供可靠中文语义） |
| 283 | `feedsDpaCreativeCutOn` | `bool` | - | 业务字段 `feedsDpaCreativeCutOn`（名称未提供可靠中文语义） |
| 284 | `feedsDpaCreativeCutCount` | `int32` | - | 数量 |
| 285 | `playpageDpaCreativeCutCount` | `int32` | - | 数量 |
| 286 | `dpaCutRandomRatio` | `int32` | - | 业务字段 `dpaCutRandomRatio`（名称未提供可靠中文语义） |
| 287 | `cutOffCreativeMinShow` | `int32` | - | 业务字段 `cutOffCreativeMinShow`（名称未提供可靠中文语义） |
| 288 | `powderRisingC` | `map<string, StringDoubleMap>` | map | 业务字段 `powderRisingC`（名称未提供可靠中文语义） |
| 289 | `powderRisingDefaultAvgCvr` | `double` | - | 业务字段 `powderRisingDefaultAvgCvr`（名称未提供可靠中文语义） |
| 290 | `powderRisingBetaMin` | `double` | - | 业务字段 `powderRisingBetaMin`（名称未提供可靠中文语义） |
| 291 | `powderRisingBetaMax` | `double` | - | 业务字段 `powderRisingBetaMax`（名称未提供可靠中文语义） |
| 292 | `powderRisingExpKey` | `string` | - | 业务字段 `powderRisingExpKey`（名称未提供可靠中文语义） |
| 293 | `sspParallel` | `bool` | - | 业务字段 `sspParallel`（名称未提供可靠中文语义） |
| 294 | `freqRules` | `FreqRuleDto` | repeated | 业务字段 `freqRules`（名称未提供可靠中文语义） |
| 295 | `ctrPredictorTimeout` | `int32` | - | 业务字段 `ctrPredictorTimeout`（名称未提供可靠中文语义） |
| 296 | `pcvrThresholdExpKey` | `string` | - | 业务字段 `pcvrThresholdExpKey`（名称未提供可靠中文语义） |
| 297 | `dpaCutByRecall` | `bool` | - | 业务字段 `dpaCutByRecall`（名称未提供可靠中文语义） |
| 298 | `feedsCloseSmallBudget` | `bool` | - | 业务字段 `feedsCloseSmallBudget`（名称未提供可靠中文语义） |
| 299 | `playpageCloseSmallBudget` | `bool` | - | 业务字段 `playpageCloseSmallBudget`（名称未提供可靠中文语义） |
| 300 | `sortAdx` | `bool` | - | 排序 |
| 301 | `sensitiveAccountIds` | `int64` | repeated | 账户 |
| 302 | `userAdsShowEtaForVip` | `int32` | - | 用户 |
| 303 | `preLoading` | `bool` | - | 业务字段 `preLoading`（名称未提供可靠中文语义） |
| 304 | `dmpOnExp` | `bool` | - | 业务字段 `dmpOnExp`（名称未提供可靠中文语义） |
| 305 | `dmpExpKey` | `string` | - | 业务字段 `dmpExpKey`（名称未提供可靠中文语义） |
| 306 | `dmpOnAgeExp` | `bool` | - | 业务字段 `dmpOnAgeExp`（名称未提供可靠中文语义） |
| 307 | `dmpOnGenderExp` | `bool` | - | 业务字段 `dmpOnGenderExp`（名称未提供可靠中文语义） |
| 308 | `dmpOnContentTagExp` | `bool` | - | 内容 标签 |
| 309 | `dmpOnGroupsExp` | `bool` | - | 业务字段 `dmpOnGroupsExp`（名称未提供可靠中文语义） |
| 310 | `dmpIgnoredType` | `int32` | - | 类型 |

### 响应 `com.bapis.bcg.sunspot.ad.dto.ServiceResponseDto`

中文说明：响应。

| 字段号 | 字段 | Proto 类型 | 修饰 | 中文说明 |
| --- | --- | --- | --- | --- |
| 1 | `code` | `int32` | - | 状态码 |
| 2 | `message_` | `string` | - | 消息 |
| 3 | `data` | `AdResponseDto` | - | 数据 |
