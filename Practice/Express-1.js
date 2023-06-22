

const express = require("express");


const app = express()
app.use("/add-product",(req,res,next)=>{
    console.log("in the middleware");
    res.send("<h1>Add product page</h1>")
})
app.use((req,res,next)=>{
    console.log("Another middleware")
    res.send("<h1>Hi From Express!</h1>")
})

app.listen(3000)