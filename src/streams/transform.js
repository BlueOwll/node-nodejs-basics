// transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream 
// and then writes it into process.stdout
import { Transform} from 'stream';

class ReverseTransform extends Transform {
    _transform(chunk, encoding, callback) {
      try {
        const resultString = chunk.toString('utf8').split('').reverse().join('');
  
        callback(null, resultString);
      } catch (err) {
        callback(err);
      }
    }
  }

const transform = async () => {
    const  reverse = new ReverseTransform();
    process.stdin.pipe(reverse).pipe(process.stdout);
};

await transform();