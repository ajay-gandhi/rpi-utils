const fs = require("fs");

const timestamp = () => (new Date()).toUTCString();

module.exports = (function () {

  function Logger (logName) {
    this.file = fs.createWriteStream(`/home/ajay/logs/${logName}.log`, { flags: "a+" });
    this.isDev = process.stdin.isTTY;
  }

  Logger.prototype.log = function (...args) {
    if (this.isDev) {
      console.log(timestamp(), ...args);
    } else {
      args.forEach(a => this.file.write(`[${timestamp()}] ${a.toString()}\n`));
    }
  };

  return Logger;

})();
