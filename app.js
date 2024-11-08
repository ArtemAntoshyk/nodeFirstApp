const {readFile} = require('fs');


const getText = (path) => {
    return new Promise((resolve, reject) => {


        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data)
            }
        })
    })
}
//
// getText('.content/first.txt')
//     .then(result => {console.log(result)})
//     .catch(err => console.log(err));

const start = async () => {
    try {
        const text = await getText('./content/first.txt');
        const text1 = await getText('./content/second.txt');
        console.log(text, text1)

    } catch (err) {
        console.log(err);
    }
}

start();