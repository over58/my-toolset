

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

  require('./commands/time')(context)
  require('./commands/open')(context)
  require('./commands/new-component')(context)
}
exports.activate = activate;

function deactivate() {
  console.log('您的扩展“vscode-plugin-demo”已被释放！')
}

module.exports = {
	activate,
	deactivate
}
