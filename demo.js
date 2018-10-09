const fs = require('fs')
const dirName = process.argv[2]
if (fs.existsSync(dirName)) {
  console.log(`文件夹${dirName}已经存在`)
  process.exit(1)
} else {
  fs.mkdirSync(`./${dirName}`)
  process.chdir(`./${dirName}`)
  fs.appendFileSync('./index.html', '<!DOCTYPE>')
  fs.appendFileSync('./index.html', '\n<title>Hello</title>')
  fs.appendFileSync('./index.html', '\n<h1>Hi</h1>')
  fs.mkdirSync('./css')
  fs.mkdirSync('./js')
  fs.writeFileSync('./css/style.css', 'h1{color: red;}')
  fs.appendFileSync('./js/main.js', 'var string = "Hello World"')
  fs.appendFileSync('./js/main.js', '\nalert(string)')
  console.log('完成')
  process.exit(0)
}
