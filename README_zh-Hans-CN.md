### PWSP
**其他语言版本: [English](README.md) | [简体中文](README_zh-Hans-CN.md).**
PWSP，全名Personal Website Template，即个人网站模板。
这是一个人人都能用的网站模板！
### 使用教程
## 修改语言
点开主目录下的index.html，找到<html lang="zh-Hans-CN">修改如下：
中国大陆地区（使用简体中文）：
<html lang="zh-Hans-CN">；
中国内大陆外地区（使用繁体中文）：
<html lang="zh-Hans-TW">；
除中国以外地区（使用英语）：
<html lang="en">；
主目录下的forIE.html进行同样操作。
接着把两个文件中的
<meta property="og:locale" content="zh-CN" />修改成以下设置：
中国大陆地区（使用简体中文）：
<meta property="og:locale" content="zh-CN" />；
中国内大陆外地区（使用繁体中文）：
<meta property="og:locale" content="zh-TW" />；
除中国以外地区（使用英语）：
<meta property="og:locale" content="en" />。

## 修改名称
再次点开index.html，找到
<title>《如冰&出品 - 官方网站》与你的日常便是奇迹</title>
部分，修改为自己的标题，
<meta property="og:title" content="《如冰&出品 - 官方网站》与你的日常便是奇迹" />
也同样修改；
找到
<meta name="description" content="《如冰&出品 - 官方网站》在这里，了解如冰&出品最新资讯" />
，改为你自己的网站搜索引擎显示简介，
<meta property="og:description" content="《如冰&出品 - 官方网站》在这里，了解如冰&出品最新资讯" />
也同样修改，将forIE.html修改为同样设置。
找到<a class="topnav-brand">如冰&出品</a>修改为你自己的导航栏标题。
找到以下部分↓
<ul class="topnav-links">
    <li class="topnav-item"><a href="#home" class="topnav-link active">首页</a></li>
    <li class="topnav-item"><a href="#about" class="topnav-link">关于</a></li>
    <li class="topnav-item"><a href="#works" class="topnav-link">作品</a></li>
    <li class="topnav-item"><a href="#contact" class="topnav-link">联系</a></li>
</ul>
如果你是不懂的小白，建议不要修改，等新版本出现后修改正文即可。
如果你略懂或完全懂，那么将#部分和正文部分（如首页）修改为你自己的内容，并在下面添加你自己的内容即可。

## 修改图片
将./assets/img/favicon.jpg和./assets/img/share.jpg修改为你自己网站的图片；
将./assets/img/background.jpg修改为你自己网站的背景（警告：请不要把背景图设置的太模糊，否则很难看）
如果你的背景较暗，可以把字体设为白色，如果是小白，建议换为较浅背景，否则会不协调。

## 结语
如果你是小白，这个网站模板足以满足你的需求；
如果你会html、css、js，这个网站模板也有很高的可玩性；
如果你喜欢该项目，麻烦给项目给个star和fork！