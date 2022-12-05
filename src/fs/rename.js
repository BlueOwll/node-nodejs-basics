// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md 
// (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

import fsp from 'fs/promises';
import pth from 'path';
const rename= async () => {
  const srcPath = pth.join('src', 'fs', 'files','wrongFilename.txt');
	const dstPath = pth.join('src', 'fs', 'files','properFilename.md');	
    try {
        await fsp.access(dstPath);
        throw new Error('dst exists');
    } catch(e) {
        if (e.message === 'dst exists') throw new Error('FS operation failed');
        await fsp.access(srcPath)
	        .then(()=> fsp.rename(srcPath, dstPath))  // check the errors if exists
	        .catch(()=>{throw new Error('FS operation failed');})
    }
    
 	

	}
await rename();