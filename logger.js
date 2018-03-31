const fs = require("fs");

const timestamp = () => (new Date()).toUTCString();

module.exports = (function () {

  function Logger (logName) {
    this.file = fs.createWriteStream(`/home/ajay/logs/${logName}.log`, { flags: "a+" });
  }

  Logger.prototype.log = function (...args) {
    args.forEach(a => this.file.write(`[${timestamp()}] ${a}\n`));
  };

  return Logger;

})();
