const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const bodyParser = require("body-parser");

const router = express.Router();

const product = [];

router.use(bodyParser.urlencoded({extended:true}))
router.get("/add-product",(req,res,next)=>{
    
    res.render("add-product",{pageTitle:"add-product",path:"/admin/add-product"})
    
})
router.post("/add-product",(req,res,next)=>{
    product.push({title:req.body.title});
    console.log(product)
    res.redirect("/")
})

exports.router = router;
exports.product = product;