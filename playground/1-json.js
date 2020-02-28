const fs = require('fs')

const data = JSON.parse(fs.readFileSync('1-json.json').toString())

data.name = 'Pur'
data.age = 24

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)