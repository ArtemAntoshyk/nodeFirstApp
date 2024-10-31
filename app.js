const {readFileSync, writeFileSync} = require('fs');


const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync('./content/result-sync.txt', `Here is result ${first}, ${second}`, 'utf8')
//or
//writeFileSync('./content/result-sync.txt', `Here is result ${first}, ${second}`, 'utf8', flag="a")