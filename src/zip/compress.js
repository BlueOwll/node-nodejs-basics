// compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import pth from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { pipeline } from 'stream';
const pipe = promisify(pipeline);

const __dirname = pth.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const srcPath = pth.join(__dirname, 'files', 'fileToCompress.txt');
    const dstPath = pth.join(__dirname, 'files', 'archive.gz');
    try{
        const gzip = createGzip();
        const source = createReadStream(srcPath);
        const destination = createWriteStream(dstPath);
        await pipe(source, gzip, destination);
    } catch {
        throw new Error('gzip failed');
    }
   


};

await compress();

