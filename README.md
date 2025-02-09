# PWSP
**Read this in other languages: [English](README.md), [简体中文](README_zh-Hans-CN.md).**
PWSP, which stands for Personal Website Template, that is, a personal website template.
This is a website template that everyone can use!
### Tutorial
## Change the language
Open the index.html in the main directory,locate<html lang="zh-Hans-CN">The following modifications：
Mainland China (using Simplified Chinese):
<html lang="zh-Hans-CN">;
Regions outside the mainland of China (using Traditional Chinese)：
<html lang="zh-Hans-TW">;
Outside China (in English):
<html lang="en">;
Perform the same operation on forIE.html in the root directory.
Then take from the two files
<meta property="og:locale" content="zh-CN" />Change to the following settings:
Mainland China (using Simplified Chinese):
<meta property="og:locale" content="zh-CN" />；
Regions outside the mainland of China (using Traditional Chinese)：
<meta property="og:locale" content="zh-TW" />；
Outside China (in English):
<meta property="og:locale" content="en" />。

## Change the name
Click on the index.html again and find it
<title>《如冰&出品 - 官方网站》与你的日常便是奇迹</title>
section, modified to your own title,
<meta property="og:title" content="《如冰&出品 - 官方网站》与你的日常便是奇迹" />
The same is modified;
found
<meta name="description" content="《如冰&出品 - 官方网站》在这里，了解如冰&出品最新资讯" />
,change it to display the profile of your own website's search engine,
<meta property="og:description" content="《如冰&出品 - 官方网站》在这里，了解如冰&出品最新资讯" />
Also modify forIE.html to the same settings.
found<a class="topnav-brand">如冰&出品</a>Change it to your own navigation bar title.
Find the following part ↓
<ul class="topnav-links">
    <li class="topnav-item"><a href="#home" class="topnav-link active">首页</a></li>
    <li class="topnav-item"><a href="#about" class="topnav-link">关于</a></li>
    <li class="topnav-item"><a href="#works" class="topnav-link">作品</a></li>
    <li class="topnav-item"><a href="#contact" class="topnav-link">联系</a></li>
</ul>
If you are a beginner who does not understand, it is advised not to make modifications and to wait until the new version appears to edit the main text. If you have some understanding or fully understand, then modify the section and the main text (e.g., the homepage) to your own content and add your own content below.

## Modify the image
Modify ./assets/img/favicon.jpg and ./assets/img/share.jpg to images for your own website;
Modify ./assets/img/background.jpg to the background of your own website (warning: please don't make the background image too blurry, otherwise it will look ugly)
If you have a dark background, you can set the font to white, if it is a small white, it is recommended to change to a lighter background, otherwise it will be incongruous.

## conclusion
If you're a novice, this website template is enough for your needs;
If you know HTML, CSS, JS, this website template is also highly playable;
If you like the project, please give it a star and fork!