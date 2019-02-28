#### pm2 使用

使用命令
```cmd
$ pm2 stop     <app_name|id|'all'|json_conf>
$ pm2 restart  <app_name|id|'all'|json_conf>
$ pm2 delete   <app_name|id|'all'|json_conf>
```

示例：
例如你的package.json
```json
{
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
		"start": "docsify serve",
		"summary": "book sm"
	},
	"dependencies": {
		"docsify": "^4.8.6"
	}
}
```
```cmd
	// pm2 守护启动 start
	pm2 start npm -- run start
	// pm2 守护启动 test
	pm2 start npm -- run test
	// pm2 守护启动 summary
	pm2 start npm -- run summary
```
