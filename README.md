# Awesome DSH Plugins

[English](README.en.md) | 简体中文

社区维护的 DeepSeek Harness 插件导航与介绍目录。

> [!IMPORTANT]
> 收录不代表官方背书、安全审计或运行兼容。安装第三方插件前，请检查上游源码、权限、依赖和许可证。

## 插件网站

访问地址：[dsh-plugins.org](https://dsh-plugins.org)

仓库同时提供部署在 Cloudflare Worker 上的双语插件集合网站，支持搜索、筛选、排序、固定提交安装命令复制，以及每个插件的中文与英文静态详情页。网站包含规范链接、语言替代链接、Open Graph、Twitter Card、JSON-LD、XML Sitemap、robots.txt、RSS、Web App Manifest 与 llms.txt。

本地运行：

```bash
npm install
npm run dev
```

质量检查与构建：

```bash
npm run check
npm test
npm run build
npx wrangler deploy --dry-run
npm run deploy
```

SEO 入口：[中文目录](https://dsh-plugins.org/) · [英文目录](https://dsh-plugins.org/en) · [站点地图](https://dsh-plugins.org/sitemap.xml) · [RSS](https://dsh-plugins.org/feed.xml) · [AI 发现说明](https://dsh-plugins.org/llms.txt)

## 插件目录

更新时间：2026-08-14T00:40:24.876Z

当前收录 410 个通过基础 bundle 清单校验的插件。插件地址和介绍均来自对应的上游仓库。

| 插件 | 介绍 | 包名 | 许可证 | 星标 |
| :--- | :--- | :--- | :---: | ---: |
| [liustack/modlens](https://github.com/liustack/modlens) | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics). | `@liustack/modlens` | MIT | 719 |
| [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | 解决DSH 官方尚无终端 TUI 痛点的补位之作，献给偏爱cli的各位极客：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。 | `dsh-cc-tui` | BSD-3-Clause | 224 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI. | `@dsh-external/dsh-vision-toolkit` | MIT | 163 |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理 | `dsh-better-sidebar` | MIT | 137 |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。 | `@dsh-external/dsh-ads` | NOASSERTION | 118 |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin for DeepSeek Harness | `dsh-agent-teams` | NOASSERTION | 83 |
| [liustack/modsearch](https://github.com/liustack/modsearch) | The web plugin for DeepSeek Harness, and the search bridge for every text-only coding agent. Ask the web or X, get structured JSON evidence (search, fetch, citations). | `@liustack/modsearch` | MIT | 65 |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil design preview and editing plugin for DSH | `@zseven-w/dsh-openpencil` | MIT | 37 |
| [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 | `@dsh-external/workflow` | MIT | 35 |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随 | `@dsh-external/dsh-visualize` | NOASSERTION | 33 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. | `dsh-open-in-vscode` | MIT | 33 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts. | `dsh-at-file` | MIT | 28 |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#<ref>&path:/.dsh-plugin | `whale-girl` | MIT | 28 |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules. | `dsh-notification` | MIT | 25 |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | deepseek harness对话和代码状态回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change Ledger | `@dsh-external/turn-rewind` | BSD-3-Clause | 23 |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 | `dsh-ui-status-label` | NOASSERTION | 21 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 | `@omdsh-dev/dsh-annotation` | MIT | 19 |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle. | `dsh-custom-tool` | MIT | 18 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) | `dsh-interconnect` | MIT | 15 |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill. | `@omdsh-dev/dsh-genui` | MIT | 14 |
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input. | `@dsh-external/dsh-computer-use` | MIT | 12 |
| [LoserFox/distill](https://github.com/LoserFox/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update | `@loserfox/distill` | NOASSERTION | 12 |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | DSH plugin: branch-based message editing, reroll, retry, version timeline | `dsh-message-edit` | NOASSERTION | 12 |
| [forrestchang/dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) | Support dsh runtime on Multica. | `@multica-ai/dsh-runtime` | NOASSERTION | 11 |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | dsh对话分享插件，一键分享你的对话 | `@dsh-external/dsh-share` | MIT | 11 |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 | `@deepseek-ai/dsh-plugin-check` | MIT | 11 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装 | `@deepseek-ai/dsh-toolkit` | MIT | 10 |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接 插件 | `dsh-acp-for-bitfun` | MIT | 9 |
| [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。 | `@dsh-external/dsh-side-panel` | BSD-3-Clause | 9 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 | `@deepseek-ai/dsh-security-audit` | MIT | 8 |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 为 dsh 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 | `@dingyi222666/dsh-focus-chat` | NOASSERTION | 7 |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 为AI回复自动添加表情的插件 | `@dsh-external/dsh-emoji` | MIT | 7 |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 | `@dsh-external/dsh-minigames` | BSD-3-Clause | 7 |
| [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config | `@loserfox/git-identity` | NOASSERTION | 7 |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 | `@deepseek-ai/dsh-session-health` | MIT | 7 |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | 一种类似MC Fabric的hook处理器 | `cordis-fabric-bundle` | NOASSERTION | 7 |
| [LoserFox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化 | `@loserfox/telegram` | NOASSERTION | 6 |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 | `@deepseek-ai/dsh-gomoku` | MIT | 6 |
| [openguardrails/dsh-tui](https://github.com/openguardrails/dsh-tui) | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle | `@openguardrails/dsh-tui` | NOASSERTION | 6 |
| [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | 上游仓库暂未提供介绍 | `dsh-plugin-ds-api-usage` | MIT | 6 |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent. | `@dsh-external/dsh-automation` | MIT | 6 |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | DSH WebUI sticker plugin for bidirectional user and agent reactions | `@dsh-external/dsh-stickers` | BSD-3-Clause | 6 |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 上游仓库暂未提供介绍 | `@dsh-external/dsh-super-injector` | NOASSERTION | 6 |
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 有效解决了写代码的时候账户不能同时亏钱的BUG | `dsh-stock-market` | BSD-3-Clause | 5 |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话 | `dsh-chat-import` | MIT | 5 |
| [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design) | `@dsh-external/dsh-deep-research` | MIT | 5 |
| [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost. | `dsh-context-doctor` | BSD-3-Clause | 5 |
| [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness | `dsh-openapi` | MIT | 4 |
| [gxinxing/deepseek-harness-tui](https://github.com/gxinxing/deepseek-harness-tui) | Terminal-native interactive TUI for DeepSeek Harness (dsh) — built with Ink, React for terminals | `deepseek-harness-tui` | MIT | 4 |
| [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox. | `dsh-agent-messaging` | MIT | 4 |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MineRU document parsing tools to the model | `@huanlin/dsh-plugin-mineru` | NOASSERTION | 4 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | dsh-scholar | `@dsh-scholar/research-plugin` | MIT | 4 |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 让AI帮你连数据库、写SQL的DSH插件 | `@deepseek-ai/dsh-data-agent` | MIT | 4 |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching | `@openmaic/dsh-openmaic` | MIT | 4 |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 | `@dsh-external/dsh-navbar` | MIT | 4 |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 为 DSH 增加桌面通知提醒 | `@bill9109/dsh-web-ui-notify` | BSD-3-Clause | 3 |
| [Buyi-wsgzg/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 | `@dsh-external/dsh-sidechain` | BSD-3-Clause | 3 |
| [congchuanling-dot/DSH-Telegram-Relay](https://github.com/congchuanling-dot/DSH-Telegram-Relay) | DSH Relay 让你可以通过 Telegram 远程与 DeepSeek Harness 对话，并接收通知。DSH Relay turns Telegram into a remote conversation and notification channel for DeepSeek Harness. | `dsh-telegram-relay` | Apache-2.0 | 3 |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 | `@deepseek-ai/dsh-track` | BSD-3-Clause | 3 |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 Qwen VLM 转译成文字后交给 DeepSeek 作答 | `dsh-vision-proxy` | MIT | 3 |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard. | `@dsh-external/dsh-sentinel` | BSD-3-Clause | 3 |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-yet-another-subagent` | NOASSERTION | 3 |
| [huashenglian/dsh-her-eyes](https://github.com/huashenglian/dsh-her-eyes) | 一个可以让ai自动调用VLM(多模态模型)进行视觉分析的dsh插件。A dsh plugin that allows AI to automatically invoke VLMs (multimodal models) for visual analysis. | `dsh-her-eyes` | MIT | 3 |
| [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation. | `dsh-stream-rules` | MIT | 3 |
| [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) | Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes. | `dsh-recall` | MIT | 3 |
| [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes | `dsh-win-notify` | MIT | 3 |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。 | `dsh-mnemon` | MIT | 3 |
| [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器 | `@deepseek-ai/dsh-tool-calculator` | MIT | 3 |
| [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具 | `@deepseek-ai/dsh-tool-csv` | MIT | 3 |
| [SnowCrescenter-tech/dsh-milestone](https://github.com/SnowCrescenter-tech/dsh-milestone) | Git-style milestone timeline for DeepSeek Harness - hover for metadata, click to jump to any message. 会话里程碑导航条：像 Git 提交图一眼定位每条提问，悬停看时间/轮次/耗时/TTFT，点击即跳转。 | `dsh-milestone` | MIT | 3 |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools. | `@dsh-external/dsh-better-browser` | BSD-3-Clause | 3 |
| [Toukaiteio/dsh-plugin-installer](https://github.com/Toukaiteio/dsh-plugin-installer) | A marketplace plugin to quickly integrate your DeepSeek Harness into the GitHub plugin ecosystem. | `dsh-plugin-installer` | MIT | 3 |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 | `@dsh-external/dsh-task-status` | MIT | 3 |
| [yanglongyun/dsh-ramify](https://github.com/yanglongyun/dsh-ramify) | Ramify 是 DeepSeek Harness 的创意分支画布插件，用树状工作区生成、对比和迭代多个可交互方案。 | `@ramify/dsh-ramify` | MIT | 3 |
| [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Token cost tracker for DeepSeek Harness | `dsh-plugin-cost-tracker` | MIT | 3 |
| [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | 上游仓库暂未提供介绍 | `@zerohackz/dsh-openflowframes` | GPL-3.0 | 3 |
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH 原生鸿蒙设备桥：hdc 工具让 Agent 完成截图-看图-装包-验证的闭环调试 / DSH-native HarmonyOS device bridge | `dsh-hdc-bridge` | MIT | 2 |
| [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放 | `dsh-douyin` | BSD-3-Clause | 2 |
| [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) | DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView). | `dsh-mac-desktop` | MIT | 2 |
| [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin). | `deepseek-harness-plugin-mcp` | MIT | 2 |
| [btspoony/dsh-advisor](https://github.com/btspoony/dsh-advisor) | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 | `dsh-advisor` | MIT | 2 |
| [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | 上游仓库暂未提供介绍 | `dsh-learn-everything` | NOASSERTION | 2 |
| [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap | `dsh-superpowers` | NOASSERTION | 2 |
| [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | 上游仓库暂未提供介绍 | `@detpecca/dsh-llm-wiki` | MIT | 2 |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 | `@dingyi222666/dsh-session-notification` | NOASSERTION | 2 |
| [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest. | `dsh-tiered-approval` | MIT | 2 |
| [erduotong/dsh-plugin-graph](https://github.com/erduotong/dsh-plugin-graph) | 一个Deepseek Harness的插件关系图谱可视化插件 | `dsh-plugin-graph` | MIT | 2 |
| [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Task board plugin for the DeepSeek Harness Web UI | `dsh-kanban` | MIT | 2 |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis. | `dsh-plugin-deepeye` | NOASSERTION | 2 |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled. | `dsh-search-mcp` | MIT | 2 |
| [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | 上游仓库暂未提供介绍 | `dsh-token-usage` | MIT | 2 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 上游仓库暂未提供介绍 | `@deepseek-ai/dsh-deepresearch` | NOASSERTION | 2 |
| [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | 上游仓库暂未提供介绍 | `@deepseek-ai/dsh-notebooks` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-better-sidebar-plugin-office` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-interpreters` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-sleep` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-ya-workspace-sidebar` | NOASSERTION | 2 |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools) | `dsh-record-replay` | MIT | 2 |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__* | `dsh-mcp-manager` | MIT | 2 |
| [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Reasonix-style sound effects for DeepSeek Harness: generative pentatonic ambient music while the agent works, E6-G6-C7 success chime, A6-E6 attention chime (Web Audio, zero assets). | `dsh-sound-effects-plugin` | MIT | 2 |
| [KarlOfLaw/dsh-goal-mode-enhance](https://github.com/KarlOfLaw/dsh-goal-mode-enhance) | 为 DeepSeek Harness 提供可视化 goal 模式：Goal 栏 / 头部入口 / 设置页（历史+多会话总览）/ goal_overview 模型工具 | `dsh-goal-mode` | MIT | 2 |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 | `deepseek-pet` | MIT | 2 |
| [lhmd/dsh-director-toolkit](https://github.com/lhmd/dsh-director-toolkit) | DSH Director Toolkit is a DeepSeek Harness plugin for 3D artists, technical designers, and creative coders. Paste a half-formed idea, a reference note, or a portfolio caption and get a compact direction pack for Blender, Three.js, Houdini, or C4D. | `@lhmd/dsh-director-toolkit` | MIT | 2 |
| [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) | DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。 | `dsh-model-config-sync` | MIT | 2 |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again. | `dsh-undo` | MIT | 2 |
| [loudMore/dsh-drop-to-path](https://github.com/loudMore/dsh-drop-to-path) | DSH 插件:图片与文件直达纯文本模型——图片保留原生附件体验,PDF/Office/压缩包/视频/音频显示为附件栏方块,点击发送时自动转为工作区路径,配合 dsh-vision-toolkit 粘贴即看图。A DSH plugin that delivers images AND files to text-only models as workspace paths: images keep the native attachment UI, other files show as square chips in the rail, paths append on send — pairs with dsh-vision-toolkit. | `@dsh-external/dsh-drop-to-path` | MIT | 2 |
| [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin | `shopline-ai-toolkit-dsh` | MIT | 2 |
| [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop. | `dsh-playwright-cli` | MIT | 2 |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | DSH 插件：给每次消息后注入感谢语（deepseek-manners） | `deepseek-manners` | NOASSERTION | 2 |
| [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio) | `dsh-prompt-studio` | BSD-3-Clause | 2 |
| [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only). | `dsh-local-filetree` | NOASSERTION | 2 |
| [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | session 关系型数据库持久化 | `@morlay/session-persistence-rdb` | NOASSERTION | 2 |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Nowledge Mem community plugin bundle for DeepSeek Harness | `nowledge-mem-deepseek-harness` | NOASSERTION | 2 |
| [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | 上游仓库暂未提供介绍 | `@omdsh/dsh-hub` | MIT | 2 |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 | `@dsh-external/dsh-inspect` | MIT | 2 |
| [omdsh-dev/dsh-tool-diff](https://github.com/omdsh-dev/dsh-tool-diff) | DSH Diff 工具插件：文本/JSON/CSV/Markdown 结构化比较与 unified diff，零依赖只读，注册 diff 工具 | `@deepseek-ai/dsh-tool-diff` | MIT | 2 |
| [omdsh-dev/dsh-tool-encoding](https://github.com/omdsh-dev/dsh-tool-encoding) | DSH 编码/哈希工具插件：base64/base64url/url/hex 编解码、md5/sha1/sha256/sha512 哈希、UUID 生成，零依赖 | `@deepseek-ai/dsh-tool-encoding` | MIT | 2 |
| [omdsh-dev/dsh-tool-json](https://github.com/omdsh-dev/dsh-tool-json) | DSH JSON 查询工具插件：JMESPath 子集查询，零依赖递归下降解析器 | `@deepseek-ai/dsh-tool-json` | MIT | 2 |
| [omdsh-dev/dsh-tool-markdown](https://github.com/omdsh-dev/dsh-tool-markdown) | DSH Markdown 工具插件：HTML↔Markdown 转换、GFM 表格规范化、目录生成，零依赖轻量解析器，注册 markdown 工具 | `@deepseek-ai/dsh-tool-markdown` | MIT | 2 |
| [omdsh-dev/dsh-tool-regex](https://github.com/omdsh-dev/dsh-tool-regex) | DSH 正则工具插件：测试匹配/提取捕获组/安全替换/静态解释正则（不执行代码），零依赖，注册 regex 工具 | `@deepseek-ai/dsh-tool-regex` | MIT | 2 |
| [omdsh-dev/dsh-tool-schema](https://github.com/omdsh-dev/dsh-tool-schema) | DSH JSON Schema 验证工具插件：validate/paths/explain/normalize，零网络零动态执行 | `@deepseek-ai/dsh-tool-schema` | MIT | 2 |
| [omdsh-dev/dsh-tool-stat](https://github.com/omdsh-dev/dsh-tool-stat) | DSH 统计工具插件：描述统计/百分位数/频数分布/相关性，零依赖纯函数确定性 | `@deepseek-ai/dsh-tool-stat` | MIT | 2 |
| [omdsh-dev/dsh-tool-time](https://github.com/omdsh-dev/dsh-tool-time) | DSH 时间工具插件：严格 ISO 8601 解析、IANA 时区转换、UTC 日历运算、固定时长差，零依赖 | `@deepseek-ai/dsh-tool-time` | MIT | 2 |
| [omdsh-dev/sandbox-micro](https://github.com/omdsh-dev/sandbox-micro) | microsandbox支持 | `@deepseek-ai/dsh-sandbox-microsandbox` | NOASSERTION | 2 |
| [orriduck/dsh-tui](https://github.com/orriduck/dsh-tui) | A small, session-aware terminal UI for DeepSeek Harness | `dsh-tui` | MIT | 2 |
| [PerryLink/dsh-claude-move](https://github.com/PerryLink/dsh-claude-move) | DeepSeek Harness (dsh) plugin: migrate Claude Code sessions, memory, skills and CLAUDE.md into DSH with seamless resume (claude_scan / import_claude / resume-claude / web panel) | `dsh-claude-move` | Apache-2.0 | 2 |
| [PivotStackIntelligence/dsh-github](https://github.com/PivotStackIntelligence/dsh-github) | 上游仓库暂未提供介绍 | `dsh-github` | MIT | 2 |
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 折叠对话当中众多的“无用消息”，例如Think、Bash等 | `dsh-web-archive` | NOASSERTION | 2 |
| [Roy-oss1/dsh-lark](https://github.com/Roy-oss1/dsh-lark) | Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards \| 飞书 DeepSeek Harness 插件 | `dsh-lark-channel` | BSD-3-Clause | 2 |
| [sakikoTGW/pack-agent](https://github.com/sakikoTGW/pack-agent) | Agent Modpack — 像装 MC 整合包一样，装你的 agent。 | `@sakikotgw/pack-agent` | MIT | 2 |
| [securstack/securstack-dsh-plugin](https://github.com/securstack/securstack-dsh-plugin) | SecurStack adapter for DeepSeek Harness: run repository security scans, policy gates, doctor diagnostics, and JSON CLI results from safe AI-agent tools. | `@securstack/dsh-plugin` | MIT | 2 |
| [STARDUSTLC666/dsh-email](https://github.com/STARDUSTLC666/dsh-email) | DeepSeek Harness 邮件插件：email_list/read/search/send/folders/attachment 六工具，内置 QQ/163/126/新浪/阿里/Gmail/Outlook/iCloud 八个预设，多账号、附件收发、Web 设置页配置，纯 Node 全平台。 | `dsh-email` | MIT | 2 |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback. | `@dsh-external/dsh-plannotator` | MIT | 2 |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | as is, no warranty | `@deepseek-ai/dsh-tui` | BSD-3-Clause | 2 |
| [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) | DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP. | `@deepseek-ai/dsh-trace` | BSD-3-Clause | 2 |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 | `@dsh-external/dsh-loop` | MIT | 2 |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 | `@dsh-external/dsh-evolve` | NOASSERTION | 2 |
| [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent. | `@dsh-plugin/dsh-review-loop` | MIT | 2 |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. | `@xilin3/dsh-prompt-persona` | MIT | 2 |
| [XiLuovo/dsh-session-timeline](https://github.com/XiLuovo/dsh-session-timeline) | DeepSeek Harness 会话时间轴插件：横短横线波浪、当前消息定位、点击跳转、圆角预览 tooltip、可收起/展开 | `dsh-session-timeline` | MIT | 2 |
| [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | 上游仓库暂未提供介绍 | `dsh-side-panel` | MIT | 2 |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness | `dsh-openai-codex-auth` | MIT | 2 |
| [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 上游仓库暂未提供介绍 | `dsh-blue-whale-maid` | NOASSERTION | 2 |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code memory, skills, and config into DeepSeek Harness | `dsh-plugin-claude-bridge` | MIT | 2 |
| [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Bridge codex skills and config into DeepSeek Harness | `dsh-plugin-codex-bridge` | MIT | 2 |
| [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Bridge opencode skills and config into DeepSeek Harness | `dsh-plugin-opencode-bridge` | MIT | 2 |
| [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Bridge pi skills and config into DeepSeek Harness | `dsh-plugin-pi-bridge` | MIT | 2 |
| [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) | 上游仓库暂未提供介绍 | `@humanize/dsh-humanize` | NOASSERTION | 2 |
| [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt | `dsh-wikilink` | MIT | 2 |
| [030611/qiushi-dsh-evidence-audit](https://github.com/030611/qiushi-dsh-evidence-audit) | Observe-only hash-chained evidence receipts for DeepSeek Harness | `qiushi-dsh-evidence-audit` | MIT | 1 |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web | `@dsh-external/dsh-spotlight` | BSD-3-Clause | 1 |
| [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件 | `dsh-plugin-miliastra-toolbox` | NOASSERTION | 1 |
| [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Read-only Codex setup compatibility scanner for DeepSeek Harness | `dsh-codex-import` | MIT | 1 |
| [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | 上游仓库暂未提供介绍 | `@a179-sanae/dsh-code-check` | BSD-3-Clause | 1 |
| [Acidmoon/DIzzy-DSH](https://github.com/Acidmoon/DIzzy-DSH) | My DSH plugins | `dizzy-dsh` | NOASSERTION | 1 |
| [akira399/dsh-godot-skill](https://github.com/akira399/dsh-godot-skill) | Godot Engine 4.x 全栈游戏开发技能插件 for DeepSeek Harness (DSH) — registers the godot-4-development skill at runtime | `dsh-godot-skill` | MIT | 1 |
| [akira399/dsh-plugin-publisher](https://github.com/akira399/dsh-plugin-publisher) | DSH 插件开发与 GitHub 发布工作流技能插件 (consent-gated) — develop, verify, publish & marketplace-visible DSH plugins | `dsh-plugin-publisher` | MIT | 1 |
| [alooshxl/dsh-session-pins](https://github.com/alooshxl/dsh-session-pins) | Persistent pinned-session menu for DeepSeek Harness | `@dsh-external/dsh-session-pins` | MIT | 1 |
| [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | 上游仓库暂未提供介绍 | `dsh-custom-css` | BSD-3-Clause | 1 |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering) | `dsh-web-search-pro` | MIT | 1 |
| [Areium/dsh-fail-logger](https://github.com/Areium/dsh-fail-logger) | DeepSeek Harness（DSH）插件：自动记录所有执行模式（原生工具 / PTC run_code / 代码内嵌工具调用）的工具失败错因，去重、计数、确定性排序后沉淀进 skill 的机器维护实录区段——让 Agent 越用越少错。 | `dsh-fail-logger` | MIT | 1 |
| [Asaiuta/dsh-session-hub](https://github.com/Asaiuta/dsh-session-hub) | Aggregate and natively control multiple remote DeepSeek Harness (DSH) servers' sessions from one official Web UI — hub gateway + official-UI bridge. 多服务器 DSH 会话聚合与原生操控 | `dsh-session-hub` | MIT | 1 |
| [BeAChanger/dsh-openclaw-acp](https://github.com/BeAChanger/dsh-openclaw-acp) | DeepSeek Harness bundle for OpenClaw and WeChat over ACP | `dsh-openclaw-acp` | MIT | 1 |
| [ben7am1n/dsh-browser](https://github.com/ben7am1n/dsh-browser) | Playwright-powered browser automation for DeepSeek Harness | `dsh-browser` | MIT | 1 |
| [ben7am1n/dsh-claude-marketplace](https://github.com/ben7am1n/dsh-claude-marketplace) | Claude Code marketplace compatibility for DeepSeek Harness | `dsh-claude-marketplace` | MIT | 1 |
| [ben7am1n/dsh-deepseek-usage](https://github.com/ben7am1n/dsh-deepseek-usage) | DeepSeek balance and token usage tools for DeepSeek Harness | `dsh-deepseek-usage` | MIT | 1 |
| [ben7am1n/dsh-lens-lite](https://github.com/ben7am1n/dsh-lens-lite) | Post-edit diagnostics for DeepSeek Harness | `dsh-lens-lite` | MIT | 1 |
| [ben7am1n/dsh-mcp-proxy](https://github.com/ben7am1n/dsh-mcp-proxy) | Context-cheap lazy MCP access for DeepSeek Harness | `dsh-mcp-proxy` | MIT | 1 |
| [ben7am1n/dsh-memory](https://github.com/ben7am1n/dsh-memory) | Durable cross-session SQLite memory for DeepSeek Harness | `dsh-memory` | MIT | 1 |
| [ben7am1n/dsh-review-skills](https://github.com/ben7am1n/dsh-review-skills) | 上游仓库暂未提供介绍 | `dsh-review-skills` | NOASSERTION | 1 |
| [ben7am1n/dsh-security-scan](https://github.com/ben7am1n/dsh-security-scan) | 上游仓库暂未提供介绍 | `dsh-security-scan` | NOASSERTION | 1 |
| [ben7am1n/dsh-telegram](https://github.com/ben7am1n/dsh-telegram) | 上游仓库暂未提供介绍 | `dsh-telegram` | NOASSERTION | 1 |
| [ben7am1n/dsh-webhook-bridge](https://github.com/ben7am1n/dsh-webhook-bridge) | 上游仓库暂未提供介绍 | `dsh-webhook-bridge` | NOASSERTION | 1 |
| [benzhoupo/dsh-effort-config](https://github.com/benzhoupo/dsh-effort-config) | dsh plugin: configure reasoning-effort levels (wire spellings), route default level and Anthropic token budgets for third-party models from the settings page; selection reuses the native model-picker Effort panel. | `dsh-effort-config` | NOASSERTION | 1 |
| [BiBoyang/dsh-eval-harness](https://github.com/BiBoyang/dsh-eval-harness) | DSH 插件评测工具：YAML 用例驱动真实 agent 回归评测 + baseline 对比 PASS/WARN/FAIL 门禁｜Regression eval harness for DeepSeek Harness plugins | `dsh-eval-harness` | NOASSERTION | 1 |
| [BiBoyang/dsh-im-bridge](https://github.com/BiBoyang/dsh-im-bridge) | DSH 插件：把 DeepSeek Harness 桥接到 IM（v0.1 微信/iLink；钉钉/飞书/Telegram 预留）。turn/approval 推送 + 远程批准/注入，持久去重/收敛分段/合并窗口。 | `dsh-im-bridge` | NOASSERTION | 1 |
| [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | DSH 文档阅读模式 | `@dsh-external/dsh-101` | BSD-3-Clause | 1 |
| [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 分享任意段落的 DSH 对话 | `@bill9109/dsh-conversation-share` | BSD-3-Clause | 1 |
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 | `@bill9109/dsh-drag-and-drop` | BSD-3-Clause | 1 |
| [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | DSH 结合 Kimi WebBridge | `@bill9109/dsh-webbridge` | BSD-3-Clause | 1 |
| [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) | DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker. | `dsh-model-selector` | MIT | 1 |
| [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) | Skills management page for DeepSeek Harness Web Settings (dsh plugin) | `dsh-skill-manager` | MIT | 1 |
| [Bleed00/dsh-claude-mem](https://github.com/Bleed00/dsh-claude-mem) | DeepSeek Harness plugin integrating claude-mem (memory for dsh) | `@bleed00/dsh-claude-mem` | NOASSERTION | 1 |
| [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 | `dsh-llm-fallbacks` | MIT | 1 |
| [cesaryike/dsh-image-to-path](https://github.com/cesaryike/dsh-image-to-path) | DSH 插件:让纯文本模型对话也能拖图/贴图——图片自动保存到会话工作区,以文件路径交给模型(多模态模型不受影响) | `dsh-image-to-path` | MIT | 1 |
| [chushixixin/dsh-harness-mcp-server](https://github.com/chushixixin/dsh-harness-mcp-server) | Expose DeepSeek Harness agent capabilities as an MCP server (brain=Hermes, arms=Harness) | `@chushixixin/dsh-harness-mcp-server` | MIT | 1 |
| [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection. | `dsh-toolbelt` | MIT | 1 |
| [CrazyShout/dsh-ssh-remote](https://github.com/CrazyShout/dsh-ssh-remote) | SSH remote workspaces for DeepSeek Harness: browse/read/write remote files, run remote commands, with connection status dots. | `dsh-ssh-remote` | MIT | 1 |
| [csiroqa/dsh-schedule](https://github.com/csiroqa/dsh-schedule) | DeepSeek Harness（DSH）定时任务 + 状态监控插件：按 cron 时间表自动触发 Agent 执行任务，/status 与设置页仪表盘查看系统与 harness 综合状态。Scheduled tasks (cron) + status monitoring plugin for DeepSeek Harness. | `@dsh-external/dsh-schedule` | MIT | 1 |
| [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。 | `dsh-resume-plugin` | MIT | 1 |
| [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main | `dsh-usage-cost` | MIT | 1 |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | Open task handoff protocol for DeepSeek Harness, WorkBuddy, Claude Code and Codex — verified state, not chat logs | `task-passport` | MIT | 1 |
| [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Declarative deny-by-default tool policy plugin for DeepSeek Harness | `dsh-tool-policy` | MIT | 1 |
| [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Capability-aware reasoning controls and Fast model routing for DeepSeek Harness | `dsh-model-modes` | MIT | 1 |
| [dyuan311/dsh-openai-codex-oauth](https://github.com/dyuan311/dsh-openai-codex-oauth) | ChatGPT subscription OAuth for the openai-codex provider in DeepSeek Harness | `dsh-openai-codex-oauth` | MIT | 1 |
| [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | 上游仓库暂未提供介绍 | `dsh-desktop-window` | NOASSERTION | 1 |
| [GengDaPeng/dsh-agent-message](https://github.com/GengDaPeng/dsh-agent-message) | 上游仓库暂未提供介绍 | `dsh-agent-message` | MIT | 1 |
| [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it. | `dsh-context-lens` | MIT | 1 |
| [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | DSH Web client plugin: pins off-screen expanded collapsible tags (Think / tool cards) to the top of the conversation viewport with a collapse hotkey | `dsh-sticky-disclosure` | MIT | 1 |
| [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | 上游仓库暂未提供介绍 | `@deepseek-ai/dsh-ultra-ui` | NOASSERTION | 1 |
| [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin | `dsh-report-html` | NOASSERTION | 1 |
| [Hu9956/dsh-codex-provider](https://github.com/Hu9956/dsh-codex-provider) | OpenAI Codex provider for DeepSeek Harness with device-code OAuth, Codex CLI import, token refresh, and a web settings panel. | `dsh-codex-provider` | MIT | 1 |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-aigc-canvas` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-anti-ads` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-auto-blame` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 深夜寂寞？来玩 D399 — 当模型生成时弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | `@huanlin/dsh-plugin-d399` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-spur` | NOASSERTION | 1 |
| [huguangyu666/dsh-plugin-session-import](https://github.com/huguangyu666/dsh-plugin-session-import) | DeepSeek Harness plugin: import claude-code / codex / reasonix / zcode sessions | `dsh-plugin-session-import` | MIT | 1 |
| [Hyperionjust/dsh-tool-underseal](https://github.com/Hyperionjust/dsh-tool-underseal) | 上游仓库暂未提供介绍 | `dsh-tool-underseal` | Apache-2.0 | 1 |
| [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") | `dsh-tool-approval` | BSD-3-Clause | 1 |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu controller for DeepSeek Harness | `dsh-lark-bridge` | MIT | 1 |
| [Isekai-Mfu/dsh-mimo-vision-hint](https://github.com/Isekai-Mfu/dsh-mimo-vision-hint) | DSH plugin: dispatch image-recognition tasks to an opencode-go mimo-v2.5 subagent via system-prompt injection | `dsh-mimo-vision-hint` | MIT | 1 |
| [jelly-000/dsh-balance-monitor](https://github.com/jelly-000/dsh-balance-monitor) | DeepSeek account balance, remaining-ratio bar, and today's spend in the dsh sidebar footer. | `dsh-balance-monitor` | MIT | 1 |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness | `@dsh-cowork/chatnode-wechat` | MIT | 1 |
| [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) | Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory_read/memory_expand tools, recall index, and a dsh-memory CLI. | `@dsh-memory/bundle` | MIT | 1 |
| [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe) | `@dsh-routines/bundle` | MIT | 1 |
| [Jesse-njx/dsh-skillport](https://github.com/Jesse-njx/dsh-skillport) | Every skill you already have — Claude Code, Codex, Cursor, Gemini CLI — works in DSH: Agent Skills SKILL.md discovery, Tier-2 conversions, find_skill search, and a skills doctor | `@dsh-skillport/bundle` | MIT | 1 |
| [jihongboo/dsh-apple-mode](https://github.com/jihongboo/dsh-apple-mode) | 上游仓库暂未提供介绍 | `dsh-apple-mode` | MIT | 1 |
| [jiruidai/dsh-meta-orchestrator](https://github.com/jiruidai/dsh-meta-orchestrator) | A model-native meta-agent plugin for DeepSeek Harness that uses the underlying model’s reasoning and planning capabilities to synthesize task-specific workflows at runtime and coordinate tools and subagents. | `dsh-meta-orchestrator` | MIT | 1 |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo | `dsh-jumpserver` | MIT | 1 |
| [keepermttl/dsh-archive-viewer](https://github.com/keepermttl/dsh-archive-viewer) | DeepSeek Harness 归档会话管理插件：查看/恢复已归档会话（回到原工作区分组）+ 右上角一键关闭 dsh。MIT 许可，欢迎收录到任何插件合集，注明出处即可。 | `@dsh-external/dsh-archive-viewer` | MIT | 1 |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private. | `@dsh-external/dsh-diff-viewer` | NOASSERTION | 1 |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | 上游仓库暂未提供介绍 | `@dsh-external/dsh-mobile` | BSD-3-Clause | 1 |
| [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | 上游仓库暂未提供介绍 | `@dsh-external/dsh-split-panes` | BSD-3-Clause | 1 |
| [lhmd/dsh-promotion-toolkit](https://github.com/lhmd/dsh-promotion-toolkit) | 把你的任何想法，变成每个平台原生的宣发内容 \| Turn any idea into platform-native publicity | `@lhmd/dsh-promotion-toolkit` | MIT | 1 |
| [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表 | `dsh-deepseek-balance` | MIT | 1 |
| [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺 | `dsh-plugin-doctor` | MIT | 1 |
| [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄 | `dsh-reloader` | MIT | 1 |
| [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | DeepSeek API balance overlay for DeepSeek Harness | `dsh-balance-display` | MIT | 1 |
| [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) | 上游仓库暂未提供介绍 | `dsh-session-index` | MIT | 1 |
| [LX2000WASD/dsh-web-plugin-manager](https://github.com/LX2000WASD/dsh-web-plugin-manager) | 在 Web UI 中一键管理 DeepSeek Harness (DSH) 插件：查看、实时启停、安装/卸载、环境管理、插件市场。bundle 与非 bundle 插件全覆盖。 | `dsh-web-plugin-manager` | MIT | 1 |
| [MC5lan/dsh-multimodal](https://github.com/MC5lan/dsh-multimodal) | 给 DeepSeek 安装一双眼睛和一支画笔:会话里直接贴截图/图片,GLM 视觉模型先精确转写图片内容(报错信息、代码、界面逐字保留),然后 DeepSeek 继续处理你的问题——同一轮完成,全程无感;需要配图时,DeepSeek 自动调用文生图后端出图并显示在会话中。 | `dsh-multimodal` | MIT | 1 |
| [Mingxi2077/dsh-plugin-review](https://github.com/Mingxi2077/dsh-plugin-review) | DSH Review Mode plugin: multi-dimension code health scoring + radar chart + review history (DSH 审查模式插件) | `plugin-review` | MIT | 1 |
| [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | DSH 插件：捕捉每次上行模型 API payload，JSON 落盘 | `dsh-payload-capture` | NOASSERTION | 1 |
| [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) | Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin | `@dsh-external/dsh-web-skins` | MIT | 1 |
| [Moximxxx/dsh-find-skill](https://github.com/Moximxxx/dsh-find-skill) | dsh plugin bridging the vercel-labs/skills ecosystem: LLM-driven skill search, install, and lifecycle for temp/project/global scopes.  | `dsh-find-skill` | MIT | 1 |
| [Nexus-Aethra/DSH-plugin-switch](https://github.com/Nexus-Aethra/DSH-plugin-switch) | DSH Plugin Switch is a marketplace for DeepSeek Harness plugins and skills. It lets users browse, search, and install community projects from GitHub, automatically detecting whether a repository is a DSH plugin or a DSH skill and installing it to the correct location. | `dsh-plugin-switch` | NOASSERTION | 1 |
| [omdsh-dev/7d7d](https://github.com/omdsh-dev/7d7d) | 上游仓库暂未提供介绍 | `@mattheliu/7d7d` | MIT | 1 |
| [omdsh-dev/dsh-auto-chess](https://github.com/omdsh-dev/dsh-auto-chess) | DSH Web里的自走棋插件：人机对战或双AI对弈 | `@deepseek-ai/dsh-auto-chess` | MIT | 1 |
| [omdsh-dev/dsh-book2skill](https://github.com/omdsh-dev/dsh-book2skill) | DSH book-to-skill plugin: a 5-stage long task (fetch → parse → understand → generate → install) with 3 human gates, host tools for the agent and a browser timeline panel | `dsh-book2skill` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-daily-fortune](https://github.com/omdsh-dev/dsh-daily-fortune) | DSH daily fortune plugin with Guan Yin lots, Tarot spreads, and daily quotes | `@deepseek-ai/dsh-daily-fortune` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-daily-progress](https://github.com/omdsh-dev/dsh-daily-progress) | 上游仓库暂未提供介绍 | `dsh-daily-progress` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-ernie-image](https://github.com/omdsh-dev/dsh-ernie-image) | 上游仓库暂未提供介绍 | `dsh-ernie-image` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-fun-typewriter](https://github.com/omdsh-dev/dsh-fun-typewriter) | DSH Typewriter: WebAudio typing ambience with a plugin-owned settings API and zero audio assets | `@deepseek-ai/dsh-fun-typewriter` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-fun-weather](https://github.com/omdsh-dev/dsh-fun-weather) | DSH weather tab and weather-following themes powered by Open-Meteo | `@deepseek-ai/dsh-fun-weather` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-kb-sieve](https://github.com/omdsh-dev/dsh-kb-sieve) | DSH knowledge-base plugin: build audit-able KB packs (references + SQLite FTS5) from md/txt/docx/pdf, deterministic retrieval (kb_query) and original-text reading (kb_read), zero-script generated skills. Apache-2.0. | `@dsh-external/dsh-kb-sieve` | Apache-2.0 | 1 |
| [omdsh-dev/dsh-longbridge](https://github.com/omdsh-dev/dsh-longbridge) | 上游仓库暂未提供介绍 | `dsh-longbridge` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-paddle-ocr](https://github.com/omdsh-dev/dsh-paddle-ocr) | 上游仓库暂未提供介绍 | `dsh-paddle-ocr` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-pet-corner](https://github.com/omdsh-dev/dsh-pet-corner) | DSH Pet Corner: a floating pet, keyless pet-image proxy, favorites, and plugin-owned settings API | `@deepseek-ai/dsh-pet-corner` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-revive](https://github.com/omdsh-dev/dsh-revive) | DSH 一键复活：重启后给所有被打断的会话自动发送「继续」指令（/revive 命令 + revive_sessions 工具 + 浏览器一键按钮） | `dsh-revive` | BSD-3-Clause | 1 |
| [omdsh-dev/dsh-scout](https://github.com/omdsh-dev/dsh-scout) | 面向 DeepSeek Harness 的只读环境探测插件，为智能体提供运行环境、软件版本、系统资源、端口、服务、硬件及工作区信息。 | `@deepseek-ai/dsh-tool-scout` | NOASSERTION | 1 |
| [omdsh-dev/dsh-voice-funasr](https://github.com/omdsh-dev/dsh-voice-funasr) | 上游仓库暂未提供介绍 | `dsh-voice-funasr` | MIT | 1 |
| [omdsh-dev/ex-setting](https://github.com/omdsh-dev/ex-setting) | DSH的设置扩展 | `@deepseek-ai/dsh-ex-setting` | BSD-3-Clause | 1 |
| [omdsh-dev/omdsh-runtime](https://github.com/omdsh-dev/omdsh-runtime) | 上游仓库暂未提供介绍 | `@omdsh/runtime` | MIT | 1 |
| [omdsh-dev/Qwen-MM-Plugins](https://github.com/omdsh-dev/Qwen-MM-Plugins) | Qwen-MM-Plugins支持 | `@deepseek-ai/dsh-qwen-mm` | NOASSERTION | 1 |
| [omdsh-dev/sandbox-mxc](https://github.com/omdsh-dev/sandbox-mxc) | 微软跨平台沙盒支持 | `@deepseek-ai/dsh-sandbox-mxc` | NOASSERTION | 1 |
| [omdsh-dev/sandbox-nono](https://github.com/omdsh-dev/sandbox-nono) | nono沙盒支持 | `@deepseek-ai/dsh-sandbox-nono` | NOASSERTION | 1 |
| [omdsh-dev/session-teleport](https://github.com/omdsh-dev/session-teleport) | 上游仓库暂未提供介绍 | `@mattheliu/session-teleport` | BSD-3-Clause | 1 |
| [omdsh-dev/web-components](https://github.com/omdsh-dev/web-components) | web-components支持 | `@deepseek-ai/dsh-client-web-component` | NOASSERTION | 1 |
| [Opr4Mp3r/deepseek-harness-plugin-from-scratch](https://github.com/Opr4Mp3r/deepseek-harness-plugin-from-scratch) | Code-audited, progressive guide to production-grade DeepSeek Harness plugins | `deepseek-harness-plugin-from-scratch` | MIT | 1 |
| [pandashere/dsh-codex-bridge](https://github.com/pandashere/dsh-codex-bridge) | Codex CLI bridge plugin for DeepSeek Harness with host tools and a Web conversation tab. | `dsh-codex-bridge` | MIT | 1 |
| [pandashere/dsh-kimi-bridge](https://github.com/pandashere/dsh-kimi-bridge) | Kimi CLI bridge plugin for DeepSeek Harness with review-only mode and a Web conversation tab. | `dsh-kimi-bridge` | MIT | 1 |
| [pandashere/dsh-self-control-guard](https://github.com/pandashere/dsh-self-control-guard) | Self-control guard plugin for DeepSeek Harness host exit and restart workflows. | `self-control-guard` | MIT | 1 |
| [PangYiMing/dsh-batch-regression](https://github.com/PangYiMing/dsh-batch-regression) | DSH plugin: run a command N rounds, judge by median/distribution — 批量回归取统计结论 | `dsh-batch-regression` | MIT | 1 |
| [PangYiMing/dsh-bisect-debug](https://github.com/PangYiMing/dsh-bisect-debug) | DSH plugin: bisect bugs (code / boundary / commit) — 二分法定位 bug 根因 | `dsh-bisect-debug` | MIT | 1 |
| [PangYiMing/dsh-browser-control](https://github.com/PangYiMing/dsh-browser-control) | DSH plugin for controlling browsers (CDP/Playwright) — DeepSeek Harness 操控浏览器插件 | `dsh-browser-control` | MIT | 1 |
| [PangYiMing/dsh-mobile-control](https://github.com/PangYiMing/dsh-mobile-control) | DSH plugin for controlling mobile devices (ADB/iOS) — DeepSeek Harness 操控手机插件 | `dsh-mobile-control` | MIT | 1 |
| [PangYiMing/dsh-port-guard](https://github.com/PangYiMing/dsh-port-guard) | DSH plugin: triage port conflicts (reuse / switch / precise kill) — 端口占用处置 | `dsh-port-guard` | MIT | 1 |
| [PangYiMing/dsh-screenshot-diff](https://github.com/PangYiMing/dsh-screenshot-diff) | DSH plugin: pixel-diff two screenshots into diff.png + triptych (pixelmatch) — 像素对比工具 | `dsh-screenshot-diff` | MIT | 1 |
| [PerryLink/dsh-auto-review](https://github.com/PerryLink/dsh-auto-review) | Second-model AI auto-review for DeepSeek Harness approval requests: a read-only reviewer subagent returns structured allow/deny verdicts with reasons, fail-closed by default, fully auditable from the session log (approval/asked -> autoReview/verdict -> approval/decided). | `dsh-auto-review` | Apache-2.0 | 1 |
| [PerryLink/dsh-github](https://github.com/PerryLink/dsh-github) | GitHub integration for DeepSeek Harness: create PRs, review PRs in background jobs, read issues - every write gated by human approval | `dsh-github` | Apache-2.0 | 1 |
| [PerryLink/dsh-memento](https://github.com/PerryLink/dsh-memento) | Bounded, layered, approval-gated, auditable cross-session memory for DeepSeek Harness (capability seam: ctx.memory + SQLite provider + memory tool + frozen snapshot injection) | `dsh-memento` | Apache-2.0 | 1 |
| [pinch-eng/dsh-audio-dub](https://github.com/pinch-eng/dsh-audio-dub) | Dub video and audio into 10 languages with voice cloning, from a DeepSeek Harness agent \| DSH 视频/音频配音插件 | `dsh-audio-dub` | MIT | 1 |
| [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | DeepSeek Harness plugin: make the model write its chain-of-thought in your language | `dsh-reasoning-translator` | MIT | 1 |
| [PixLunaLab/dsh-plugin-pixluna](https://github.com/PixLunaLab/dsh-plugin-pixluna) | dsh-plugin-pixluna \| 让 DSH 自己看涩图！ | `dsh-plugin-pixluna` | MPL-2.0 | 1 |
| [Player-MINEPIG/dsh-llm-codex-oauth](https://github.com/Player-MINEPIG/dsh-llm-codex-oauth) | 在 dsh（DeepSeek Harness）里使用你的 ChatGPT / Codex 订阅。插件通过 OpenAI Codex 的 OAuth 流程登录 ChatGPT 账号，把订阅额度暴露成 dsh 的 `codex-oauth` 模型提供方。 | `dsh-llm-codex-oauth` | MIT | 1 |
| [qing3a/dsh-event-auditor](https://github.com/qing3a/dsh-event-auditor) | DeepSeek Harness 事件流审计面板插件：观察事件类型/分发模式/计数/最近事件，帮助插件作者理解 harness 内部 | `@qing3a/dsh-event-auditor` | MIT | 1 |
| [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 | `@dsh-community/dsh-deeplink` | MIT | 1 |
| [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web) | `dsh-all-search` | MIT | 1 |
| [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | dsh atuin-history: record dsh user prompts into atuin shell history | `dsh-atuin` | MIT | 1 |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness | `dsh-cloudflare-browser-run` | MIT | 1 |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | dsh memory: Nocturne Memory client for DeepSeek Harness | `dsh-nocturne-memory` | MIT | 1 |
| [rxa3c/chat2skill](https://github.com/rxa3c/chat2skill) | Extracting and iterating skills from daily conversations with AI | `chat2skill-plugin-runtime` | MIT | 1 |
| [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) | DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow. | `falsify-dsh` | MIT | 1 |
| [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session | `dsh-plugin-wepre` | MIT | 1 |
| [Simon314620/dsh-turn-index](https://github.com/Simon314620/dsh-turn-index) | deepseek harness的侧边栏对话轮次索引插件 | `dsh-turn-index` | MIT | 1 |
| [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | Turn DeepSeek Harness into a focused, configurable AI translation workspace. | `dsh-translator` | MIT | 1 |
| [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | 上游仓库暂未提供介绍 | `dsh-task-progress-notifier` | MIT | 1 |
| [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic) | `mmv-dspic` | MIT | 1 |
| [skitse/dsh-dev-actions](https://github.com/skitse/dsh-dev-actions) | AI turns repeated dev commands, prompts, and habits into one-click DeepSeek Harness actions. | `dsh-dev-actions` | MIT | 1 |
| [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | 只是一个 tps 插件 | `@dsh-external/tps` | BSD-3-Clause | 1 |
| [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题 | `@deepseek-ai/dsh-client-ui-skin-miku` | BSD-3-Clause | 1 |
| [suimi8/dsh-cost-ledger](https://github.com/suimi8/dsh-cost-ledger) | Cross-session persistent cost ledger for DeepSeek Harness: logs every LLM token usage to SQLite and exposes record/query/budget tools. Built-in DeepSeek pricing, overridable via config. | `dsh-cost-ledger` | MIT | 1 |
| [suimi8/dsh-test-runner](https://github.com/suimi8/dsh-test-runner) | DSH plugin: structured test runner tool (test_run) — auto-detect vitest/jest/pytest/node:test, run tests, parse failure summaries for the model. | `dsh-test-runner` | MIT | 1 |
| [tappass/dsh-governance](https://github.com/tappass/dsh-governance) | The authority layer for agentic AI, as a DeepSeek Harness plugin. Governs every tool call against your business rules via TapPass /v1/govern. | `@tappass/dsh-governance` | MIT | 1 |
| [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. \| DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。 | `dsh-deeptutor` | NOASSERTION | 1 |
| [Toukaiteio/dsh-effort-tweak](https://github.com/Toukaiteio/dsh-effort-tweak) | A DeepSeek Harness plugin that allows you to change the reasoning effort of custom models in WebUI. | `dsh-effort-tweak` | MIT | 1 |
| [tree201/dsh-capability-inspector](https://github.com/tree201/dsh-capability-inspector) | DeepSeek Harness Doctor and DSH runtime diagnostics for tools, models, skills, workspaces, sessions, plugins, and MCP troubleshooting | `dsh-capability-inspector` | MIT | 1 |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support. | `dsh-balance` | NOASSERTION | 1 |
| [unnnnoooo/dsh-cue-plugin](https://github.com/unnnnoooo/dsh-cue-plugin) | DeepSeek Harness 的跨会话引用(cue)插件 | `dsh-cue-plugin` | NOASSERTION | 1 |
| [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | Native Harness agent-tree token budget plugin | `@deepseek-ai/dsh-agent-budget` | NOASSERTION | 1 |
| [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness | `@deepseek-ai/dsh-tool-search` | MIT | 1 |
| [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | Private DSH Web turn navigation plugin | `@deepseek-ai/dsh-turn-navigator` | BSD-3-Clause | 1 |
| [why913/dshx](https://github.com/why913/dshx) | The missing companion CLI for DeepSeek Harness (dsh): manage MCP servers with dry-run checks, migrate from Claude Code / Codex in one command \| dsh 的 MCP 管理与迁移工具 | `@why913/dshx` | MIT | 1 |
| [Wine-Red/dsh-prompt-stash](https://github.com/Wine-Red/dsh-prompt-stash) | Local, per-session prompt stash for DeepSeek Harness Web \| 本地、分对话的提示词输入暂存工具。写了一半的长提示词，临时需要先问一个短问题？ 同时准备多个方案，但尚未决定发哪一个？将未完成的想法放入草稿架中，准备好后再继续完成 | `dsh-prompt-stash` | MIT | 1 |
| [wingoo/codex-plugin-dsh](https://github.com/wingoo/codex-plugin-dsh) | Use local Codex App Server as a model provider in DeepSeek Harness | `codex-plugin-dsh` | MIT | 1 |
| [XCNXNXNX/dsh-portable-tavern](https://github.com/XCNXNXNX/dsh-portable-tavern) | DeepSeek Harness 的「便携酒馆」插件：RPG 式 SillyTavern V2/V3 角色卡生成器 + 酒馆角色扮演聊天。支持世界书、角色卡 JSON/PNG 导入导出、面板主题与本地音乐。独立插件，仅依赖官方 @deepseek-ai SDK。 | `dsh-portable-tavern` | BSD-3-Clause | 1 |
| [xiaomiba0904/dsh-obsidian-export](https://github.com/xiaomiba0904/dsh-obsidian-export) | DeepSeek Harness (DSH) plugin: export conversations to an Obsidian vault, plus read/search/list/tags/backlinks tools and automatic vault discovery. | `dsh-obsidian-export` | MIT | 1 |
| [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web) | `@yangzhe1003/dsh-web-search-firecrawl` | MIT | 1 |
| [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | A lively pixel-whale running-state companion for DeepSeek Harness Web. | `dsh-pixel-whale` | MIT | 1 |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode | `dsh-prime-agent` | MIT | 1 |
| [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Monitor existing DeepSeek Harness background jobs without running commands twice | `dsh-tool-monitor` | MIT | 1 |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 | `dsh-explain` | MIT | 1 |
| [yuzi-ska/DSH-Chrome-devtools](https://github.com/yuzi-ska/DSH-Chrome-devtools) | Real Chrome browser control for DeepSeek Harness agents, powered by Chrome DevTools MCP | `dsh-chrome-devtools` | NOASSERTION | 1 |
| [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Multi-agent dashboard skill for DeepSeek Harness | `dsh-plugin-agent-dashboard` | MIT | 1 |
| [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Auto documentation generation skill for DeepSeek Harness | `dsh-plugin-auto-docs` | MIT | 1 |
| [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Structured code review skill for DeepSeek Harness | `dsh-plugin-code-review` | MIT | 1 |
| [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Context compression skill for DeepSeek Harness | `dsh-plugin-context-compressor` | MIT | 1 |
| [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Structured long-term memory system for DeepSeek Harness | `dsh-plugin-meta-memory` | MIT | 1 |
| [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Local knowledge base RAG for DeepSeek Harness | `dsh-plugin-rag` | MIT | 1 |
| [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Vision toolkit for DeepSeek Harness -- give text-only agents eyes | `dsh-plugin-vision-toolkit` | MIT | 1 |
| [zhouzhencheng07/dsh-tavily-search](https://github.com/zhouzhencheng07/dsh-tavily-search) | Free keyless Tavily web search tool for DeepSeek Harness (dsh) | `dsh-tavily-search` | MIT | 1 |
| [ZhuXinAI/sidesight](https://github.com/ZhuXinAI/sidesight) | CLI-first vision sidecar for text-only coding agents. Analyze screenshots, diagrams, charts, UI diffs, and videos with OpenAI-compatible multimodal models. | `sidesight` | MIT | 1 |
| [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | 上游仓库暂未提供介绍 | `dsh-archive-manager` | MIT | 1 |
| [zjl88858/dsh-huadongbianzuqi](https://github.com/zjl88858/dsh-huadongbianzuqi) | DeepSeek Harness的滑动变祖器插件 | `dsh-huadong-bianzuqi` | MIT-0 | 1 |
| [zp-home/dsh-recommend](https://github.com/zp-home/dsh-recommend) | DSH 插件生态透明排行与推荐：每日自动抓取 dsh-plugin 话题 + 公开评分模型 + 排行/推荐插件与静态站 | `dsh-recommend` | MIT | 1 |
| [030611/dsh-telemetry-redactor](https://github.com/030611/dsh-telemetry-redactor) | Fail-closed export-copy redaction for DeepSeek Harness session telemetry | `dsh-telemetry-redactor` | MIT | 0 |
| [030611/dsh-verification-receipt](https://github.com/030611/dsh-verification-receipt) | Privacy-minimal heuristic per-turn verification summaries for DeepSeek Harness | `dsh-verification-receipt` | MIT | 0 |
| [121103qwq/dsh-vision-sidecar](https://github.com/121103qwq/dsh-vision-sidecar) | Hosted free vision sidecar for DeepSeek Harness with durable session evidence | `dsh-vision-sidecar` | MIT | 0 |
| [147228/dsh-black-whale](https://github.com/147228/dsh-black-whale) | DeepSeek Harness 黑鲸实验室主题：官网黑鲸 × 夕小瑶 IP，真实 profile 可安装的 Web UI 插件 | `@xiaoyao-ai/dsh-client-ui-skin-black-whale` | NOASSERTION | 0 |
| [1a125/dsh-mcp-manager](https://github.com/1a125/dsh-mcp-manager) | DSH global MCP manager | `dsh-mcp-manager` | MIT | 0 |
| [agentic-control-plane/dsh-acp-plugin](https://github.com/agentic-control-plane/dsh-acp-plugin) | Agentic Control Plane for DeepSeek Harness — policy-check every tool call before it runs | `dsh-plugin-acp` | MIT | 0 |
| [alison-xx/deepseek-harness-flow](https://github.com/alison-xx/deepseek-harness-flow) | Visual workflows and multi-model evaluation for DeepSeek Harness | `deepseek-harness-flow` | MIT | 0 |
| [aryswisnu/dsh-eval-regression](https://github.com/aryswisnu/dsh-eval-regression) | 上游仓库暂未提供介绍 | `dsh-eval-regression` | MIT | 0 |
| [BrambleXu/dsh-annotate](https://github.com/BrambleXu/dsh-annotate) | Visual browser element annotation for DeepSeek Harness, capturing DOM, styles, accessibility data, comments, and viewport screenshots. DeepSeek Harness 浏览器元素标注插件，捕获 DOM、样式、可访问性数据、评论和视口截图。 | `dsh-annotate` | MIT | 0 |
| [cakeni/harness-whale](https://github.com/cakeni/harness-whale) | Unofficial community pet for DeepSeek Harness — a native DSH web plugin | `harness-whale` | MIT | 0 |
| [Chi-hong22/dsh-mdbox](https://github.com/Chi-hong22/dsh-mdbox) | DeepSeek Harness (DSH) Web 输入框的 Markdown 编辑辅助插件。 | `@chi-hong22/dsh-mdbox` | MIT | 0 |
| [csiroqa/dsh-archive-viewer](https://github.com/csiroqa/dsh-archive-viewer) | DeepSeek Harness（DSH）归档增强插件：自动定期归档、文件夹归档整理、LLM 摘要沉淀经验库、会话收藏与便签、会话删除与优雅关机。Archive enhancement plugin for DeepSeek Harness: auto-archive, folder organization, LLM knowledge library, bookmarks & notes, session delete. | `@dsh-external/dsh-archive-viewer` | MIT | 0 |
| [csiroqa/dsh-backup-sync](https://github.com/csiroqa/dsh-backup-sync) | DeepSeek Harness（DSH）备份/恢复 + 跨机同步插件：本地快照、WebDAV 推送/拉取、自动备份与失效归档清理。Snapshot backup, restore and cross-machine sync plugin for DeepSeek Harness: local snapshots, incremental WebDAV push/pull, auto-backup retention and stale archive sweep. | `@dsh-external/dsh-backup-sync` | NOASSERTION | 0 |
| [csiroqa/dsh-command-opt](https://github.com/csiroqa/dsh-command-opt) | DeepSeek Harness（DSH）命令优化插件：Tab/Enter 补全命令名、参数格式引导与提示弹框、tool 开启会话（subagent）补丁、空对话命令输出修复。Command optimization plugin for DeepSeek Harness. | `@dsh-external/dsh-command-opt` | MIT | 0 |
| [csiroqa/dsh-hotkeys](https://github.com/csiroqa/dsh-hotkeys) | DeepSeek Harness（DSH）全局快捷键插件：会话切换、发送/清空草稿、停止生成、复制与归档，键位可在设置中自定义。Global keyboard shortcuts plugin for DeepSeek Harness. | `@dsh-plugin/hotkeys` | MIT | 0 |
| [cyanseek/dsh-landscape](https://github.com/cyanseek/dsh-landscape) | Agent-first DeepSeek Harness plugin intelligence: verify existing plugins, identify missing capabilities, and generate build-ready briefs. | `dsh-landscape` | MIT | 0 |
| [cyanseek/dsh-native-playbook](https://github.com/cyanseek/dsh-native-playbook) | Native capability guide for DeepSeek Harness — installable DSH runtime plugin, Agent Skill, and CLI. | `dsh-native-playbook` | MIT | 0 |
| [cyanseek/dsh-tool-chaos](https://github.com/cyanseek/dsh-tool-chaos) | Deterministic fault injection and autonomous resilience tests for DeepSeek Harness tools | `dsh-tool-chaos` | MIT | 0 |
| [cyberlieflife/dsh-model-thinking](https://github.com/cyberlieflife/dsh-model-thinking) | DSH (DeepSeek Harness) web plugin: thinking intensity / reasoning effort settings for custom OpenAI-compatible (pi-ai) models | `dsh-model-thinking` | NOASSERTION | 0 |
| [dongsheng123132/dsh-2origin](https://github.com/dongsheng123132/dsh-2origin) | Evidence-first 2Origin state projection, diff and immutable freeze for DeepSeek Harness | `dsh-2origin` | MIT | 0 |
| [dongsheng123132/dsh-benchmark](https://github.com/dongsheng123132/dsh-benchmark) | 上游仓库暂未提供介绍 | `dsh-benchmark` | MIT | 0 |
| [dongsheng123132/dsh-cad-review](https://github.com/dongsheng123132/dsh-cad-review) | Evidence-first ASCII DXF inspection and deterministic CAD rule review for DeepSeek Harness | `dsh-cad-review` | MIT | 0 |
| [dongsheng123132/dsh-cost](https://github.com/dongsheng123132/dsh-cost) | Evidence-first token cost ledger and budget checks for DeepSeek Harness | `dsh-cost` | MIT | 0 |
| [dongsheng123132/dsh-lineage](https://github.com/dongsheng123132/dsh-lineage) | 上游仓库暂未提供介绍 | `dsh-lineage` | MIT | 0 |
| [dongsheng123132/dsh-release-proof](https://github.com/dongsheng123132/dsh-release-proof) | 上游仓库暂未提供介绍 | `dsh-release-proof` | MIT | 0 |
| [dongsheng123132/dsh-switch](https://github.com/dongsheng123132/dsh-switch) | Evidence-first model control plane for DeepSeek Harness | `dsh-switch` | MIT | 0 |
| [drfccv/dsh-theme-neko](https://github.com/drfccv/dsh-theme-neko) | A Nachoneko (甘城猫猫) themed skin for the DeepSeek Harness web GUI. | `dsh-theme-neko` | NOASSERTION | 0 |
| [DTSFO/dsh-conversation-rewind](https://github.com/DTSFO/dsh-conversation-rewind) | 上游仓库暂未提供介绍 | `dsh-conversation-rewind` | MIT | 0 |
| [f0909172434/dsh-plugin-verified-search](https://github.com/f0909172434/dsh-plugin-verified-search) | Verified current-source search workflow for DeepSeek Harness | `dsh-plugin-verified-search` | MIT | 0 |
| [fly3366/DeepJIT](https://github.com/fly3366/DeepJIT) | JIT compiler plugin for deepseek-harness: compiles recurring agent workflows into hot skills and flow templates | `deepjit` | MIT | 0 |
| [Ghost011118/dsh-balance-meter](https://github.com/Ghost011118/dsh-balance-meter) | DeepSeek account balance and session cost readout for the DeepSeek Harness Web GUI | `dsh-balance-meter` | BSD-3-Clause | 0 |
| [gnulife/dsh-plugin-wechat](https://github.com/gnulife/dsh-plugin-wechat) | 上游仓库暂未提供介绍 | `dsh-plugin-wechat` | MIT | 0 |
| [hashdiana/dsh-archived-sessions](https://github.com/hashdiana/dsh-archived-sessions) | 上游仓库暂未提供介绍 | `dsh-archived-sessions` | MIT | 0 |
| [HongzhongL/dsh-hotswap](https://github.com/HongzhongL/dsh-hotswap) | Runtime hot-swap for DeepSeek Harness plugins: hot enable/disable/restart and auto hot-mount bundles from the Web GUI — no dsh restart. | `dsh-hotswap` | MIT | 0 |
| [hrhgit/deepseek-harness-plugin-manager](https://github.com/hrhgit/deepseek-harness-plugin-manager) | Web plugin manager for DeepSeek Harness (DSH): inspect, search, group, enable, and disable Cordis plugins. | `dsh-plugin-manager` | MIT | 0 |
| [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style | `@dsh-crosstalk/bundle` | MIT | 0 |
| [Jesse-njx/dsh-polyglot](https://github.com/Jesse-njx/dsh-polyglot) | dsh-polyglot — the model switch for DSH: generic OpenAI-compatible ctx.llm adapter, curated free/cheap DeepSeek presets, automatic provider fallback on rate limits | `@dsh-polyglot/bundle` | MIT | 0 |
| [Jesse-njx/dsh-voice](https://github.com/Jesse-njx/dsh-voice) | Voice notes in, spoken answers out — dictate audio that becomes user messages (transcribe), have the agent read replies aloud (speak), and leave walk-away narration on long headless runs. Local-first: plain audio files under ~/.dsh/voice/. | `@dsh-voice/bundle` | MIT | 0 |
| [JimmyJin2006/dsh-skill-manager](https://github.com/JimmyJin2006/dsh-skill-manager) | 在设置界面管理你已有的技能！ | `dsh-skill-manager` | NOASSERTION | 0 |
| [jinhuang712/dsh-survey](https://github.com/jinhuang712/dsh-survey) | 问卷式批量提问插件 for DeepSeek Harness：一次性问 10+ 题（单选/多选/是否 toggle/对比题/开放题），可跳过、全屏浮层、提交后对半 recap | `dsh-survey` | MIT | 0 |
| [jorinyang/dsh-doctor](https://github.com/jorinyang/dsh-doctor) | DeepSeek Harness environment diagnostic tool: dsh_doctor checks env, profile, config, bundles, mount, port, health, and disk | `@jorinyang/dsh-doctor` | MIT | 0 |
| [Kevoyuan/dsh-mac-vision](https://github.com/Kevoyuan/dsh-mac-vision) | On-device macOS OCR and Apple Vision for DeepSeek Harness — one native plugin with a bundled Skill. | `dsh-mac-vision` | MIT | 0 |
| [kiim-wong/dsh-push](https://github.com/kiim-wong/dsh-push) | Push DeepSeek Harness agent lifecycle notifications to configurable channels | `dsh-push` | MIT | 0 |
| [KinGao294/dsh-skin](https://github.com/KinGao294/dsh-skin) | Skin switcher + custom wallpaper for DeepSeek Harness (dsh): curated --dsw-alias-* palettes, translucent wallpaper with opacity/blur controls, persisted per browser (like Codex themes) — 换皮肤 / 自定义背景插件 | `dsh-skin` | MIT | 0 |
| [KureKaruna/dsh-at](https://github.com/KureKaruna/dsh-at) | 上游仓库暂未提供介绍 | `dsh-at` | NOASSERTION | 0 |
| [Lbryany/dsh-codebuddy](https://github.com/Lbryany/dsh-codebuddy) | CodeBuddy OAuth, dynamic models, and reasoning controls for DeepSeek Harness | `@lbryany/dsh-codebuddy` | MIT | 0 |
| [liuup/dsh-latex-tools](https://github.com/liuup/dsh-latex-tools) | ♾️ Copy and export the LaTeX in DeepSeek Harness 悬停任意 LaTeX 公式即可复制 TeX 源码或导出为独立的 SVG 文件 | `dsh-latex-tools` | MIT | 0 |
| [LoftyTao/dsh-ui-workbench](https://github.com/LoftyTao/dsh-ui-workbench) | DeepSeek Harness WebUI 的右侧边文件管理以及变更审查界面插件。 | `dsh-ui-workbench` | MIT | 0 |
| [Luaphes/dsh-web-attention-badge](https://github.com/Luaphes/dsh-web-attention-badge) | Attention reminders for the DeepSeek Harness Web UI: frame badge, (N) tab title and whale-favicon recolor for sessions waiting for input or finished unopened. | `dsh-web-attention-badge` | MIT | 0 |
| [lxj808624/dsh-tool-git](https://github.com/lxj808624/dsh-tool-git) | Structured safe Git tools for DeepSeek Harness (dsh): git_status/diff/log/branch/stage/commit/stash/show + destructive-command guard | `dsh-tool-git` | MIT | 0 |
| [lynkas/dsh-think-flow-flow](https://github.com/lynkas/dsh-think-flow-flow) | DeepSeek Harness client plugin: constant-rate typewriter reveal for assistant output and reasoning, with per-model gating. | `dsh-think-flow-flow` | MIT | 0 |
| [makuralymi/dsh-webUI-Glass-Theme](https://github.com/makuralymi/dsh-webUI-Glass-Theme) | 上游仓库暂未提供介绍 | `dsh-client-ui-frosted-glass` | NOASSERTION | 0 |
| [malevrigns/dsh-session-stars](https://github.com/malevrigns/dsh-session-stars) | Favorite DeepSeek Harness Sessions and reopen them from a global cross-Workspace center. | `dsh-session-stars` | MIT | 0 |
| [Meredith2328/dsh-sticky-note](https://github.com/Meredith2328/dsh-sticky-note) | DSH 便签插件：随手记点子/感想/TODO，Markdown 预览 + 快捷键 + 历史归档，存储路径可配置 | `dsh-sticky-note` | MIT | 0 |
| [minatoAI/jina-dsh-plugin](https://github.com/minatoAI/jina-dsh-plugin) | Jina AI tools for DeepSeek Harness: 12 model tools (web / arXiv / SSRN search, read, screenshot, embeddings, rerank, classify, PDF, primer) plus a settings-page API key card with live balance check. | `dsh-jina` | MIT | 0 |
| [misakimiku2/dsh-cost-display](https://github.com/misakimiku2/dsh-cost-display) | DeepSeek Harness 成本显示插件 | `dsh-cost-display` | MIT | 0 |
| [PerryLink/dsh-checkpoint-rewind](https://github.com/PerryLink/dsh-checkpoint-rewind) | Claude Code /rewind for DeepSeek Harness — git-first workspace snapshots before every mutation, turn-boundary session forks, one-shot /rewind restore. A dsh-plugin capability seam. | `dsh-checkpoint-rewind` | Apache-2.0 | 0 |
| [PerryLink/dsh-lsp-actions](https://github.com/PerryLink/dsh-lsp-actions) | LSP action surface for DeepSeek Harness: lsp_diagnostics, lsp_format, and lsp_completion tools over language servers | `dsh-lsp-actions` | Apache-2.0 | 0 |
| [PerryLink/dsh-permission-rules](https://github.com/PerryLink/dsh-permission-rules) | Claude Code-style declarative permission rules for DeepSeek Harness: ordered allow/deny/ask rules with tool-name, argument (glob/regex), and workspace-path matching on the tools/pre-execute waterfall, session-log audit, and HMR reload. | `dsh-permission-rules` | Apache-2.0 | 0 |
| [qing3a/dsh-tray](https://github.com/qing3a/dsh-tray) | DeepSeek Harness Windows 系统托盘插件（trayicon exe 宿主，无 native 编译） | `@qing3a/dsh-tray` | MIT | 0 |
| [RNlao/dsh-wallpaper](https://github.com/RNlao/dsh-wallpaper) | 上游仓库暂未提供介绍 | `dsh-wallpaper` | NOASSERTION | 0 |
| [RRRosmontis/dsh-qwen-mm](https://github.com/RRRosmontis/dsh-qwen-mm) | Qwen-MM-Plugins integration bundle for DeepSeek Harness (dsh) — multimodal MCP tools (vision, OCR, ASR, search, video, Blender, FreeCAD) + image attachment bridge. 让 DeepSeek Harness 原生支持多模态。 | `@deepseek-ai/dsh-qwen-mm` | MIT | 0 |
| [sala003/dsh-tool-describe-image](https://github.com/sala003/dsh-tool-describe-image) | 上游仓库暂未提供介绍 | `dsh-tool-describe-image` | MIT | 0 |
| [shelken/dsh-co-authored-by](https://github.com/shelken/dsh-co-authored-by) | dsh plugin: auto-inject Co-Authored-By and Generated-By trailers on git commit | `@shelken/dsh-co-authored-by` | NOASSERTION | 0 |
| [simon300000/dsh-auto](https://github.com/simon300000/dsh-auto) | dsh Auto Approve | `dsh-auto` | MIT | 0 |
| [smanx/dsh-conversation-indicator](https://github.com/smanx/dsh-conversation-indicator) | Conversation indicator plugin for the DeepSeek Harness web GUI: a compact rail beside the scrollbar marks each user message; hover for the summary, click to jump. / DeepSeek Harness Web GUI 对话指示器插件：滚动条旁紧凑面板标记每条用户消息，悬停看摘要，点击跳转。 | `dsh-conversation-indicator` | MIT | 0 |
| [Spirtxiaoqi7/mindspace-dsh-session-memory](https://github.com/Spirtxiaoqi7/mindspace-dsh-session-memory) | Editable, session-isolated personalization memory for DeepSeek Harness | `mindspace-dsh-session-memory` | MIT | 0 |
| [STARDUSTLC666/dsh-calendar](https://github.com/STARDUSTLC666/dsh-calendar) | 上游仓库暂未提供介绍 | `dsh-calendar` | NOASSERTION | 0 |
| [STARDUSTLC666/dsh-dingtalk](https://github.com/STARDUSTLC666/dsh-dingtalk) | 上游仓库暂未提供介绍 | `dsh-dingtalk` | NOASSERTION | 0 |
| [STARDUSTLC666/dsh-slack](https://github.com/STARDUSTLC666/dsh-slack) | 上游仓库暂未提供介绍 | `dsh-slack` | NOASSERTION | 0 |
| [Starfie1d1272/dsh-builtin-toggles](https://github.com/Starfie1d1272/dsh-builtin-toggles) | Safe GUI toggles for optional built-in plugins in DeepSeek Harness Web. | `dsh-builtin-toggles` | MIT | 0 |
| [Towzai/dsh-memory](https://github.com/Towzai/dsh-memory) | Cross-session memory plugin for DeepSeek Harness (dsh): embedding search + automatic system-prompt injection | `@towzai/dsh-memory` | MIT | 0 |
| [TtTRz/dsh-wecom](https://github.com/TtTRz/dsh-wecom) | WeCom AI Bot channel for DeepSeek Harness — every chat runs a persistent, preset-backed agent with real tools. | `dsh-wecom` | MIT | 0 |
| [walavave/dsh-git](https://github.com/walavave/dsh-git) | 上游仓库暂未提供介绍 | `dsh-git` | NOASSERTION | 0 |
| [wellorbetter/dsh-product-delivery-workflow](https://github.com/wellorbetter/dsh-product-delivery-workflow) | 100% AI-native product delivery workflow plugin for DeepSeek Harness: full product-to-release pipeline (research → PRD → OpenSpec → parallel multi-agent → review loops → tests → release audit) with loop closure. 产品交付工作流插件：从产品到发布全流程，自带闭环，100% AI 原生，睡前启动醒来收货。 | `@wellorbetter/dsh-product-delivery-workflow` | MIT | 0 |
| [Wha1eChai/dsh-supervisor](https://github.com/Wha1eChai/dsh-supervisor) | Community control-plane plugin for DeepSeek Harness live sessions | `@wha1echai/dsh-supervisor` | MIT | 0 |
| [WSL043/dsh-codex-subscription](https://github.com/WSL043/dsh-codex-subscription) | Cache-aware ChatGPT / Codex subscription plugin for DeepSeek Harness | `@wsl043/dsh-codex-subscription` | MIT | 0 |
| [wuyuanjiang1/dsh2wechat](https://github.com/wuyuanjiang1/dsh2wechat) | DeepSeek Harness 微信 ClawBot 消息桥插件 | `dshplug` | NOASSERTION | 0 |
| [xiaoxiao-svg/delivery-review-dsh-plugin](https://github.com/xiaoxiao-svg/delivery-review-dsh-plugin) | delivery-review-plugin（Claude Code 双 Agent 交付协作工作流插件）的 DeepSeek Harness 移植版。基于 DSH 的 Cordis 插件系统，以 bundle 方式分发，不改动 DSH 源码，全部能力由插件行在配置层挂载。 | `delivery-review-plugin` | NOASSERTION | 0 |
| [Yan-Zero/dsh-codex](https://github.com/Yan-Zero/dsh-codex) | Use your ChatGPT subscription in DeepSeek Harness through OpenAI's Codex sign-in flow | `dsh-codex` | Apache-2.0 | 0 |
| [YELEBAI/dsh-plugin-marketplace](https://github.com/YELEBAI/dsh-plugin-marketplace) | Verified plugin marketplace and autonomous registry for DeepSeek Harness | `dsh-plugin-marketplace` | MIT | 0 |
| [YJSoooooo/dsh-chrome](https://github.com/YJSoooooo/dsh-chrome) | Chrome profile bridge for DeepSeek Harness: control an existing signed-in Chrome profile through chrome_repl. | `dsh-chrome` | NOASSERTION | 0 |
| [zimzaza4/dsh-bash-win](https://github.com/zimzaza4/dsh-bash-win) | 在 Windows 环境中为 DeepSeek Harness 提供 Git Bash 与 WSL2 bash 工具,含 bwrap 沙箱、审批模式、后台任务 | `@zimzaza4/dsh-bash-win` | MIT | 0 |
| [ZK-Andy/dsh-continual-evolve](https://github.com/ZK-Andy/dsh-continual-evolve) | Continual self-evolution plugin for DeepSeek Harness: versioned, auditable, rollback-safe harness state refined from session trajectories, with a benchmark-driven validation loop. | `dsh-continual-evolve` | MIT | 0 |

## 查找插件

```bash
npm run list
node bin/dsh-plugins.mjs search vision
node bin/dsh-plugins.mjs info Anionex/dsh-vision-toolkit
```

## 安装插件

安装命令默认只预览，不执行上游代码：

```bash
node bin/dsh-plugins.mjs install Anionex/dsh-vision-toolkit --profile web
```

确认上游代码和许可证后，加入 `--execute` 执行安装。

## 收录规则

同步程序从 GitHub 的 `dsh-plugin` 主题发现候选仓库。只有根目录 `package.json` 声明 `dsh.bundle.patch`，对应 patch 文件真实存在，且仓库未归档、未禁用、不是模板的项目，才进入上面的目录。

机器可读目录见 [catalog/plugins.json](catalog/plugins.json)。全部候选及未收录原因见 [catalog/repositories.json](catalog/repositories.json)。

## 自动更新

GitHub Actions 每天北京时间 09:17 自动发现和校验插件。目录内容发生变化时，工作流会自动提交到 `main`。也可以在 Actions 页面手动运行 `sync plugins`。

## 更新目录

```bash
npm run sync
npm run check
```

本仓库只保存导航数据、文档和维护脚本，不复制或嵌入任何第三方插件源码。插件版权与许可证归各上游项目所有。`NOASSERTION` 表示 GitHub API 未识别到明确许可证。
