# Awesome DSH Plugins

社区维护的 DeepSeek Harness 插件导航与介绍目录。

> [!IMPORTANT]
> 收录不代表官方背书、安全审计或运行兼容。安装第三方插件前，请检查上游源码、权限、依赖和许可证。

## 插件目录

更新时间：2026-08-13T17:01:05.467Z

当前收录 254 个通过基础 bundle 清单校验的插件。插件地址和介绍均来自对应的上游仓库。

| 插件 | 介绍 | 包名 | 许可证 | 星标 |
| :--- | :--- | :--- | :---: | ---: |
| [liustack/modlens](https://github.com/liustack/modlens) | The first vision plugin for DeepSeek Harness, and the vision bridge for every text-only coding agent. Paste an image, get structured JSON evidence (OCR, layout, semantics). | `@liustack/modlens` | MIT | 669 |
| [ccch1mneyyy/dsh-cc-tui](https://github.com/ccch1mneyyy/dsh-cc-tui) | DSH 官方尚无终端 TUI 的补位之作：Claude Code 风格全屏交互终端插件——像素鲸鱼顶栏、实时工作状态行、思考流式展开、双击 Esc 回滚、上下文进度条 + TPS 仪表。npm 一键安装。 | `dsh-cc-tui` | BSD-3-Clause | 159 |
| [Anionex/dsh-vision-toolkit](https://github.com/Anionex/dsh-vision-toolkit) | 让纯文本模型更好地做视觉任务的DeepSeek Harness插件：带意图的图片问答、长截图 OCR、UI 还原等｜DeepSeek Harness-native integration for agent-vision-toolkit: image Q&A, long-screenshot OCR, UI restoration, grounding, pixel diff, Artifacts, and Web UI. | `@dsh-external/dsh-vision-toolkit` | MIT | 133 |
| [omdsh-dev/DSH-better-sidebar](https://github.com/omdsh-dev/DSH-better-sidebar) | 一个侧边栏的完整工作台，支持三方拓展注册新Tab页面，内置文件渲染编辑/终端/Git/子代理 | `dsh-better-sidebar` | MIT | 98 |
| [Nagi-ovo/dsh-ads](https://github.com/Nagi-ovo/dsh-ads) | 是兄弟就来蹬我！DSH Web UI 广告：2005 年中文站点风格的侧栏广告 / 对话内信息流 / 角落弹窗 + 一个真实热区比视觉小得多的关闭叉。素材全虚构，域名打码。 | `@dsh-external/dsh-ads` | NOASSERTION | 88 |
| [huiliyi37/dsh-tianshu-tui](https://github.com/huiliyi37/dsh-tianshu-tui) | dsh-tianshu-tui — DeepSeek Harness terminal UI | `@huiliyi37/dsh-tianshu-tui` | Apache-2.0 | 70 |
| [NanmiCoder/dsh-agent-teams](https://github.com/NanmiCoder/dsh-agent-teams) | AgentTeams plugin for DeepSeek Harness | `dsh-agent-teams` | NOASSERTION | 54 |
| [icetomoyo/dsh_workflow](https://github.com/icetomoyo/dsh_workflow) | 把Claude Code的UltraCode模式带给DSH，把 DSH 的一次性多 Agent 调度，升级为可生成、可保存、可治理、可观察、可恢复的 Workflow 层 | `@dsh-external/workflow` | MIT | 33 |
| [omdsh-dev/dsh-open-in-vscode](https://github.com/omdsh-dev/dsh-open-in-vscode) | Open DeepSeek Harness workspace directories in VS Code directly from the web GUI. | `dsh-open-in-vscode` | MIT | 33 |
| [ZSeven-W/dsh-openpencil](https://github.com/ZSeven-W/dsh-openpencil) | OpenPencil design preview and editing plugin for DSH | `@zseven-w/dsh-openpencil` | MIT | 28 |
| [Nagi-ovo/dsh-visualize](https://github.com/Nagi-ovo/dsh-visualize) | DSH 对话内生成式 UI 插件：模型把交互式 HTML 卡片直接画进会话流——visualize 工具 + 配套 skill + 沙箱渲染卡，带流式预览、组件浮入动画与鲸鱼蓝主题跟随 | `@dsh-external/dsh-visualize` | NOASSERTION | 25 |
| [omdsh-dev/dsh-at-file](https://github.com/omdsh-dev/dsh-at-file) | Codex-style @file mentions for DeepSeek Harness: search workspace files in the composer and attach their contents to prompts. | `dsh-at-file` | MIT | 23 |
| [omdsh-dev/dsh-notification](https://github.com/omdsh-dev/dsh-notification) | Desktop notifications for DeepSeek Harness turn completions, with per-outcome controls and include/exclude keyword rules. | `dsh-notification` | MIT | 21 |
| [alingalingling/ui-status-label](https://github.com/alingalingling/ui-status-label) | 把你鲸鱼娘思考时的 deep diving 自定义成任意你想要的样子 | `dsh-ui-status-label` | NOASSERTION | 20 |
| [vlln/whale-girl](https://github.com/vlln/whale-girl) | DSH Web GUI 桌面宠物插件（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍的积累型伙伴。官方 repository-plugin（.dsh-plugin 格式），config.yaml 安装：github:dsh-external/whale-girl#<ref>&path:/.dsh-plugin | `whale-girl` | MIT | 19 |
| [Anionex/dsh-turn-rewind](https://github.com/Anionex/dsh-turn-rewind) | deepseek harness对话回退插件 \| DSH — rewind conversation and workspace state, powered by a persistent Change Ledger | `@dsh-external/turn-rewind` | BSD-3-Clause | 18 |
| [omdsh-dev/dsh-custom-tool](https://github.com/omdsh-dev/dsh-custom-tool) | Create and manage sandboxed JavaScript tools for DeepSeek Harness with a Monaco editor and model-driven tool lifecycle. | `dsh-custom-tool` | MIT | 18 |
| [omdsh-dev/dsh-genui](https://github.com/omdsh-dev/dsh-genui) | GenUI for DeepSeek Harness: interactive UI components rendered inline in assistant replies via the dsh-ui fence — layout, charts, plots, forms, quizzes, mermaid, 3D scenes, and an action event loop back to the model. Ships the fence-teaching host plugin, the browser renderer (client half), and the genui skill. | `@omdsh-dev/dsh-genui` | MIT | 13 |
| [LoserFox/distill](https://github.com/LoserFox/distill) | 自动对话蒸馏：后台 subagent 反省 + 技能 create/update | `@loserfox/distill` | NOASSERTION | 12 |
| [omdsh-dev/dsh-annotation](https://github.com/omdsh-dev/dsh-annotation) | DSH Web 选中批注插件：选文字→批注→回车随消息发送；气泡隐藏批注块（零闪烁）；回复按 Annotation N 逐条对照（可悬浮芯片）。官方 bundle，零核心改动 | `@omdsh-dev/dsh-annotation` | MIT | 12 |
| [Chinesezjc/dsh-interconnect](https://github.com/Chinesezjc/dsh-interconnect) | Cross-instance message/event handoff plugins for DSH (interconnect service + tools) | `dsh-interconnect` | MIT | 11 |
| [Anionex/dsh-computer-use](https://github.com/Anionex/dsh-computer-use) | 为 DeepSeek Harness 提供电脑控制插件：新鲜 Accessibility 观测、过期状态拒绝、作用域权限与安全输入（目前支持macos）｜Accessibility-first macOS Computer Use bundle for DSH with fresh observations, stale-state rejection, scoped permissions, and safe input. | `@dsh-external/dsh-computer-use` | MIT | 10 |
| [hellodigua/dsh-share](https://github.com/hellodigua/dsh-share) | dsh对话分享插件，一键分享你的对话 | `@dsh-external/dsh-share` | MIT | 10 |
| [Moeblack/dsh-message-edit](https://github.com/Moeblack/dsh-message-edit) | DSH plugin: branch-based message editing, reroll, retry, version timeline | `dsh-message-edit` | NOASSERTION | 10 |
| [omdsh-dev/dsh-plugin-check](https://github.com/omdsh-dev/dsh-plugin-check) | DSH 插件健康检查工具：扫描插件仓库的清单协议 / patch 格式 / 构建陷阱 / hub 收录状态，零依赖只读，注册 plugin_check 工具 | `@deepseek-ai/dsh-plugin-check` | MIT | 10 |
| [bobleer/dsh-acp-for-bitfun](https://github.com/bobleer/dsh-acp-for-bitfun) | BitFun 与 DSH ACP 交互对接 插件 | `dsh-acp-for-bitfun` | MIT | 9 |
| [omdsh-dev/dsh-toolkit](https://github.com/omdsh-dev/dsh-toolkit) | DSH 零依赖工具包 collection —— time / encoding / json / calculator / csv / regex / markdown / diff / stat / schema 十个确定性工具，统一入口一键安装 | `@deepseek-ai/dsh-toolkit` | MIT | 8 |
| [ccq1/dsh-side-panel](https://github.com/ccq1/dsh-side-panel) | DSH 侧边栏，集成文件浏览器、终端和 Git 审查，方便预览文件。 | `@dsh-external/dsh-side-panel` | BSD-3-Clause | 7 |
| [dingyi222666/dsh-focus-chat](https://github.com/dingyi222666/dsh-focus-chat) | 提供新的「聚焦会话」精简会话视图，更轻松易于阅读，只关注最终产出结果。 | `@dingyi222666/dsh-focus-chat` | NOASSERTION | 7 |
| [LoserFox/dsh-git-identity](https://github.com/LoserFox/dsh-git-identity) | DSH 插件：git 提交固定使用环境自身作者身份（优先 gh CLI 登录账号，GitHub noreply 邮箱），GIT_AUTHOR_*/GIT_COMMITTER_* 环境变量注入压过一切 git config | `@loserfox/git-identity` | NOASSERTION | 7 |
| [omdsh-dev/dsh-security-audit](https://github.com/omdsh-dev/dsh-security-audit) | DSH 本机安全审计插件：配置/插件来源/会话/网络暴露面，只读脱敏风险报告 | `@deepseek-ai/dsh-security-audit` | MIT | 7 |
| [omdsh-dev/dsh-session-health](https://github.com/omdsh-dev/dsh-session-health) | DSH 会话健康检查插件：多帧 zstd 会话文件的帧级扫描诊断（torn/损坏/空会话检测），零依赖只读，注册 session_health 工具 | `@deepseek-ai/dsh-session-health` | MIT | 7 |
| [omdsh-dev/fabric](https://github.com/omdsh-dev/fabric) | 一种类似MC Fabric的hook处理器 | `cordis-fabric-bundle` | NOASSERTION | 7 |
| [hellodigua/dsh-emoji](https://github.com/hellodigua/dsh-emoji) | 为AI回复自动添加表情的插件 | `@dsh-external/dsh-emoji` | MIT | 6 |
| [LoserFox/telegram](https://github.com/LoserFox/telegram) | Telegram Bot API 桥接插件：长轮询、per-chat 会话、HTML 格式化 | `@loserfox/telegram` | NOASSERTION | 6 |
| [omdsh-dev/dsh-gomoku](https://github.com/omdsh-dev/dsh-gomoku) | 在DSH中与AI下五子棋，也可以让AI对局，看哪个AI棋力更强 | `@deepseek-ai/dsh-gomoku` | MIT | 6 |
| [Sev7een/ds-api-usage](https://github.com/Sev7een/ds-api-usage) | 上游仓库暂未提供介绍 | `dsh-plugin-ds-api-usage` | MIT | 6 |
| [yjh051108/dsh-super-injector](https://github.com/yjh051108/dsh-super-injector) | 上游仓库暂未提供介绍 | `@dsh-external/dsh-super-injector` | NOASSERTION | 6 |
| [lhh010/dsh-minigames](https://github.com/lhh010/dsh-minigames) | DSH Web UI 右侧小游戏面板：18 款离线小游戏（恐龙跳一跳 / 俄罗斯方块 / 坦克大战 / 扫雷 / 2048 / 数独 / 吃豆人 / 跟枪练习等），可扩展游戏注册表，等待模型回复或修 bug 时的摸鱼神器 | `@dsh-external/dsh-minigames` | BSD-3-Clause | 5 |
| [Zhenyu98/dsh-context-doctor](https://github.com/Zhenyu98/dsh-context-doctor) | DSH 上下文注入审计插件：统计 AGENTS.md 指令链/技能目录/工具 schema 的 token 成本，检测重复与冲突；Web UI 圆环面板 + context_audit 工具。Context Doctor for DeepSeek Harness: audit instruction-chain / skill catalog / tool schemas token cost. | `dsh-context-doctor` | BSD-3-Clause | 5 |
| [Degurechaff57/dsh-openapi](https://github.com/Degurechaff57/dsh-openapi) | Safe OpenAPI 3.x discovery and API calling tools for DeepSeek Harness | `dsh-openapi` | MIT | 4 |
| [happyren/dsh-agent-messaging](https://github.com/happyren/dsh-agent-messaging) | Cross-session agent-to-agent messaging for DeepSeek Harness — address another session by name and deliver a message into its inbox. | `dsh-agent-messaging` | MIT | 4 |
| [HuanLinOTO/dsh-plugin-mineru](https://github.com/HuanLinOTO/dsh-plugin-mineru) | DSH plugin exposing MineRU document parsing tools to the model | `@huanlin/dsh-plugin-mineru` | NOASSERTION | 4 |
| [Nwflower/dsh-chat-import](https://github.com/Nwflower/dsh-chat-import) | 从Claude Code、Codex、Reasonix等Agent工具导入历史消息，并在DSH中继续对话 | `dsh-chat-import` | MIT | 4 |
| [omdsh-dev/dsh-data-agent](https://github.com/omdsh-dev/dsh-data-agent) | 让AI帮你连数据库、写SQL的DSH插件 | `@deepseek-ai/dsh-data-agent` | MIT | 4 |
| [openguardrails/dsh-tui](https://github.com/openguardrails/dsh-tui) | Claude Code-style terminal UI for DeepSeek Harness agents, as an out-of-tree dsh plugin bundle | `@openguardrails/dsh-tui` | NOASSERTION | 4 |
| [titanwings/dsh-automation](https://github.com/titanwings/dsh-automation) | DSH 自动化插件：让 Coding 任务按计划在全新 Agent Session 中运行，并由用户或 Agent 创建和管理定时任务。 / Run coding tasks in fresh Agent sessions and manage schedules from DSH Web or an Agent. | `@dsh-external/dsh-automation` | MIT | 4 |
| [william-jin-cmu/dsh-stickers](https://github.com/william-jin-cmu/dsh-stickers) | DSH WebUI sticker plugin for bidirectional user and agent reactions | `@dsh-external/dsh-stickers` | BSD-3-Clause | 4 |
| [AnacondaKC/dsh-stock-market](https://github.com/AnacondaKC/dsh-stock-market) | 有效解决了写代码的时候账户不能同时亏钱的BUG | `dsh-stock-market` | BSD-3-Clause | 3 |
| [bill9109/dsh-web-ui-notify](https://github.com/bill9109/dsh-web-ui-notify) | 为 DSH 增加桌面通知提醒 | `@dsh-external/dsh-web-ui-notify` | BSD-3-Clause | 3 |
| [forrestchang/dsh-multica-runtime](https://github.com/forrestchang/dsh-multica-runtime) | Support dsh runtime on Multica. | `@multica-ai/dsh-runtime` | NOASSERTION | 3 |
| [fuhefei/dsh-sentinel](https://github.com/fuhefei/dsh-sentinel) | Condition-driven wakeup for DeepSeek Harness: durable file/command/http/process/webhook watches that wake the agent, with dock, sidebar branch, and a global dashboard. | `@dsh-external/dsh-sentinel` | BSD-3-Clause | 3 |
| [HuanLinOTO/dsh-plugin-yet-another-subagent](https://github.com/HuanLinOTO/dsh-plugin-yet-another-subagent) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-yet-another-subagent` | NOASSERTION | 3 |
| [omdsh-dev/dsh-deep-research](https://github.com/omdsh-dev/dsh-deep-research) | Adaptive deep-research orchestrator plugin for DeepSeek Harness (official workflow engine, cybernetics/information-theory design) | `@dsh-external/dsh-deep-research` | MIT | 3 |
| [omdsh-dev/dsh-tool-csv](https://github.com/omdsh-dev/dsh-tool-csv) | DSH CSV 数据工具插件：解析/查询/统计/转换 CSV 文本（RFC 4180），零依赖状态机解析器，注册 csv 工具 | `@deepseek-ai/dsh-tool-csv` | MIT | 3 |
| [THU-MAIC/dsh-openmaic](https://github.com/THU-MAIC/dsh-openmaic) | OpenMAIC for DeepSeek Harness: classrooms, slides, interactive widgets, and Socratic teaching | `@openmaic/dsh-openmaic` | MIT | 3 |
| [titanwings/dsh-better-browser](https://github.com/titanwings/dsh-better-browser) | DSH 真实浏览器插件：通过 Kimi WebBridge 让 Agent 操作用户已登录的浏览器，并提供 13 个 webbridge_* 工具。 / Let DSH Agents use your signed-in browser through thirteen Kimi WebBridge tools. | `@dsh-external/dsh-better-browser` | BSD-3-Clause | 3 |
| [vlln/dsh-navbar](https://github.com/vlln/dsh-navbar) | DSH 插件：对话节点导航条（右缘节点串快速跳转 user 消息）。官方 bundle 插件，dsh plugin --profile web add 安装 | `@dsh-external/dsh-navbar` | MIT | 3 |
| [vlln/dsh-task-status](https://github.com/vlln/dsh-task-status) | DSH 插件：后台任务状态条（对话页任务进度 + 实时输出 tail）。官方 bundle 插件，dsh plugin --profile web add 安装 | `@dsh-external/dsh-task-status` | MIT | 3 |
| [YYTbit/dsh-plugin-cost-tracker](https://github.com/YYTbit/dsh-plugin-cost-tracker) | Token cost tracker for DeepSeek Harness | `dsh-plugin-cost-tracker` | MIT | 3 |
| [ZeroHackz/OpenFlowFrames](https://github.com/ZeroHackz/OpenFlowFrames) | 上游仓库暂未提供介绍 | `@zerohackz/dsh-openflowframes` | GPL-3.0 | 3 |
| [1na-ko/dsh-hdc-bridge](https://github.com/1na-ko/dsh-hdc-bridge) | DSH 原生鸿蒙设备桥：hdc 工具让 Agent 完成截图-看图-装包-验证的闭环调试 / DSH-native HarmonyOS device bridge | `dsh-hdc-bridge` | MIT | 2 |
| [bitterSmilezzz/dsh-mac-desktop](https://github.com/bitterSmilezzz/dsh-mac-desktop) | DeepSeek Harness plugin: open the Web GUI in a native macOS desktop window (SwiftUI + WKWebView). | `dsh-mac-desktop` | MIT | 2 |
| [btspoony/dsh-advisor](https://github.com/btspoony/dsh-advisor) | Advisor - Pair a second model that passively reviews each turn and injects notes.  搭配一个会在每轮对话被动注入见解和审查的副模型。 | `dsh-advisor` | MIT | 2 |
| [Buyi-wsgzg/dsh-sidechain](https://github.com/Buyi-wsgzg/dsh-sidechain) | DSH 侧会话插件：/side 持续性侧会话（Codex 风格）与 /btw 一次性侧问（Claude 风格）——在临时 fork 中运行、不写入主会话历史；Web UI 右侧链面板内嵌对话，主会话保持不变 | `@dsh-external/dsh-sidechain` | BSD-3-Clause | 2 |
| [cendaifeng/dsh-learn-everything](https://github.com/cendaifeng/dsh-learn-everything) | 上游仓库暂未提供介绍 | `dsh-learn-everything` | NOASSERTION | 2 |
| [codeAnqiang-ma/dsh-superpowers](https://github.com/codeAnqiang-ma/dsh-superpowers) | Superpowers (obra/superpowers) as a DeepSeek Harness plugin: the methodology skills plus their session bootstrap | `dsh-superpowers` | NOASSERTION | 2 |
| [Elaina-real/dsh-tiered-approval](https://github.com/Elaina-real/dsh-tiered-approval) | 自动分级审查Tiered auto-review for DeepSeek Harness: static-rule safety net + LLM reviewer + human fallback — auto-allow safe actions, deny irreversible ones, ask a human for the rest. | `dsh-tiered-approval` | MIT | 2 |
| [fakechris/dsh-track](https://github.com/fakechris/dsh-track) | DSH Track Bridge 插件：嵌入式任务管理引擎——决策点协议、念头捕获墙、Linear 形 issue 存储（bundle），AI 与人之间的任务轨道 | `@deepseek-ai/dsh-track` | BSD-3-Clause | 2 |
| [Favio8/dsh-plugin-deepeye](https://github.com/Favio8/dsh-plugin-deepeye) | DeepEye vision plugin for DeepSeek Harness (DSH): image description, OCR, VQA, UI layout, and clipboard analysis. | `dsh-plugin-deepeye` | NOASSERTION | 2 |
| [Flyvhidbwo/dsh-vision-proxy](https://github.com/Flyvhidbwo/dsh-vision-proxy) | DeepSeek Harness 插件：DeepSeek 大脑 + 自动识图。附加图片自动经 Qwen VLM 转译成文字后交给 DeepSeek 作答 | `dsh-vision-proxy` | MIT | 2 |
| [hashdiana/dsh-token-usage](https://github.com/hashdiana/dsh-token-usage) | 上游仓库暂未提供介绍 | `dsh-token-usage` | MIT | 2 |
| [HuanLinOTO/dsh-plugin-better-sidebar-plugin-office](https://github.com/HuanLinOTO/dsh-plugin-better-sidebar-plugin-office) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-better-sidebar-plugin-office` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-interpreters](https://github.com/HuanLinOTO/dsh-plugin-interpreters) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-interpreters` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-sleep](https://github.com/HuanLinOTO/dsh-plugin-sleep) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-sleep` | NOASSERTION | 2 |
| [HuanLinOTO/dsh-plugin-ya-workspace-sidebar](https://github.com/HuanLinOTO/dsh-plugin-ya-workspace-sidebar) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-ya-workspace-sidebar` | NOASSERTION | 2 |
| [humblebanana/dsh-record-replay](https://github.com/humblebanana/dsh-record-replay) | DeepSeek Harness record macOS desktop workflows by demonstration and turn them into agent skills (open-record-replay skill + orr_* tools) | `dsh-record-replay` | MIT | 2 |
| [hyqhyq3/dsh-mcp-manager](https://github.com/hyqhyq3/dsh-mcp-manager) | MCP server manager plugin for DeepSeek Harness: Settings → MCP page, OAuth (PKCE + dynamic client registration) or static-token auth, tools registered as mcp__<name>__* | `dsh-mcp-manager` | MIT | 2 |
| [JasonJin2006/dsh-sound-effects-plugin](https://github.com/JasonJin2006/dsh-sound-effects-plugin) | Reasonix-style sound effects for DeepSeek Harness: generative pentatonic ambient music while the agent works, E6-G6-C7 success chime, A6-E6 attention chime (Web Audio, zero assets). | `dsh-sound-effects-plugin` | MIT | 2 |
| [jiesou/dsh-stream-rules](https://github.com/jiesou/dsh-stream-rules) | Inject rules when needed, without wasting context. Similar to oh-my-pi's "Time-traveling stream rules", but with a very simple and compact code implementation. | `dsh-stream-rules` | MIT | 2 |
| [keleus/deepseek-pet](https://github.com/keleus/deepseek-pet) | 在你的deepseek-harness上养一只吃白饭的大蓝鲸 | `deepseek-pet` | MIT | 2 |
| [LingLambda/dsh-undo](https://github.com/LingLambda/dsh-undo) | Context undo/redo plugin for DeepSeek Harness (dsh): roll the model context back to the last completed step and restore it again. | `dsh-undo` | MIT | 2 |
| [lunw/shopline-ai-toolkit-dsh](https://github.com/lunw/shopline-ai-toolkit-dsh) | SHOPLINE AI Toolkit for DeepSeek Harness (dsh-plugin): official SHOPLINE Developer MCP bridge + SHOPLINE agent skills, mirroring the Shopify AI Toolkit architecture. dsh-plugin | `shopline-ai-toolkit-dsh` | MIT | 2 |
| [lzszq/dsh-scholar](https://github.com/lzszq/dsh-scholar) | dsh-scholar | `@dsh-scholar/research-plugin` | MIT | 2 |
| [Moeblack/deepseek-manners](https://github.com/Moeblack/deepseek-manners) | DSH 插件：给每次消息后注入感谢语（deepseek-manners） | `deepseek-manners` | NOASSERTION | 2 |
| [Moeblack/dsh-prompt-studio](https://github.com/Moeblack/dsh-prompt-studio) | DSH plugin: edit user and built-in system-prompt sections with live preview (Prompt Studio) | `dsh-prompt-studio` | BSD-3-Clause | 2 |
| [Mongfayi/dsh-local-filetree](https://github.com/Mongfayi/dsh-local-filetree) | File tree panel for the DSH Web UI: the right details column shows the current session workspace tree (lazy, read-only). | `dsh-local-filetree` | NOASSERTION | 2 |
| [Mongfayi/dsh-recall](https://github.com/Mongfayi/dsh-recall) | Message recall (撤回) plugin for the DSH Web UI: one undo button on each user message that removes the turn and everything after it, durably, without reverting code changes. | `dsh-recall` | MIT | 2 |
| [morlay/session-persistence-rdb](https://github.com/morlay/session-persistence-rdb) | session 关系型数据库持久化 | `@morlay/session-persistence-rdb` | NOASSERTION | 2 |
| [MuziIsabel/dsh-win-notify](https://github.com/MuziIsabel/dsh-win-notify) | DSH plugin: Windows toast notification with sound when an agent task completes | `dsh-win-notify` | MIT | 2 |
| [nowledge-co/nowledge-mem-deepseek-harness](https://github.com/nowledge-co/nowledge-mem-deepseek-harness) | Nowledge Mem community plugin bundle for DeepSeek Harness | `nowledge-mem-deepseek-harness` | NOASSERTION | 2 |
| [omdsh-dev/dsh-hub](https://github.com/omdsh-dev/dsh-hub) | 上游仓库暂未提供介绍 | `@omdsh/dsh-hub` | MIT | 2 |
| [omdsh-dev/dsh-inspect](https://github.com/omdsh-dev/dsh-inspect) | 发现问题(checkup) → 修复交付(fix) → 质量复查(review) 的对抗式闭环插件：基于官方 workflow 引擎的检查/修复/复查工具集 | `@dsh-external/dsh-inspect` | MIT | 2 |
| [omdsh-dev/dsh-mnemon](https://github.com/omdsh-dev/dsh-mnemon) | Mnemon 与 DSH 的深度集成插件，为 DSH 提供完备的本地记忆系统：运行时记忆、可检索档案与受监督记忆体。 | `dsh-mnemon` | BSD-3-Clause | 2 |
| [omdsh-dev/dsh-tool-calculator](https://github.com/omdsh-dev/dsh-tool-calculator) | DSH 计算器工具插件：安全的数学表达式求值器，零依赖递归下降解析器 | `@deepseek-ai/dsh-tool-calculator` | MIT | 2 |
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
| [renat3u/dsh-web-archive](https://github.com/renat3u/dsh-web-archive) | 折叠对话当中众多的“无用消息”，例如Think、Bash等 | `dsh-web-archive` | NOASSERTION | 2 |
| [Roy-oss1/dsh-lark](https://github.com/Roy-oss1/dsh-lark) | Lark/Feishu IM bot channel for DeepSeek Harness: chats drive agents, replies and approvals return as messages and cards \| 飞书机器人 DSH 插件 | `@dsh-contrib/dsh-lark-channel` | BSD-3-Clause | 2 |
| [titanwings/dsh-plannotator](https://github.com/titanwings/dsh-plannotator) | DSH 计划批注插件：选中计划原文、逐条批注，并把结构化反馈送回 Agent。 / A DSH plan-review plugin for anchored annotations and structured Agent feedback. | `@dsh-external/dsh-plannotator` | MIT | 2 |
| [turtle1999/turtle-ui](https://github.com/turtle1999/turtle-ui) | as is, no warranty | `@deepseek-ai/dsh-tui` | BSD-3-Clause | 2 |
| [vibeinging/dsh-trace](https://github.com/vibeinging/dsh-trace) | DeepSeek Harness telemetry backend that exports turns, model steps, and tool calls to yiTrace over HTTP. | `@deepseek-ai/dsh-trace` | BSD-3-Clause | 2 |
| [vlln/dsh-loop](https://github.com/vlln/dsh-loop) | DSH 插件：定时循环（/loop 命令 + loop 工具 + 活动状态条）。官方 bundle 插件，dsh plugin --profile web add 安装 | `@dsh-external/dsh-loop` | MIT | 2 |
| [william-jin-cmu/dsh-evolve](https://github.com/william-jin-cmu/dsh-evolve) | 自进化插件：agent 在 session 内随对话给自己长出/剪掉能力 —— evolve_add 热挂载持久化 cordis 插件（下一 step 工具即可见），evolve_remove 可逆卸载，重启自动恢复 | `@dsh-external/dsh-evolve` | NOASSERTION | 2 |
| [wuxiangru915/dsh-review-loop](https://github.com/wuxiangru915/dsh-review-loop) | Incremental diff reviewer for DeepSeek Harness — Web UI review panel + /review command. 增量代码审查插件：checkpoint 增量队列 + 审查意见注入 agent. | `@dsh-plugin/dsh-review-loop` | MIT | 2 |
| [Xilin3/dsh-prompt-persona](https://github.com/Xilin3/dsh-prompt-persona) | DSH plugin: edit the system prompt (deployment persona) from the Settings page, with live preview. | `@xilin3/dsh-prompt-persona` | MIT | 2 |
| [XYZ1024-alt/dsh-side-panel](https://github.com/XYZ1024-alt/dsh-side-panel) | 上游仓库暂未提供介绍 | `dsh-side-panel` | MIT | 2 |
| [yoke233/dsh-openai-codex-auth](https://github.com/yoke233/dsh-openai-codex-auth) | OpenAI Codex OAuth login and usage card plugin for DeepSeek Harness | `dsh-openai-codex-auth` | MIT | 2 |
| [YYTbit/dsh-plugin-claude-bridge](https://github.com/YYTbit/dsh-plugin-claude-bridge) | Bridge Claude Code memory, skills, and config into DeepSeek Harness | `dsh-plugin-claude-bridge` | MIT | 2 |
| [YYTbit/dsh-plugin-codex-bridge](https://github.com/YYTbit/dsh-plugin-codex-bridge) | Bridge codex skills and config into DeepSeek Harness | `dsh-plugin-codex-bridge` | MIT | 2 |
| [YYTbit/dsh-plugin-opencode-bridge](https://github.com/YYTbit/dsh-plugin-opencode-bridge) | Bridge opencode skills and config into DeepSeek Harness | `dsh-plugin-opencode-bridge` | MIT | 2 |
| [YYTbit/dsh-plugin-pi-bridge](https://github.com/YYTbit/dsh-plugin-pi-bridge) | Bridge pi skills and config into DeepSeek Harness | `dsh-plugin-pi-bridge` | MIT | 2 |
| [zevorn/dsh-humanize](https://github.com/zevorn/dsh-humanize) | 上游仓库暂未提供介绍 | `@humanize/dsh-humanize` | NOASSERTION | 2 |
| [zhaoscsc/dsh-wikilink](https://github.com/zhaoscsc/dsh-wikilink) | Obsidian-style [[wikilink]] mentions for the DeepSeek Harness web GUI: fuzzy-search note titles and attach their contents to the prompt | `dsh-wikilink` | MIT | 2 |
| [0xsline/dsh-spotlight](https://github.com/0xsline/dsh-spotlight) | Keyboard-first command palette for DeepSeek Harness Web | `@dsh-external/dsh-spotlight` | BSD-3-Clause | 1 |
| [918154429/dsh-codex-import](https://github.com/918154429/dsh-codex-import) | Read-only Codex setup compatibility scanner for DeepSeek Harness | `dsh-codex-import` | MIT | 1 |
| [a179-sanae/dsh-code-check](https://github.com/a179-sanae/dsh-code-check) | 上游仓库暂未提供介绍 | `@a179-sanae/dsh-code-check` | BSD-3-Clause | 1 |
| [AnacondaKC/dsh-custom-css](https://github.com/AnacondaKC/dsh-custom-css) | 上游仓库暂未提供介绍 | `dsh-custom-css` | BSD-3-Clause | 1 |
| [AnacondaKC/dsh-douyin](https://github.com/AnacondaKC/dsh-douyin) | DSH WebUI 侧栏短视频插件：原生播放器、系列导航、直链解析与精确历史回放 | `dsh-douyin` | BSD-3-Clause | 1 |
| [anweat/dsh-web-search-pro](https://github.com/anweat/dsh-web-search-pro) | Enhanced, persistent web search plugin for DeepSeek Harness (multi-engine search, SQLite+LRU cache, platform backends, Playwright rendering) | `dsh-web-search-pro` | MIT | 1 |
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
| [bill9109/dsh-101](https://github.com/bill9109/dsh-101) | DSH 文档阅读模式 | `@dsh-external/dsh-101` | BSD-3-Clause | 1 |
| [bill9109/dsh-conversation-share](https://github.com/bill9109/dsh-conversation-share) | 分享任意段落的 DSH 对话 | `@dsh-external/dsh-conversation-share` | BSD-3-Clause | 1 |
| [bill9109/dsh-drag-and-drop](https://github.com/bill9109/dsh-drag-and-drop) | 为 DSH Web UI 增加跨平台文件拖拽与原始路径插入能力，无需复制文件 | `@dsh-external/dsh-drag-and-drop` | BSD-3-Clause | 1 |
| [bill9109/dsh-webbridge](https://github.com/bill9109/dsh-webbridge) | DSH 结合 Kimi WebBridge | `@dsh-external/dsh-webbridge` | BSD-3-Clause | 1 |
| [bitterSmilezzz/dsh-model-selector](https://github.com/bitterSmilezzz/dsh-model-selector) | DeepSeek Harness web plugin: provider-group collapse + name search for the conversation model picker. | `dsh-model-selector` | MIT | 1 |
| [bitterSmilezzz/dsh-skill-manager](https://github.com/bitterSmilezzz/dsh-skill-manager) | Skills management page for DeepSeek Harness Web Settings (dsh plugin) | `dsh-skill-manager` | MIT | 1 |
| [bobleer/deepseek-harness-plugin-mcp](https://github.com/bobleer/deepseek-harness-plugin-mcp) | MCP server that lets any agent discover, install, and run DeepSeek Harness plugins (topic: dsh-plugin). | `deepseek-harness-plugin-mcp` | MIT | 1 |
| [btspoony/dsh-llm-fallbacks](https://github.com/btspoony/dsh-llm-fallbacks) | An dsh plugin for role-based LLM retry&fallback strategy. 基于角色的模型重试备用策略插件 | `dsh-llm-fallbacks` | MIT | 1 |
| [cking000bigdemon/dsh-toolbelt](https://github.com/cking000bigdemon/dsh-toolbelt) | Eight DeepSeek Harness plugins: persona, language guard, per-request vision fallback, python/windows write guards, cross-agent memory, image generation, and skill shell injection. | `dsh-toolbelt` | MIT | 1 |
| [Demogorgon314/dsh-resume-plugin](https://github.com/Demogorgon314/dsh-resume-plugin) | 让 DeepSeek Harness 安全读取并继续 Codex 与 Claude Code 的历史会话。 | `dsh-resume-plugin` | MIT | 1 |
| [detpecca/dsh-llm-wiki](https://github.com/detpecca/dsh-llm-wiki) | 上游仓库暂未提供介绍 | `@detpecca/dsh-llm-wiki` | MIT | 1 |
| [dingyi222666/dsh-session-notification](https://github.com/dingyi222666/dsh-session-notification) | 提供会话完成等四种状态的通知响应，支持浏览器提示和提示词 | `@dingyi222666/dsh-session-notification` | NOASSERTION | 1 |
| [dongsheng123132/task-passport](https://github.com/dongsheng123132/task-passport) | 让任务状态在 DeepSeek Harness、Claude Code、Codex 等 AI Harness 之间接力 | `task-passport` | MIT | 1 |
| [Drifter-yh/dsh-tool-policy](https://github.com/Drifter-yh/dsh-tool-policy) | Declarative deny-by-default tool policy plugin for DeepSeek Harness | `dsh-tool-policy` | MIT | 1 |
| [Ericwong5021/dsh-kanban](https://github.com/Ericwong5021/dsh-kanban) | Task board plugin for the DeepSeek Harness Web UI | `dsh-kanban` | MIT | 1 |
| [fengzhiyushui/dsh-desktop-window](https://github.com/fengzhiyushui/dsh-desktop-window) | 上游仓库暂未提供介绍 | `dsh-desktop-window` | NOASSERTION | 1 |
| [gordonlu/dsh-context-lens](https://github.com/gordonlu/dsh-context-lens) | Request Context Profiler for DeepSeek Harness — see what changed between model requests, and how cache reuse changed with it. | `dsh-context-lens` | MIT | 1 |
| [gxpppp/dsh-search-mcp](https://github.com/gxpppp/dsh-search-mcp) | Replace dsh's built-in web search with search MCP servers (Tavily/Brave/Exa/Perplexity/DuckDuckGo/custom), configured from the web Settings page. Disables the built-in DeepSeek search provider while enabled. | `dsh-search-mcp` | MIT | 1 |
| [Han-1413141/dsh-sticky-disclosure](https://github.com/Han-1413141/dsh-sticky-disclosure) | DSH Web client plugin: pins off-screen expanded collapsible tags (Think / tool cards) to the top of the conversation viewport with a collapse hotkey | `dsh-sticky-disclosure` | MIT | 1 |
| [havingautism/dsh-deepresearch](https://github.com/havingautism/dsh-deepresearch) | 上游仓库暂未提供介绍 | `@deepseek-ai/dsh-deepresearch` | NOASSERTION | 1 |
| [havingautism/dsh-notebooks](https://github.com/havingautism/dsh-notebooks) | 上游仓库暂未提供介绍 | `@deepseek-ai/dsh-notebooks` | NOASSERTION | 1 |
| [havingautism/dsh-ultra-ui](https://github.com/havingautism/dsh-ultra-ui) | 上游仓库暂未提供介绍 | `@deepseek-ai/dsh-ultra-ui` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-aigc-canvas](https://github.com/HuanLinOTO/dsh-plugin-aigc-canvas) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-aigc-canvas` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-anti-ads](https://github.com/HuanLinOTO/dsh-plugin-anti-ads) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-anti-ads` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-auto-blame](https://github.com/HuanLinOTO/dsh-plugin-auto-blame) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-auto-blame` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-d399](https://github.com/HuanLinOTO/dsh-plugin-d399) | 深夜寂寞？来玩 D399 — 当模型生成时弹出小游戏菜单（wordle / 消消乐，可拓展游戏注册表） | `@huanlin/dsh-plugin-d399` | NOASSERTION | 1 |
| [HuanLinOTO/dsh-plugin-spur](https://github.com/HuanLinOTO/dsh-plugin-spur) | 上游仓库暂未提供介绍 | `@huanlin/dsh-plugin-spur` | NOASSERTION | 1 |
| [ilharp/dsh-tool-approval](https://github.com/ilharp/dsh-tool-approval) | Manual approval for Deepseek Harness (aka "Manual Mode"/"Ask Mode") | `dsh-tool-approval` | BSD-3-Clause | 1 |
| [imetn/dsh-lark-bridge](https://github.com/imetn/dsh-lark-bridge) | Bidirectional Lark/Feishu controller for DeepSeek Harness | `dsh-lark-bridge` | MIT | 1 |
| [Jesse-njx/dsh-memory](https://github.com/Jesse-njx/dsh-memory) | Cited memory over DSH's lossless session log — distilled, human-auditable facts with citations back to the exact source events; memory_read/memory_expand tools, recall index, and a dsh-memory CLI. | `@dsh-memory/bundle` | MIT | 1 |
| [jumpserver-east/jumpserver-dsh](https://github.com/jumpserver-east/jumpserver-dsh) | DeepSeek Harness plugin: manage JumpServer assets and operate on them through KoKo | `dsh-jumpserver` | MIT | 1 |
| [lehhair/dsh-diff-viewer](https://github.com/lehhair/dsh-diff-viewer) | DSH Web GUI PiUI-style diff viewer plugin: replaces the stock DiffBlock for write/edit tool calls via ui-tool diff-card chain slots (host patch included). Private. | `@dsh-external/dsh-diff-viewer` | NOASSERTION | 1 |
| [lehhair/dsh-mobile](https://github.com/lehhair/dsh-mobile) | 上游仓库暂未提供介绍 | `@dsh-external/dsh-mobile` | BSD-3-Clause | 1 |
| [lehhair/dsh-split-panes](https://github.com/lehhair/dsh-split-panes) | 上游仓库暂未提供介绍 | `@dsh-external/dsh-split-panes` | BSD-3-Clause | 1 |
| [LiangYin233/dsh-model-config-sync](https://github.com/LiangYin233/dsh-model-config-sync) | DSH 高级模型配置器：为 DeepSeek Harness 提供将 pi-ai 预设模型的上下文、输出上限、推理挡位一键应用到自定义提供商的能力。 | `dsh-model-config-sync` | MIT | 1 |
| [lin-cheng-lab/dsh-deepseek-balance](https://github.com/lin-cheng-lab/dsh-deepseek-balance) | DeepSeek API 余额监视器：DSH 右下角悬浮徽章 + 7天/30天用量费用图表 | `dsh-deepseek-balance` | MIT | 1 |
| [lin-cheng-lab/dsh-plugin-doctor](https://github.com/lin-cheng-lab/dsh-plugin-doctor) | DSH 插件体检：安装前检查 peer 版本兼容性，防止 rc 不匹配崩溃 🩺 | `dsh-plugin-doctor` | MIT | 1 |
| [lin-cheng-lab/dsh-reloader](https://github.com/lin-cheng-lab/dsh-reloader) | DSH 一键重启：装完插件说一句 reload 就自动重启生效，不用手动 Ctrl+C 🔄 | `dsh-reloader` | MIT | 1 |
| [Liu-ty/dsh-balance-display](https://github.com/Liu-ty/dsh-balance-display) | DeepSeek API balance overlay for DeepSeek Harness | `dsh-balance-display` | MIT | 1 |
| [longyu065/dsh-session-index](https://github.com/longyu065/dsh-session-index) | 上游仓库暂未提供介绍 | `dsh-session-index` | MIT | 1 |
| [Moeblack/dsh-payload-capture](https://github.com/Moeblack/dsh-payload-capture) | DSH 插件：捕捉每次上行模型 API payload，JSON 落盘 | `dsh-payload-capture` | NOASSERTION | 1 |
| [Moeblack/dsh-skins](https://github.com/Moeblack/dsh-skins) | Mirror of dsh-external/dsh-skins + feat: harbor (夕港) dusk-harbor skin | `@dsh-external/dsh-web-skins` | MIT | 1 |
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
| [pinkllo/dsh-reasoning-translator](https://github.com/pinkllo/dsh-reasoning-translator) | DeepSeek Harness plugin: make the model write its chain-of-thought in your language | `dsh-reasoning-translator` | MIT | 1 |
| [PixLunaLab/dsh-pixluna](https://github.com/PixLunaLab/dsh-pixluna) | dsh-plugin-pixluna \| 让 DSH 自己看涩图！ | `dsh-plugin-pixluna` | MPL-2.0 | 1 |
| [qyw233/dsh-deeplink](https://github.com/qyw233/dsh-deeplink) | DSH WebUI 深链插件：?session=/?workspace= 直接打开指定项目对话 | `@dsh-community/dsh-deeplink` | MIT | 1 |
| [RealAlexandreAI/dsh-all-search](https://github.com/RealAlexandreAI/dsh-all-search) | dsh search: AnySearch web search provider for DeepSeek Harness (ctx.web) | `dsh-all-search` | MIT | 1 |
| [RealAlexandreAI/dsh-atuin](https://github.com/RealAlexandreAI/dsh-atuin) | dsh atuin-history: record dsh user prompts into atuin shell history | `dsh-atuin` | MIT | 1 |
| [RealAlexandreAI/dsh-cloudflare-browser-run](https://github.com/RealAlexandreAI/dsh-cloudflare-browser-run) | dsh browser-run: CF Browser Run web tools (markdown/screenshot/pdf) for DeepSeek Harness | `dsh-cloudflare-browser-run` | MIT | 1 |
| [RealAlexandreAI/dsh-nocturne-memory](https://github.com/RealAlexandreAI/dsh-nocturne-memory) | dsh memory: Nocturne Memory client for DeepSeek Harness | `dsh-nocturne-memory` | MIT | 1 |
| [shi275773124/falsify-dsh](https://github.com/shi275773124/falsify-dsh) | DeepSeek Harness adapter for the public Falsify CLI. Adjudicator receipt, not a second-opinion workflow. | `falsify-dsh` | MIT | 1 |
| [shujiTech/dsh-plugin-wepre](https://github.com/shujiTech/dsh-plugin-wepre) | DeepSeek Harness plugin: publish single-screen content cards to WePre Next from a dsh agent session | `dsh-plugin-wepre` | MIT | 1 |
| [SiYue-ZO/dsh-translator](https://github.com/SiYue-ZO/dsh-translator) | Turn DeepSeek Harness into a focused, configurable AI translation workspace. | `dsh-translator` | MIT | 1 |
| [sjscy05/dsh-task-progress-notifier](https://github.com/sjscy05/dsh-task-progress-notifier) | 上游仓库暂未提供介绍 | `dsh-task-progress-notifier` | MIT | 1 |
| [sjscy05/matlab-modelsim-vivado-plugin](https://github.com/sjscy05/matlab-modelsim-vivado-plugin) | DeepSeek Harness plugin: MATLAB + ModelSim + Vivado full-flow tools for digital communication IC design tasks (mmv-dspic) | `mmv-dspic` | MIT | 1 |
| [Small-tailqwq/dsh-tps](https://github.com/Small-tailqwq/dsh-tps) | 只是一个 tps 插件 | `@dsh-external/tps` | BSD-3-Clause | 1 |
| [stushansusu/dsh-miku-skin](https://github.com/stushansusu/dsh-miku-skin) | 初音未来主题皮肤，用于 DeepSeek Harness (DSH) Web GUI —— 蓝紫洋红渐变、毛玻璃面板、可自定义背景图、亮暗双主题 | `@deepseek-ai/dsh-client-ui-skin-miku` | BSD-3-Clause | 1 |
| [TecFancy/dsh-deeptutor](https://github.com/TecFancy/dsh-deeptutor) | DeepTutor bridge bundle for DeepSeek Harness (dsh): learning capabilities, knowledge bases & note archiving. \| DeepTutor 桥接插件(bundle),为 DeepSeek Harness 提供学习能力、知识库与笔记归档工具。 | `dsh-deeptutor` | NOASSERTION | 1 |
| [TwotwoPiggy/dsh-balance](https://github.com/TwotwoPiggy/dsh-balance) | A DeepSeek Harness plugin for real-time token tracking and highly accurate session cost estimation, featuring dynamic peak/off-peak pricing support. | `dsh-balance` | NOASSERTION | 1 |
| [vibeinging/dsh-agent-budget](https://github.com/vibeinging/dsh-agent-budget) | Native Harness agent-tree token budget plugin | `@deepseek-ai/dsh-agent-budget` | NOASSERTION | 1 |
| [vibeinging/dsh-tool-search](https://github.com/vibeinging/dsh-tool-search) | Per-agent on-demand tool discovery and progressive schema disclosure for DeepSeek Harness | `@deepseek-ai/dsh-tool-search` | MIT | 1 |
| [vibeinging/dsh-turn-navigator](https://github.com/vibeinging/dsh-turn-navigator) | Private DSH Web turn navigation plugin | `@deepseek-ai/dsh-turn-navigator` | BSD-3-Clause | 1 |
| [yangzhe1003/dsh-web-search-firecrawl](https://github.com/yangzhe1003/dsh-web-search-firecrawl) | Firecrawl-backed search provider plugin for the DeepSeek Harness web capability seam (ctx.web) | `@yangzhe1003/dsh-web-search-firecrawl` | MIT | 1 |
| [yoke233/dsh-pixel-whale](https://github.com/yoke233/dsh-pixel-whale) | A lively pixel-whale running-state companion for DeepSeek Harness Web. | `dsh-pixel-whale` | MIT | 1 |
| [yoke233/dsh-prime-agent](https://github.com/yoke233/dsh-prime-agent) | Prime Agent-inspired persistent RLM control plane for DeepSeek Harness Code Mode | `dsh-prime-agent` | MIT | 1 |
| [yoke233/dsh-tool-monitor](https://github.com/yoke233/dsh-tool-monitor) | Monitor existing DeepSeek Harness background jobs without running commands twice | `dsh-tool-monitor` | MIT | 1 |
| [yuezengwu/dsh-explain](https://github.com/yuezengwu/dsh-explain) | DSH 本地优先学习模式插件：跨会话全局学习线程、按来源讲解、ExplainContext、压缩与可诊断设置界面 | `dsh-explain` | MIT | 1 |
| [yuxino/dsh-blue-whale-maid](https://github.com/yuxino/dsh-blue-whale-maid) | 上游仓库暂未提供介绍 | `dsh-blue-whale-maid` | NOASSERTION | 1 |
| [YYTbit/dsh-plugin-agent-dashboard](https://github.com/YYTbit/dsh-plugin-agent-dashboard) | Multi-agent dashboard skill for DeepSeek Harness | `dsh-plugin-agent-dashboard` | MIT | 1 |
| [YYTbit/dsh-plugin-auto-docs](https://github.com/YYTbit/dsh-plugin-auto-docs) | Auto documentation generation skill for DeepSeek Harness | `dsh-plugin-auto-docs` | MIT | 1 |
| [YYTbit/dsh-plugin-code-review](https://github.com/YYTbit/dsh-plugin-code-review) | Structured code review skill for DeepSeek Harness | `dsh-plugin-code-review` | MIT | 1 |
| [YYTbit/dsh-plugin-context-compressor](https://github.com/YYTbit/dsh-plugin-context-compressor) | Context compression skill for DeepSeek Harness | `dsh-plugin-context-compressor` | MIT | 1 |
| [YYTbit/dsh-plugin-meta-memory](https://github.com/YYTbit/dsh-plugin-meta-memory) | Structured long-term memory system for DeepSeek Harness | `dsh-plugin-meta-memory` | MIT | 1 |
| [YYTbit/dsh-plugin-rag](https://github.com/YYTbit/dsh-plugin-rag) | Local knowledge base RAG for DeepSeek Harness | `dsh-plugin-rag` | MIT | 1 |
| [YYTbit/dsh-plugin-vision-toolkit](https://github.com/YYTbit/dsh-plugin-vision-toolkit) | Vision toolkit for DeepSeek Harness -- give text-only agents eyes | `dsh-plugin-vision-toolkit` | MIT | 1 |
| [zimixvx/dsh-archive-manager](https://github.com/zimixvx/dsh-archive-manager) | 上游仓库暂未提供介绍 | `dsh-archive-manager` | MIT | 1 |
| [1475505/dsh-plugin-miliastra-toolbox](https://github.com/1475505/dsh-plugin-miliastra-toolbox) | 将千星沙箱（原神千星奇域）知识库接入 Deepseek Harness 的插件 | `dsh-plugin-miliastra-toolbox` | NOASSERTION | 0 |
| [Dino6021/dsh-usage-cost](https://github.com/Dino6021/dsh-usage-cost) | DSH plugin: per-step timestamped DeepSeek API usage timeline + peak/off-peak cost readout. Official bundle; install via: dsh plugin --profile web add github:Dino6021/dsh-usage-cost#main | `dsh-usage-cost` | MIT | 0 |
| [DTSFO/dsh-model-modes](https://github.com/DTSFO/dsh-model-modes) | Capability-aware reasoning controls and Fast model routing for DeepSeek Harness | `dsh-model-modes` | MIT | 0 |
| [hccccc01333/dsh-report-html](https://github.com/hccccc01333/dsh-report-html) | Generate self-contained interactive HTML reports from Markdown, tables, charts, China province maps, flowcharts, math, and drill-down tables — a DeepSeek Harness (dsh) plugin | `dsh-report-html` | NOASSERTION | 0 |
| [Jesse-njx/dsh-chatnode-wechat](https://github.com/Jesse-njx/dsh-chatnode-wechat) | Chat with, monitor, and approve your DSH agents from WeChat — an iLink gateway + conversation node bundle for DeepSeek Harness | `@dsh-cowork/chatnode-wechat` | MIT | 0 |
| [Jesse-njx/dsh-crosstalk](https://github.com/Jesse-njx/dsh-crosstalk) | Cross-session messaging for DSH — any session on the machine can list and message any other, Claude Code-style | `@dsh-crosstalk/bundle` | MIT | 0 |
| [Jesse-njx/dsh-routines](https://github.com/Jesse-njx/dsh-routines) | dsh-routines — scheduled agents for DSH: run a prompt on a cron, get the digest where you already are (file digests, chatnode delivery, unattended-safe) | `@dsh-routines/bundle` | MIT | 0 |
| [mitao-su/dsh-playwright-cli](https://github.com/mitao-su/dsh-playwright-cli) | DeepSeek Harness (DSH) host plugin wrapping the Playwright CLI: install browsers, run tests, open the HTML report from the agent loop. | `dsh-playwright-cli` | MIT | 0 |

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
