const  vscode = require('vscode')
const path = require('path')

module.exports =  function addCommand (context) {
  // code中新窗口形式打开当前文件夹
  let disposable = vscode.commands.registerCommand('my-toolset.revealFileInCode', function () {
    let fileDir = path.dirname(vscode.window.activeTextEditor.document.fileName)
    let uri = vscode.Uri.file(fileDir)
    vscode.commands.executeCommand('vscode.openFolder', uri, true)
	});

  context.subscriptions.push(disposable);


  // 资源管理中打开当前文件夹
  let disposable2 = vscode.commands.registerCommand('my-toolset.revealFileInOS', function () {
    let fileDir = path.dirname(vscode.window.activeTextEditor.document.fileName)
    let uri = vscode.Uri.file(fileDir)
    vscode.commands.executeCommand('revealFileInOS', uri, true)
	});

  context.subscriptions.push(disposable2);

}
