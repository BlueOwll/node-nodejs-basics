// list.js - implement function that prints all array of filenames from files folder into console 
// (if files folder doesn't exists Error with message FS operation failed must be thrown)

import fsp from 'fs/promises';
import pth from 'path';
const list = async () => {
  const srcPath = pth.join('src', 'fs', 'files');
	await fsp.access(srcPath)
	.then(()=> fsp.readdir(srcPath))
	.then((res) => {res.map((item) => {console.log(item)})})
	.catch(()=>{throw new Error('FS operation failed');})

	}
await list();