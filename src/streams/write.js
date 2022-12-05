// write.js - implement function that writes process.stdin data into file fileToWrite.txt content 
// using Writable Stream

import fs from 'fs';
import url from 'url';
import pth from 'path';

const __dirname = pth.dirname(url.fileURLToPath(import.meta.url));

const write = async () => {
    const dstPath = pth.join(__dirname,'files', 'fileToWrite.txt');
    const writeStream = fs.createWriteStream(dstPath, {flags: 'a' });
    
    console.log('enter something');
    process.stdin.on('data', (data) => {
        writeStream.write(data.toString());
    });
};

await write();
