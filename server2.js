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
//Json middleware
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};
//Route handler for GET /api/users request
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};
//Route handler for GET /api/users/:idRoute handler for GET /api/users/:id
const getUserByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "user was not found" }));
  }
  res.end();
};
//Route handler for POST request at /api/users
const createUserHandler = (req, res) => {
  let body = "";
  //listen for the data
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  console.log(body);
  //end of the request
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

//Not found User Handler
const notFoundUserHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "something went wrong" }));
  res.end();
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUserByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundUserHandler(req, res);
      }
    });
  });
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
