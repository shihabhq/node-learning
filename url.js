import url from "url";

const newUrl = "http://www.google.com/search?q=silky+chiken";

const urlObj = new URL(newUrl); //gives the full url object

const formattedUrl = url.format(urlObj); //object to string

//file url
const filePath = import.meta.url;
//file:///home/agentg23/Desktop/Code/nodejs-traversy/url.js

//fileurltopath(this one eliminates the 'file')
const fileDeductedUrl = url.fileURLToPath(
  "file:///imph/hdcard/sdcard/Code/nodejs-traversy/url.js"
);
///imph/hdcard/sdcard/Code/nodejs-traversy/url.js

const fileAddedUrl = url.pathToFileURL(
  "/imph/hdcard/sdcard/Code/nodejs-traversy/url.js"
); //gives a url object