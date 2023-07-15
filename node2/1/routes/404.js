const path = require("path")

const express = require("express");

const router = express.Router();

router.use("/",(req,res)=>{
    res.status(404).render("404",{pageTitle:"404",pageMessage:"Page not found!"})
})

module.exports = router