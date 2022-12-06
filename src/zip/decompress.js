// decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt with same content 
// as before compression using zlib and Streams API

import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import pth from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { pipeline } from 'stream';
const pipe = promisify(pipeline);

const __dirname = pth.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const dstPath = pth.join(__dirname, 'files', 'fileToCompress2.txt');
    const srcPath = pth.join(__dirname, 'files', 'archive.gz');
    try{
        const unzip = createUnzip();
        const source = createReadStream(srcPath);
        const destination = createWriteStream(dstPath);
        await pipe(source, unzip, destination);
    } catch {
        throw new Error('unzip failed');
    }
   
};

await decompress();