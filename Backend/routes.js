const fs = require("fs");


const routeHandler = (req,res)=>{

if(req.url==="/"){

    res.write("<html>");
    res.write("<head><title>My new page</title></head>");
    res.write("<body><form action = '/message' method='POST' ><input type='text' name='message'><button type='submit'>Submit</button></form></body>")
    res.write("</html>");
    return res.end();
    }
    if(req.url==="/message" && req.method ==="POST"){
        const body = [];
        req.on("data",(chunk)=>{
            console.log(chunk);
            body.push(chunk)
            console.log(body)
        })
        return req.on("end",()=>{
            const parsedMessage = Buffer.concat(body).toString();
            console.log(parsedMessage)
            const Message = parsedMessage.split("=")[1]
            fs.writeFile("message.txt",Message,err=>{
                console.log(Message)
                res.statusCode = 302;
                res.setHeader("Location","/");
                return res.end()
            })
            
        })
        
        
    }

    res.setHeader("Content-Type","text/html");
    res.write("<html>")
    res.write("<head><title>My new page</title></head>")
    res.write("<body><h1>Hi from Node.js Server</h1></body>")
    res.write("</html>")
    res.end()
}

module.exports = routeHandler;
