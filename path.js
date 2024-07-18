import url from "url";
import path from "path";

const filePath = "./dir1/dir2/text.txt";

//basename or the last file in the path
console.log(path.basename(filePath));
//dirname - directory of the current file
console.log(path.dirname(filePath));
//extension name
console.log(path.extname(filePath));
//the path full object
console.log(path.parse(filePath));

const __filename = url.fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);

const onlyFileName = __filename.replace(__dirname, "");

const filePath2 = path.resolve(__dirname, "dir1", "dir2", "file.txt");
console.log(filePath2);
//NOTE: resolve and join does the same thing