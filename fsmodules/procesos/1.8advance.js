const fs = require('node:fs');


await fs.readFile('./1.7advance.js', 'utf-8')




// const folder = process.argv[2] === undefined
//     ? '.'
//     : process.argv[2];
// console.log(folder)


// const folder = process.argv[2] ?? '.';
// fs.readdir(folder)
//     .then(element => {
//         element.forEach(file => {
//             console.log(file)
//         })
//     })
//     .catch(err => {
//         if (err) {
//             console.log('salio mal Padre Santo 😔 ', err)
//             return;
//         }

//     })

//     if (process.argv[2] === null || process.argv[2] === undefined) {
//     folder = '.';
// } else {
//     folder = process.argv[2];
// }
