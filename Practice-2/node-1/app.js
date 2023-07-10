const express = require("express");
const path = require("path")


const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop")
const parser = require("body-parser")

const app = express();
app.use(parser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"public")))
app.use("/admin",adminRoutes);
app.use("/",shopRoutes);
app.use(((req,res,next)=>{
    res.send('<h1>Opps Page Not Found</h1>')
}))
app.listen(3000);