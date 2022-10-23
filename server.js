const http = require("http");

PORT = 5000;

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("Welcome to Home Page!!!");
  res.end();
});

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}!!`);
});
