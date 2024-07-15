import http from "http";

const server1 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello world, this is just a node learning project</h1>"); //write the response over here
  res.end(); //end it by this
});

let port = process.env.PORT;

const server2 = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>hwllo this is homepage</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>hwllo this is about page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end(`<h1>We did not find the ${req.url.replace("/", "")} page</h1>`);
  }
});

server2.listen(port, () => {
  console.log(`server running on port ${port}`);
});
