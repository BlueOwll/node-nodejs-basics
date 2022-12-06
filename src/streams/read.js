// read.js - implement function that reads file fileToRead.txt content using Readable Stream 
// and prints it's content into process.stdout

import fs from 'fs';
import pth from 'path';

const read = async () => {
	const srcPath = pth.join('src', 'fs', 'files','fileToRead.txt');// update the path
	const readStream = fs.createReadStream(srcPath , 'utf-8');
	readStream.pipe(process.stdout).on('error', () => {
  	console.log('error');
  	process.exit();
	});
}
await read();