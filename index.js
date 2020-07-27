var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
var port = process.env.PORT || 9000;
srv = app.listen(port);
app.use(
  "/peerjs",
  require("peer").ExpressPeerServer(srv, {
    debug: true,
  })
);
