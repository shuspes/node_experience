const http = require("http");
const url = require("url");

const port = 3000;

const onRequest = (request, response) => {
  console.log("server handled");
  const requestedURL = url.parse(request.url);
  console.log("requestedURL", requestedURL);
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
};

const startHTTPServer = () => {
  const server = http.createServer(onRequest);
  server.listen(port);
};

exports.start = startHTTPServer;

