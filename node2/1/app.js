const path = require("path")

const express = require("express");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin")
const shopRoutes = require("./routes/shop")
const erorrRoutes = require("./routes/404")


const app = express();

app.engine("hbs",expressHbs());
app.set("view engine","hbs")
// app.set("view engine","pug");
app.set("views","views")

app.use(express.static(path.join(__dirname,"public")))

app.use("/admin",adminData.router);
app.use(shopRoutes);
app.use(erorrRoutes)


app.listen(3000);