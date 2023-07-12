const fs = require("fs");

const requestHandler = (req,res)=>{


if(req.url ==="/"){
    res.setHeader("Content-type","text/html");
res.write("<html>")
res.write("<header>")
res.write("<title>Node</title>")
res.write("</header>")
res.write("<body><form action='/message' method='POST'><input name='message'type='text'/><button type='submit'>send</button></form></body>")
res.write("</html>")
return res.end()
}
if(req.url==="/message" && req.method ==="POST"){
const body = [];
req.on("data",(chunk)=>{
    console.log(chunk)
    body.push(chunk);
})
return req.on("end",()=>{
const parsedMessage = Buffer.concat(body).toString();
const message = parsedMessage.split("=")[1];
console.log(message)
fs.writeFile("Message.txt",message,(err)=>{
    res.statusCode = 302;
    res.setHeader("Location","/")
    return res.end()
})

})


}
res.setHeader("Content-type","text/html");
res.write("<html>")
res.write("<header>")
res.write("<title>Node</title>")
res.write("</header>")
res.write("<body><h1>Welcome to Node</h1></body>")

res.write("</html>")
res.end()
}

module.exports = {
    requestHandler : requestHandler,
    text:"Some Text EEE"
}