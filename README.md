#### 介绍
deno_mvc
Deno初体验：一个简单的MVC案例

#### 软件架构

采用Deno语言

#### 安装教程

1.  安装 Deno
> Deno 目前可以安装在 Windows、Linux、macOS 系统上，只支持 64 位系统，暂时不支持 32 位。
> 由于 Deno 只有 1 个可执行文件，没有任何第三方依赖，因此安装 Deno 非常简单。主流安装方式有：

###### macOS 和 Linux 系统上使用 shell:
`curl -fsSL https://deno.land/x/install/install.sh | sh`


###### Windows 系统上使用 PowerShell:
`iwr https://deno.land/x/install/install.ps1 -useb | iex`

2.  控制台输入 deno --version 检测版本号
3.  deno run -A server.ts 启动服务
4.  访问 http://localhost:8000/index.html 浏览首页

#### demo说明

1. 主程序入口文件 server.ts
2. 项目公共资源文件 resources.ts
3. 数据库配置文件 cofig/database.ts
4. 静态资源文件 public/*


#### 使用说明

如果需要接口服务，请连接好测试数据库，默认链接MySQL数据库


