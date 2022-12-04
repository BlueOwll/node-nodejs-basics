// copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level 
// (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
import fsp from 'fs/promises';
import pth from 'path';
const copy = async () => {

  const srcDirPath = 'files';
  const destDirPath = 'files_copy';


  let dirList;
  try{
    // console.log('reading dir' +srcDirPath);
    dirList = await fsp.readdir(srcDirPath,{withFileTypes:true});
  }catch{
    throw new Error('FS operation failed');
  }

  //console.log('go on ' + destDirPath);

  try{
    await mkdir(destDirPath, {recursive: false});

    for (const str of dirList){
      //console.log(str.name + ' dir? ' + str.isDirectory());
      if(str.isDirectory()){
        await copyDir(path.join(src, str.name), path.join(dest, str.name));
      } else{
        const srcFilePath = path.join(srcDirPath, str.name);
        const destFilePath = path.join(destDirPath, str.name);
        console.log('copying file ' + str.name);
        await copyFile(srcFilePath,destFilePath);
      }
    }
  }catch (e) {
    throw new Error('FS operation failed');
  }
};

await copy();
