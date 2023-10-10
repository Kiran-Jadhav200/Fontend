const express = require('express');
const path = require('path');
const port = 8000;


const db = require('./config/mongoose')

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));

//middleware1
// app.use((req,res,next)=>{
//     req.myName ="Kiran";
//     //console.log('middleware 1 called');
//     next();
// });

// //middleware2
// app.use((req,res,next)=>{
//     console.log("My Name From NW2",req.myName);
//    // console.log("middleware 2 called");
//     next();
// });

var contactList = [
    {
        name: "Kiran",
        phone: "1234567890"

    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "1234567890"
    }
]

app.get('/',function(req,res){
    console.log("from the get route controller",req.myName);
  return res.render('home',
  {title: "Contact List",
  name:"Kiran Jadhav",
  contact_List:contactList});

});
app.get('/practice',function(req,res){
    return res.render('practice',
    {title:"Let us play with ejs" });
})

app.post('/create-contact',(req,res)=>{
//    contactList.push({
//     name:req.body.name,
//     phone:req.body.phone
//    });
contactList.push(req.body);
   return res.redirect('back');
    
});

app.get('/delete-contact/:phone',(req,res)=>{
    console.log(req.params);
    let phone = req.params.phone;

    
})


app.listen(port,function(err){
    if(err){
        console.log("Error in running the server: ",err);
    }
    console.log("Server is running on port: ",port);
});