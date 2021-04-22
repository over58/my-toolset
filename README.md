# my-toolset
这是一个vscode插件，主要提供了已下功能


## Features

- 在文件资源管理中打开当前文件夹(右键菜单)
- 在vscode中以新窗口的形式打开当前文件夹(右键菜单)
- 鼠标放在时间戳上自动格式化显示（hover）
- 选中变量快速的console.log，添加快捷键
- 支持 cson 和 json 格式的互相转换，用来方便的添加自定义语法

## 所有支持的自定义配置
```
"toolset": {
  "identifier": "=",
  "revealFileInOS": false (default)
}
```

### 选中变量快速的console.log，添加快捷键
```
"win": "ctrl+shift+l",
"linux": "ctrl+shift+l",
"mac": "command+shift+l"
```
vscode的配置文件中可以添加配置,指定标识符**identifier**,如下：
```
"toolset": {
  "identifier": "=",
  "revealFileInOS": false (default)
}
```
