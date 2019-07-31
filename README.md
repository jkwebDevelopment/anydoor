# anydoor
NodeJs Static Web Server

## 安装
npm i -g anydoor

## 使用方法

anydoor #把当前文件夹作为静态资源服务器根目录
anydoor -p 8000 #设置端口号为8000
anydoor -h localhost #设置host 为localhost
anydoor -d /user #设置根目录为/user

##package.json 配置
pre-commit : 主要用于提交到git之前做的一些东西。需要安装pre-commit (fix: eslint自动修复。lint: eslint检测)
bin : 用于配置cli
