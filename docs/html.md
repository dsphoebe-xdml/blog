# HTML 入门

## W3C 简介

W3C 全称 World Wide Web Consortium 中文 万维网联盟，W3C 理事会，是万维网的主要国际标准组织。为半自治非政府组织。

1994 年李爵士离开 CERN 后创立，其目的是通过 W3C 制定标准来促进业界成员间的兼容性和协议。联盟试图让所有的供应商实施一套有联盟选择的核心原则和组件。

为解决不兼容问题，保障网上信息的顺利和完整流通，W3C 制定了一系列标准并督促网上应用开发者和内容提供者遵循这些标准。其中包括语音的规范，开发中使用的导则和解释引擎的行为等。常见的标准有：CSS，DOM，HTML，SVG，XML，XHTML 等



## MDN 简介

MDN，MDN Web Docs 全称 Mozilla Developer Network，Mozilla Developer Center，是一个汇集众多 Mozilla 基金会成品和网上技术开发文档的免费网站。

2017 年 10 月 18 日，Mozilla 携手 Google，微软，三星，W3C 同时宣布将 MDN 作为 Web 文档中心，共同为开发者创建一个统一的，跨浏览器的权威参考文档。



## HTML 所有标签列表

- 文档标签
  - html
- 文档元数据标签
  - head，title，link，meta，style
  - base
- 块状标签
  - body
  - article
  - section
  - nav
  - aside
  - h1 - h6
  - header
  - Footer
- 内容分组标签
  - p
  - address
  - hr
  - pre
  - blockquote
  - ol，ul，li
  - dl，dt，dd
  - figure，figcaption
  - main
  - div
- 文本语义标签
  - a
  - em
  - strong
  - small
  - s 类似 del
  - cite
  - q
  - dfn
  - abbr
  - ruby，rb，rt，rtc，rp
  - data
  - time
  - code
  - var
  - samp
  - kbd
  - sub，sup
  - i，b，u
  - mark
  - bdi，bdo
  - span
  - br
  - wbr
- 编辑类标签
  - ins
  - del
- 嵌入内容
  - picture
  - source
  - img
  - iframe
  - embed
  - object
  - param
  - video
  - audio
  - track
  - map
  - area
  - MathML
  - SVG
- 表格数据
  - table，caption，tbody，tfoot，thead，tr，td，th
  - colgroup，col
- 表单
  - form，label，input，button，select，option，textarea
  - filedset，legend
  - datalist
  - output
  - progress
  - meter
  - optgroup
- 互动元素
  - details
  - summary
  - dialog
- 脚本类
  - script
  - noscript
  - template
  - canvas
- 虚拟类
  - :link，:visited，:active，:hover，:focus，:enabled，:disabled，:checked
  - :indeterminate
  - :default
  - :valid，:invalide
  - :in-range，:out-of-range
  - :required，:optional
  - :read-only，:read-write
  - :dir(ltr)，:dir(rtl)



## 什么是空标签

空标签是指一个不肯跟存在子节点的标签。HTML 里的空标签有：area，base，br，col，command，embed，hr，img，input，keygen，link，meta，param，source，track，wbr，colgroup 



## 什么是可替代标签

可替代标签是指该标签的展现不是由 CSS 来控制的。这些元素是一类外观渲染独立于 CSS 的外部对象。可替代标签通常有固定的宽，固定的高，固定的宽高比。

可替代的标签有：audio 全屏时，canvas 嵌入内容时，object / embed，iframe，img，input[type="image"]，video，applet 插件，通过 CSS 中的 content 属性插入的对象被称为 匿名可替代标签。



## 相关文章

[Replaced Elements in HTML: Myths and Realities](https://www.sitepoint.com/replaced-elements-html-myths-realities/)