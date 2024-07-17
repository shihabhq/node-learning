import fs1 from "fs";
import fs from "fs/promises"; //for promise version

//readfile() callback(default) version
fs1.readFile("./text.txt", "utf8", (err, data) => {
  if (err) throw err;

  //console.log(data + " async");
});

//readfilesync() - synchronous version
const data1 = fs1.readFileSync("./text.txt", "utf8");
//console.log(data1 + " sync");

//readfile() - promise version .then
fs.readFile("./text.txt", "utf8")
  //.then((data) => console.log(data + " promise .then"))
  .catch((err) => console.log(err));

//readfile() - promise version async await

const readFileAsync = async () => {
  try {
    const data2 = await fs.readFile("./text.txt", "utf8");
    console.log(data2 + " async await");
  } catch (e) {
    console.log("problem occured");
  }
};

// Write file async await function
const writeFile = async () => {
  try {
    await fs.writeFile("text.txt", "Hello this is a demo text");
  } catch (e) {
    console.log(e);
  }
};

//append file
const appendFile = async () => {
  try {
    await fs.appendFile("text.txt", "\nthis is an appended text");
  } catch (e) {
    console.log(e);
  }
};
writeFile();
appendFile();
readFileAsync();

//delete files
const deleteFile = async (file) => {
  try {
    fs.unlink(file);
    console.log("file successfully deleted");
  } catch (e) {
    console.log(e);
  }
};
deleteFile('./text.txt')