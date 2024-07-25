import url from 'url';
import path, { basename } from 'path';

const __filename = url.fileURLToPath(import.meta.url)

//basename
const baseName = path.basename(__filename)
//current directory
const dirname = path.dirname(__filename)
//extention name
const ext = path.extname(__filename)
//full path object
const pathObj = path.parse(__filename)

//joining files
const currentPath = path.join(dirname,'dir1','dir2','file.txt')

//object to string
const formattedPath = path.format({root:'/home',dir:'/iphone/sdcard',base:'path.css',ext:'.css'}) //iphone/sdcard/path.css
const normalizedPath = path.normalize('./path//http//extension/simp.js') //path/http/extension/simp.js

