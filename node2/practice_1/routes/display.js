const express = require("express");

const router = express.Router();
const bodyParser = require("body-parser");

const users = [];
router.use(bodyParser.urlencoded({extended:false}))
router.get("/",(req,res,next)=>{
    res.render("userForm",{pageTitle:"user form"})
})
 router.post("/users",(req,res,next)=>{
    users.push({name:req.body.name});
    console.log(users)
    res.render("users",{pageTitle:"Users",users:users,hasUsers:users.length>0})
 })

module.exports=router;