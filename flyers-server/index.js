var express = require("express");
const { getFlyers } = require("./handlers/flyers");
const { readDataFromCsv } = require("./utils/readDataFromCsv");


var app = express();
var router = express.Router();
var PORT = 3000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/flyers", getFlyers);



app.use("/api/v1/", router);

app.listen(PORT, async function () {
  console.log("Server is running on PORT:", PORT);
});