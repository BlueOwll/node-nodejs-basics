// create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder
//  (if file already exists Error with message FS operation failed must be thrown)

import fsp from 'fs/promises';
import pth from 'path';
const create = async () => {
  const path = pth.join('src', 'fs', 'files', 'fresh.txt');
  const data = 'I am fresh and young';
  await fsp.access(path)
    .then(() => { throw new Error('file exists') })
    .catch((e) => { 
      if (e.message !== 'file exists') { 
        fsp.appendFile(path, data); 
      } else 
      throw new Error('FS operation failed') })

};

await create();