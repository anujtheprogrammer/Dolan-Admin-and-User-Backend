const express = require("express");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());

app.use("/",require("./routes/path"));


app.listen(2000)