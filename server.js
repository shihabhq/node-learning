import http from "http";
import fs from "fs/promises";

//NOTE: in esmodules you have the __dirname and __filename variable
//but in modernjs you don't have that feature. so we need the url
import url from "url";
import path from "path";

///get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server1 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello world, this is just a node learning project</h1>"); //write the response over here
  res.end(); //end it by this
});

let port = process.env.PORT;

const server2 = http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        res.statusCode = 404;
        filePath = path.join(__dirname, "public", "notfound.html");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      res.writeHead(405, { "Content-Type": "text/html" });
      res.end(`<h1>Method not allowed</h1>`);
    }
  } catch (e) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end(`<h1>server problem occured</h1>`);
  }
});

server2.listen(port, () => {
  console.log(`server running on port ${port}`);
});
