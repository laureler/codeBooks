<center><h2>docker 相关</h2></center>

#### docker 网易云镜像地址
* https://c.163yun.com/hub#/m/home/

#### linux启动docker
|命令|操作|
|:---:|:---:|
|启动|systemctl start docker|
|守护进程重启 |  sudo systemctl daemon-reload|
|重启docker服务 |  systemctl restart  docker|
|重启docker服务 | sudo service docker restart|
|关闭docker   |service docker stop|   
|关闭docker  |systemctl stop docker|

// todo systemctl 命令简介

如果没有安装systemctl
```cmd
yum install systemctl
```
#### docker启动nginx

1. 拉取镜像
```cmd
docker pull hub.c.163.com/library/nginx:latest 
```

2. 运行启动实例
```cmd
docker run --name nginx-staticForNote -v /Notes:/usr/share/nginx/html:ro -p 3000:80 -d nginx
```

参数说明:
1. docker run --name ${yourDockerName} //启动运行一个实例，你可以在后面为docker实例命名

|命令|操作|详细说明|
|:---:|:---:|:---:|
|--name|为当前的docker实例命名|-|
|-v|映射 当前服务器的路径地址：docker内部的路径地址| ${你当前被映射的地址}:${docker内部的映射地址}:ro|
|-p|映射当前服务器与docker的端口|${你当前的端口}:${docker内部的端口}|
|-d|docker开启Daemon模式|-|

