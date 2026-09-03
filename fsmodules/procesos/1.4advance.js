
const fs = require('node:fs/promises');
const path = require('node:path');
const pc = require('picocolors')

const folder = process.argv[2] ?? '.';

async function init(folder) {
    let files; 

    try {
        files = await fs.readdir(folder)
    } catch (error) {
        console.error(pc.red,'❌', 'no se pudo leer', error)
        process.exit(1)
    }

    const filePromises = files.map(async file => {
        const filePath = path.join(folder, file)
        let fileStats;


        
        try {
            fileStats = await fs.stat(filePath) 
        } catch (error) {
            console.error('no se pudo leer el archivo', error)
            process.exit(1)
        }

        const isDirectory = fileStats.isDirectory();
        const fileType = isDirectory ? 'D' : '-_'
        return `${filePath}, ${pc.blue,file.padEnd(20)}, ${pc.bgBlueBright,fileType}, ${fileStats}`
    })

    const fileInfo = await Promise.all(filePromises)

    fileInfo.forEach(fileInfo => console.log(fileInfo))
};

init(folder);




