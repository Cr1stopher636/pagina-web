const fs = require('node:fs/promises');
const path = require('node:path');



const files = process.argv[2] ?? '.';


// async function ls(files) {
    let files;
    try {
        files = await fs.readdir(files)
    } catch {
        console.error('Error al leer', files)
        process.exit(1)
    }


    const filePromises = files.map(async elemento => {
        const filePath = path.join(files, elemento)
        let Stat;
        try {
            Stat = await fs.stat(filePath)
        } catch {
            console.error('no se pudo', filePath)
            process.exit(1)
        }

        const isDirectory = Stat.isDirectory()
        const fileType = Stat.isDirectory ? 'd' : '-'
        const fileSize = Stat.size
        const fileModified = Stat.mtime.toLocaleString()

        return fileType, fileSize.toString(), fileModified, isDirectory
    })


    const fileInfo = await Promise.all(filePromises)
    fileInfo.forEach(element => {
        console.log(element)
    })

// }

// ls(files)