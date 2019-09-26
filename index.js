const http = require('http');
const fs = require("fs");

try{
    const server = http.createServer((req, res) => {
        fs.readFile("./view/index.html", (err, page)=>{
            if(err){
                res.writeHead(400);
                res.write("No resource found!");
            }else{
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(page);
            }

            res.end();
            
        });
        // if(req.url==="/"){
            
        // }else{
        //     res.writeHead(404, { 'Content-Type': 'text/html' });
        //     res.write("<h1>Page Not Found!</h1>");
        // }

        // response.end("./index.html");
        
    });

    
    const port = process.env.PORT || 1337;
    server.listen(port);

    console.log("Server running at http://localhost:%d", port);
}catch(error){
    console.log('error' + error.message);
}


