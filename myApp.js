var express = require('express');
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.get("/now", function(req, res, next) {
  next();
}, function(req, res) {
  let serverTime = new Date().toString();
  let resJSON = {"time": serverTime};
  res.send(resJSON);
});

app.get("/:word/echo", function(req, res) {
  const echo = req.params.word;
  res.send({"echo": echo});
});


app.route("/name")
  .get(function(req, res) {
     const name = req.query;
     res.send({name: name.first + " " + name.last});
  }).post(function(req, res) {
  });






























module.exports = app;
