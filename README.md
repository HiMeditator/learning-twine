<div align="center" >
    <img src="./img/media/twine.svg" width="100px" height="100px"/>
    <img src="./img/media/sugarcube.svg" width="100px" height="100px"/>
    <h1 align="center">learning-twine-with-sugarcube</h1>
    <p>本项目主要是个人使用，其中构建了一个使用 SugarCube 作为故事格式，使用 Tweego 进行编译的 Twine 样例。如果你对该项目感兴趣，你也可能从中学到一些知识。</p>
    <p>
        | <b>简体中文</b>
        | <a href="./README_en.md">English</a> |
    </p>
</div>

## 📝 背景知识

本项目的内容基于SugarCube 官方文档 <a href="https://www.motoslave.net/sugarcube/2/docs/" target="_blank">SugarCube v2 Documentation</a> 编写。本项目只会编写对我个人来说需要实验的内容，不会编写所有内容。

为了更好地理解该项目，需要对以下内容有一定了解。

- **Twine**：一个用于创建互动式故事和游戏的开源工具。
- **SugarCube**：一种为 Twine 设计的故事格式，支持更丰富的视觉效果和脚本功能。
- **Tweego**：一个命令行工具，用于编译 Twine 故事文件到可发布的格式。
- **HTML**：超文本标记语言，用于构建网页结构的基础语言。
- **CSS**：层叠样式表，用来定义网页的布局和外观。
- **JavaScript**：一种编程语言，用于实现网页上的交互功能。

## 🌐 在线访问

https://himeditator.github.io/learning-twine/

## 🚀 项目运行

### 安装依赖

```bash
npm install
```

### 构建项目

项目只提供了 Windows 平台的编译工具（tweego-win-x64.exe），如果需要在其他平台使用，请自行下载对应平台的编译工具。

```bash
# 使用 npm
npm run compile
# 或者直接运行编译脚本
./compile.bat
# 在 Windows + VS Code 环境下，按 F5 或 Ctrl+F5 进行编译
```

### 打开网页

```bash
# 仅打开网页
npm run open
# 编译项目并打开网页
npm run both
# 或者直接打开网页文件
./main.html
```