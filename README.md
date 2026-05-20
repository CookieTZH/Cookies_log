# 个人静态网站（GitHub Pages）

这是一个简单的静态站点框架，用于发布文章和提供文件下载，适合部署到 GitHub Pages。

快速开始：

1. 将此仓库推送到你的 GitHub 账号（例如 `username/username.github.io` 或任意仓库）。
2. 在 GitHub 仓库设置中打开 Pages：选择 `main` 分支并使用根目录（Root）或 `/docs`。
3. 等待几分钟，网站将通过 GitHub Pages 发布。

添加文章：

- 在 `posts/` 中添加 Markdown 文件（例如 `my-post.md`）。
- 在 `posts/_posts.json` 中添加该文章的元数据：`title`、`date`、`file`、`excerpt`。

添加下载文件：

- 把文件放到 `files/` 目录。
- 在 `files/_files.json` 中加入文件信息（`name`、`path`、`desc`）。

如果需要我可以：

- 帮你把站点改为支持 RSS、分页或标签；
- 把样式改成你喜欢的主题；
- 或者改用静态站点生成器（Hugo/Jekyll/Eleventy）。
