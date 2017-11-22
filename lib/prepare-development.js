var fs = require('fs')
var path = require('path')

var defaultEnvFile = path.join(__dirname, '../.env.setup')
var localEnvFile = path.join(__dirname, '../.env.local')
var envFile = path.join(__dirname, '../.env')


var text = fs.readFileSync(defaultEnvFile).toString() + '\n'
text += fs.readFileSync(localEnvFile).toString()

console.log(text)

fs.writeFileSync(envFile, text)