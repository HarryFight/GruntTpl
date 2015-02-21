# GruntTpl
Grunt自动化模版

包含了两个模版`sample-html`和`xyGrunt`.

*注：模版需要放在`grunt-init/templates`下即可使用*

创建命令：

```
grunt-init xyGrunt
```

##1.sample-html
 此模板主要用于一些demo测试和简单网页使用，没有配置自动化任务

目录结构如下：
>index.html

>src/css

>src/javascript

>src/images

##2.xyGrunt
此模板使用less进行开发，并配置了三个grunt自动化任务

目录结构：
>index.html

>lib/...

>src/...

>build/...

其中`lib`是库资源的地方，`build`目录需要进行编译后才出现

安装：

```
npm install
```

将需要的模块先进行安装

任务：

1. `grunt`
进行less源文件的编译。

2. `grunt dev`
进入开发模式，先对less源文件进行一次编译后，监听less文件的改动，并进行实时编译。

3. `grunt publish`
用于开发模式后的发布，将对`src`目录下的源文件进行合并压缩并生成到`build`目录。
