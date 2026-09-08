const fs = require('node:fs/promises');
const path = require('node:path');



const variable = process.argv[2] ?? '.';


async function ls(directorio) {
    let files;

    try {
        files = await fs.readdir(variable)
        console.log(files);

    } catch (err) {
        console.error('Error al leer el directorio❌😩')
        process.exit(1)
    }


    const filePromises = files.map(async elemento => {
        const filePath = path.join(directorio, elemento)


        let Stat;

        try {
            Stat = await fs.stat(filePath)
        } catch {
            console.error('No se pudo❌', filePath)
            process.exit(1)
        }

        const isDirectory = Stat.isDirectory()
        const fileType = Stat.isDirectory() ? 'SI' : 'NO'
        const fileSize = Stat.size
        const fileModified = Stat.mtime.toLocaleString()

        return {
            fileType,
            fileSize,
            fileModified,
            isDirectory
        }
    })

    const fileInfo = await Promise.all(filePromises)
    fileInfo.forEach(element => {
        console.log(element)
    })
}

ls(variable);
