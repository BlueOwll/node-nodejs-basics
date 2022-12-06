// delete.js - implement function that deletes file fileToRemove.txt
//  (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)

import fsp from 'fs/promises';
import pth from 'path';
const remove = async () => {
    const srcPath = pth.join('src', 'fs', 'files', 'fileToRemove.txt');

    await fsp.rm(srcPath)
        .catch(() => { throw new Error('FS operation failed'); })

}
await remove();