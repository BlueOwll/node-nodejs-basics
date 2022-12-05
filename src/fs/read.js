// read.js - implement function that prints content of the fileToRead.txt into console 
// (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

import fsp from 'fs/promises';
import pth from 'path';
const read = async () => {
    const srcPath = pth.join('src', 'fs', 'files', 'fileToRead.txt');
    await fsp.access(srcPath)
        .then(() => fsp.readFile(srcPath, { encoding: 'utf8' }))
        .then((res) => { console.log(res) })
        .catch(() => { throw new Error('FS operation failed'); })

}
await read();