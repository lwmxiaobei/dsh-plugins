# dsh-plugins

一个可同步、可检索、可安装的 DeepSeek Harness 插件集合。

本仓库从 GitHub 的 `dsh-plugin` 主题发现候选仓库，并检查仓库根目录的 `package.json`。只有同时满足以下条件的项目才进入插件集合：

1. `package.json` 声明了 `dsh.bundle.patch`
2. 对应的 patch 文件真实存在
3. 仓库未归档、未禁用，也不是插件模板

每个插件以 Git 子模块保存，并固定到同步时的具体提交。这样既能获取源码，也能保留原作者的仓库历史、许可证和来源。

## 获取集合

只获取目录与工具：

```bash
git clone https://github.com/lwmxiaobei/dsh-plugins.git
cd dsh-plugins
```

同时获取所有插件源码：

```bash
git clone --recurse-submodules https://github.com/lwmxiaobei/dsh-plugins.git
cd dsh-plugins
```

已经克隆过仓库时，可以补充获取插件源码：

```bash
git submodule update --init --recursive
```

## 查找插件

```bash
npm run list
node bin/dsh-plugins.mjs search vision
node bin/dsh-plugins.mjs info Anionex/dsh-vision-toolkit
```

完整目录见 [CATALOG.md](CATALOG.md)，机器可读数据见 [catalog/plugins.json](catalog/plugins.json)。主题下所有候选仓库保存在 [catalog/repositories.json](catalog/repositories.json)，其中包括未通过插件清单校验的相关项目。

## 安装插件

安装命令默认仅预览，不执行任何上游代码：

```bash
node bin/dsh-plugins.mjs install Anionex/dsh-vision-toolkit --profile web
```

确认来源、许可证和固定提交后，显式执行安装：

```bash
node bin/dsh-plugins.mjs install Anionex/dsh-vision-toolkit --profile web --execute
```

安装器实际调用官方命令：

```bash
dsh plugin --profile web add github:OWNER/REPOSITORY#COMMIT
```

安装完成后，需要重启对应的 DSH 进程。

## 同步集合

需要 Node.js 22、Git 和可访问 GitHub API 的令牌。若未设置 `GITHUB_TOKEN`，脚本会尝试读取 `gh auth token`。

```bash
npm run sync
npm run check
```

同步会重新生成目录、`.gitmodules` 和插件 Git 链接。提交同步结果前应检查新增插件的代码、许可证和安装副作用。

## 安全与许可证

进入集合只代表项目符合 DSH 的基础 bundle 清单结构，不代表本仓库完成了安全审计、功能验证或兼容性背书。安装插件会执行第三方代码，请先阅读源码。

本仓库的脚本和文档使用 MIT 许可证。`plugins/` 下的每个项目继续使用其上游许可证。目录中的 `NOASSERTION` 表示 GitHub API 没有识别到明确许可证，不代表该项目可以自由复制、修改或再分发。
