const  vscode = require('vscode')
const path = require('path')

module.exports =  function addCommand (context) {
  let config = vscode.workspace.getConfiguration('toolset')
  if (config.get('revealFileInCode')) {
    // code中新窗口形式打开当前文件夹
    let disposable = vscode.commands.registerCommand('toolset.revealFileInCode', function () {
      let fileDir = path.dirname(vscode.window.activeTextEditor.document.fileName)
      let uri = vscode.Uri.file(fileDir)
      vscode.commands.executeCommand('vscode.openFolder', uri, true)
    });
  
    context.subscriptions.push(disposable);
  }

  let revealFileInOS = config.get('revealFileInOS') || true
  if (revealFileInOS) {
    // 资源管理中打开当前文件夹
    let disposable2 = vscode.commands.registerCommand('toolset.revealFileInOS', function () {
      let fileDir = path.dirname(vscode.window.activeTextEditor.document.fileName)
      let uri = vscode.Uri.file(fileDir)
      vscode.commands.executeCommand('revealFileInOS', uri, true)
    });
  
    context.subscriptions.push(disposable2);
  }

}
