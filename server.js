import http from "http";

const server1 = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello world, this is just a node learning project</h1>"); //write the response over here
  res.end(); //end it by this
});

let port = process.env.PORT;

const server2 = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" }); //writehead(statuscode, header object)
  console.log(req);

  res.write(
    JSON.stringify({ message: "nothing to worry about", sender: "017445" })
  );
  res.end();
});

server2.listen(port, () => {
  console.log(`server running on port ${port}`);
});
