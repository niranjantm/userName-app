const path = require("path");

const express = require("express");

const rootDir = require("../util/path")
const adminData = require("./admin")

const router = express.Router();

router.get("/",(req,res,next)=>{
    console.log(adminData.product)
    res.render("shop",{prods:adminData.product,pageTitle:"My shop"})
})

module.exports = router;