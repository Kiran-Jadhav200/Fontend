const http = require('http');
const port = 8000;
const fs = require('fs');
function requestHandler(req, res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html' });
     let filePath;
     switch (req.url) {
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
     
        default:
            filePath = './404.html'
            break;
     }
     fs.readFile(filePath,function(err,data){
        if(err){
            console.log(err);
            return res.end('<h1> ERROR!</h1>');
        }
        return res.end(data);
     })
}


const server = http.createServer(requestHandler);


server.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log("Server is  port: ", port);
    }

});