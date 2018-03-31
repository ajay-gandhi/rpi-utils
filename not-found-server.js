// content of index.js
const http = require("http");
const Logger = require("./logger");

const LOG = new Logger("not-found-server");
const PORT = process.argv[2] || 8000;

const server = http.createServer((req, res) => {
  LOG.log(`Request URL: ${req.url}`);
  res.statusCode = 404;
  res.end("404 not found");
});

server.listen(PORT, (err) => {
  if (err) return LOG.log("Error starting server: ", err);
  LOG.log(`Server listening on port ${PORT}`);
})
