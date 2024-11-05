const {readFile, writeFile, writeFileSync} = require('fs');

readFile('./content/first.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    const first = data
    readFile('./content/first.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return
        }

        const second = data
        writeFile('./content/result-async.txt',
            `Here is result ${first}, ${second}`, 'utf8',
            (err, data) => {
                 if (err) {
                     console.error(err);
                     return
                 }
                 console.log('\nResult:\n', data)
            }
        )
    })
})




