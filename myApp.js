var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
  const resPath = __dirname + "/views/index.html";

  console.log(resPath);
  res.sendfile(resPath);
});

app.get("/json", function(req, res) {
  res.send({"message": "Hello json"});
});


































module.exports = app;
