const path = require("path");

const express = require("express");

const rootDir = require("./util/path.js")
const display = require("./routes/display.js")


const app = express();
app.set("view engine","ejs");
app.set("views","views");

app.use(display)

app.listen(1000);