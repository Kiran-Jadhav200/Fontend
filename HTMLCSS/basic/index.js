const express = require('express');
const port = 8000;

const app = express();

app.get('/:fp',(req,res)=>{
    let filePath;
    switch (req.params.fp) {
        case '/':
            filePath = './index.html';
            break;
        case '/form':
            filePath = "./form.html";
            break;
        case '/list':
            filePath ="./list.html";
            break;
        case '/table':
            filePath = "./table.html";
            break;
        case '/block':
            filePath = "./index_block.html";
            break;
        default:
            filePath = './404.html';
            break; 
    }
    res.sendFile(filePath);
});

app.listen(port,function(err){
    if(err){
        console.log("Error in running the server: ",err);
    }
    console.log("Server is running on port: ",port);
});

