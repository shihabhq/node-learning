import { createServer } from "http";

const port = process.env.PORT || 8000; // Fallback to port 8000 if PORT is not set

const users = [
  { id: 1, name: "abir" },
  { id: 2, name: "sajin" },
  { id: 3, name: "rakib" },
];

//Logger middleware
const logger = (req, res, next) => {
  console.log(`${req.url} and ${req.method}`);
  next();
};

const gettingUser = (req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(id));
    res.setHeader("Content-Type", "application/json");
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "user was not found" }));
    }
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "something went wrong" }));
    res.end();
  }
};

const server = createServer((req, res) => {
  logger(req, res, ()=>{
    gettingUser(req,res)
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
