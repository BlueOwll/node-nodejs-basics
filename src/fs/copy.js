// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import fsp from 'fs/promises';
import pth from 'path';
const copy = async () => {
  const srcPath = pth.join('src', 'fs', 'files');
const dstPath = pth.join('src', 'fs', 'files_copy');	
 	await fsp.access(srcPath)
	.then(()=> fsp.cp(srcPath, dstPath, {errorOnExist: true, force: false, recursive: true}))
	.catch(()=>{throw new Error('FS operation failed');})

	}
await copy();