const http = require("http");

http
  .createServer((req, res) => {
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, { "Set-cookie": "mycookie=test" });
    res.end("Hello Cookie");
  })
  .listen(8083, (err, res) => {
    console.log("Server listening on port 8083");
  });
