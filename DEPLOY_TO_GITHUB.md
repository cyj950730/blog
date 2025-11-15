# 部署 Hexo 博客到 GitHub Pages

## 📋 前置要求

1. 已有 GitHub 账号
2. 已安装 Node.js 和 npm
3. 已安装 Git

## 🚀 部署步骤

### 步骤 1: 创建 GitHub 仓库

1. 登录 GitHub，创建一个新仓库（Repository）
2. 仓库名称建议格式：`your-username.github.io` 或任意名称
3. 设置为 **Public** （公开仓库）
4. **不要** 初始化 README、.gitignore 或 license（因为本地已有）

### 步骤 2: 初始化并推送代码到 GitHub

在项目根目录打开终端，执行以下命令：

```bash
# 如果还没有初始化 git（如果 .git 文件夹已存在，跳过此步）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit: Hexo blog setup"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 推送到 GitHub（如果主分支是 master，改为 master）
git branch -M main
git push -u origin main
```

**注意**：替换 `YOUR-USERNAME` 和 `YOUR-REPO-NAME` 为你的实际 GitHub 用户名和仓库名。

### 步骤 3: 配置 GitHub Pages

1. 进入你的 GitHub 仓库页面
2. 点击 **Settings**（设置）
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 部分：
   - 选择 **Deploy from a branch**
   - Branch 选择 `gh-pages`
   - 文件夹选择 `/ (root)`
5. 点击 **Save**

### 步骤 4: 触发自动部署

代码推送到 main 分支后，GitHub Actions 会自动：
1. 安装依赖
2. 生成静态文件
3. 部署到 gh-pages 分支

查看部署状态：
- 在仓库页面点击 **Actions** 标签
- 查看 "Deploy Hexo to GitHub Pages" workflow 运行状态
- 等待部署完成（通常 2-5 分钟）

### 步骤 5: 访问你的博客

部署成功后，访问：
- 如果仓库名是 `your-username.github.io`：`https://your-username.github.io/`
- 如果是其他名称：`https://your-username.github.io/repo-name/`

## ⚙️ 修改配置（可选）

### 更新主题配置中的 URL

编辑 `_config.yml` 文件（主题配置文件），更新以下内容：

```yaml
head:
    open_graph:
        url: https://your-username.github.io/  # 改为你的实际域名
```

### 如果你有 Hexo 主配置文件

如果项目根目录有 Hexo 的主配置文件（通常在博客项目的根目录），需要配置：

```yaml
# Hexo 主配置文件 _config.yml
url: https://your-username.github.io
root: /  # 如果是 username.github.io 格式
# root: /repo-name/  # 如果是其他仓库名，需要加上仓库名作为根路径

# 部署配置（可选，因为已使用 GitHub Actions）
deploy:
  type: git
  repo: https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
  branch: gh-pages
```

## 🔄 日常更新流程

每次更新博客内容后：

```bash
# 1. 添加更改
git add .

# 2. 提交更改
git commit -m "描述你的更改"

# 3. 推送到 GitHub
git push origin main
```

推送后，GitHub Actions 会自动构建和部署。

## 📝 文件说明

- `.github/workflows/deploy.yml` - GitHub Actions 自动部署配置
- `_config.yml` - 主题配置文件
- `source/` - 博客源文件（文章、页面等）
- `public/` - 生成的静态文件（已在 .gitignore 中忽略）

## 🐛 常见问题

### 1. 部署失败怎么办？

- 检查 Actions 标签页的错误日志
- 确保 package.json 中的依赖完整
- 确认 Node.js 版本兼容性

### 2. 页面样式丢失？

- 检查 Hexo 主配置中的 `url` 和 `root` 配置
- 确保 `root` 路径与实际访问路径一致

### 3. 如何使用自定义域名？

1. 在仓库根目录创建 `source/CNAME` 文件
2. 文件内容为你的域名，如：`blog.example.com`
3. 在域名服务商处配置 DNS 解析
4. 在 GitHub Pages 设置中添加自定义域名

### 4. 首次部署看不到页面？

- 等待 2-5 分钟，GitHub Pages 需要时间生效
- 检查 Settings > Pages 中是否显示 "Your site is live at..."

## 📚 参考资源

- [Hexo 官方文档](https://hexo.io/zh-cn/docs/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Amazing 主题文档](https://removeif.github.io/)

---

**祝你部署顺利！🎉**
