var web3 = require('web3');
var net = require('net');

var config = function () {
  
  this.logFormat = "combined";
  // this.ipcPath = process.env["HOME"] + "/.local/share/io.parity.ethereum/jsonrpc.ipc";
  this.provider = new web3.providers.HttpProvider("http://provider:8545");
  
  this.bootstrapUrl = "https://maxcdn.bootstrapcdn.com/bootswatch/3.3.7/yeti/bootstrap.min.css";
  
  this.names = {
    "0xbd832b0cd3291c39ef67691858f35c71dfb3bf21": "Casper"  
  }
  
}

module.exports = config;