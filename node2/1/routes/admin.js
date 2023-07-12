const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const bodyParser = require("body-parser");

const router = express.Router();

const product = [];

router.use(bodyParser.urlencoded({extended:true}))
router.get("/add-product",(req,res,next)=>{
    
    res.sendFile(path.join(rootDir,"views","add-product.html"))
    
})
router.post("/add-product",(req,res,next)=>{
    product.push(req.body.title);
    console.log(product)
    res.redirect("/")
})

exports.router = router;
exports.product = product;