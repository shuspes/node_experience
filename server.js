const http = require("http");

const port = 3000;

const serverHandler = (request, response) => {
  console.log("server handled");
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
};

const startHTTPServer = () => {
  const server = http.createServer(serverHandler);
  server.listen(port);
};

exports.start = startHTTPServer;

