var PeerServer = require("peer").PeerServer;
var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

var server = PeerServer({ port: 9000, path: "/" });
console.log(server);
