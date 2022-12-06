// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and 
// logs it into console as hex
import { createHash } from 'node:crypto';

import fsp from 'fs/promises';
import pth from 'path';

const calculateHash = async () => {
    const srcPath = pth.join('src', 'hash', 'files', ' fileToCalculateHashFor.txt');// update the path
    const hash = createHash('sha256');
    await fsp.readFile(srcPath, { encoding: 'utf8' })
        .then((res) => { if (res) { console.log(hash.update(res).digest('hex'))}})
        .catch(() => { throw new Error('Hash operation failed'); })
}
await calculateHash();