const {readFile, writeFile} = require('fs').promises
// const util = require('util');
// const fs = require("node:fs");
// const  readFilePromise = util.promisify(fs.readFile);
// const  writeFilePromise = util.promisify(fs.writeFile);

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//
//
//         readFile(path, 'utf8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }
//
// getText('.content/first.txt')
//     .then(result => {console.log(result)})
//     .catch(err => console.log(err));

const start = async () => {
    try {
        const text = await readFile('./content/first.txt', 'utf8');
        const text1 = await readFile('./content/second.txt', 'utf8');
        await writeFile('./content/third.txt', `${text} ${text1}`,{flag:"a"});
        console.log(text, text1)

    } catch (err) {
        console.log(err);
    }
}

start();