require('dotenv').config()

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 5000;
const api = require('./api/api')
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

var cors = require("cors");
app.use(cors());

require("./config/database");
app.use(api)


app.listen(port, function () {
  console.log("Server is running on port: " + port);
});
