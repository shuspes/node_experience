const http = require("http");
const router = require("./router");

const port = 3000;

const onRequest = (request, response) => {
  console.log("server handled");
  router.route(request);
  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
};

const startHTTPServer = () => {
  const server = http.createServer(onRequest);
  server.listen(port);
};

exports.start = startHTTPServer;

