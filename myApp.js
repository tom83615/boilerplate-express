var express = require('express');
var app = express();
app.use(express.static(__dirname + "/public"));

app.get("*", function(req, res, next) {
  const log = req.method + ' ' + req.path + ' - ' + req.ip;
  console.log(log);

  next();
});

app.get("/", function(req, res) {
  const resPath = __dirname + "/views/index.html";

  console.log(resPath);
  res.sendfile(resPath);
});

app.get("/json", function(req, res) {
  let resJSON = {"message": "Hello json"};
  if(process.env.MESSAGE_STYLE === "uppercase"){
    resJSON.message = "HELLO JSON";
  }
  res.send(resJSON);
});


































module.exports = app;
