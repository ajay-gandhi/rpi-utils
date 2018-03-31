// content of index.js
const http = require("http");
const Logger = require("../util/logger");

const LOG = new Logger("maintenance-server");
const PORT = process.argv[2] || 8000;

const server = http.createServer((req, res) => {
  LOG.log(`Request URL: ${req.url}`);
  res.end("Site under maintenance");
});

server.listen(PORT, (err) => {
  if (err) return LOG.log("Error starting server: ", err);
  LOG.log(`Server listening on port ${PORT}`);
})
