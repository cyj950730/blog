# 🚀 快速开始 - 发布到 GitHub

## 立即开始的 3 个步骤

### 1️⃣ 创建 GitHub 仓库
```
登录 GitHub → 点击 "+" → New repository
仓库名：your-username.github.io（或任意名称）
设置为 Public → 不要勾选任何初始化选项 → Create
```

### 2️⃣ 推送代码（在此目录打开终端）

```bash
# 初始化 git（如果还没有的话）
git init

# 添加所有文件
git add .

# 提交
git commit -m "首次提交：Hexo 博客"

# 关联远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# 推送
git branch -M main
git push -u origin main
```

**重要**：将 `YOUR-USERNAME` 和 `YOUR-REPO-NAME` 替换为你的 GitHub 用户名和仓库名！

### 3️⃣ 配置 GitHub Pages

```
进入 GitHub 仓库 → Settings → Pages
Source: Deploy from a branch
Branch: 选择 gh-pages 和 / (root)
点击 Save
```

## ⏳ 等待部署（2-5 分钟）

访问仓库的 **Actions** 标签查看部署进度。

## 🎉 完成！访问你的博客

- **username.github.io 格式**：`https://your-username.github.io/`
- **其他仓库名**：`https://your-username.github.io/repo-name/`

---

## 📝 日常更新

```bash
git add .
git commit -m "更新内容"
git push
```

每次 push 后，GitHub Actions 会自动部署。

---

详细说明请查看：[DEPLOY_TO_GITHUB.md](./DEPLOY_TO_GITHUB.md)
