# 线上博物馆项目

一个展示文物藏品的静态网站，包含轮播图、藏品展示、AR视频、语音介绍和AI问答功能。

## 项目结构

```
museum-web/
├── index.html          # 主页面
├── style.css           # 样式文件
├── app.js             # JavaScript逻辑
├── package.json       # 项目配置
├── vercel.json        # Vercel部署配置
├── .vercelignore      # Vercel忽略文件
└── assets/            # 静态资源
    ├── favicon.ico
    ├── images/        # 图片资源
    ├── videos/        # 视频资源
    └── voice/         # 音频资源
```

## 部署到Vercel

### 问题解决

如果在Vercel上部署后只显示HTML而CSS和JS不起作用，请确保：

1. **vercel.json配置正确**：使用简化的配置
2. **资源路径正确**：HTML中的CSS和JS引用路径不包含`./`前缀
3. **所有文件已上传**：确保GitHub仓库包含所有必要文件

### 部署步骤

1. 将项目推送到GitHub仓库
2. 在Vercel中导入GitHub仓库
3. Vercel会自动检测为静态网站并部署
4. 部署完成后访问提供的URL

### 本地开发

```bash
# 使用Python启动本地服务器
python -m http.server 8000

# 或使用Node.js
npx serve .
```

然后访问 `http://localhost:8000`

## 功能特性

- 📱 响应式设计，适配移动端
- 🖼️ 轮播图展示
- 🏛️ 文物藏品展示
- 🎥 AR视频播放
- 🔊 语音介绍
- 🤖 AI智能问答
- 🎨 手绘图切换

## 技术栈

- HTML5
- CSS3
- Vanilla JavaScript
- DeepSeek AI API

## 浏览器支持

- Chrome (推荐)
- Firefox
- Safari
- Edge