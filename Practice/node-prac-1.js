const http = require("http");

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method
    if(url==="/"){
        res.setHeader("Content-Type","text/html")
       
        res.write("<html>");
        res.write("<head><title>Practice</title></head>");
        res.write("<body><h1>Hi have a Good day</h1></body>");
        res.write("<form action ='/create-user' method = 'POST'><input placeholder = 'UserName' type='text' name = 'UserName'/><button type='submit'>Submit</button></form>")
        res.write("</html>");
        return res.end();
    }
    else if(url==="/users"){
        res.setHeader("Content-Type","text/html")
      
        res.write("<div>")
        res.write("<ol type'1'>")
        res.write("<li>Anand</li>")
        res.write("<li>Ashok</li>")
        res.write("<li>Karthik</li>")
        res.write("</ol>")
        res.write("</div>")
        return res.end()
    }
    else if(url==="/create-user" && method ==="POST"){
        const body = [];
        req.on("data",(chunk)=>{
            body.push(chunk);
        })
         req.on("end",()=>{
            console.log(body.toString())
            console.log(Buffer);
            const parsedMessage = Buffer.concat(body).toString()
            console.log(parsedMessage.split("=")[1]);
        })
        res.statusCode=302;
        res.setHeader("Location","/users");
        res.end();
       
    }

})
server.listen(3000);