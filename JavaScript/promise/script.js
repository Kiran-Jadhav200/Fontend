
var userLoggedIn = false;

var promise  = new Promise((resolve, regect)=>{
    
    //wait for 1 sec
    setTimeout(()=>{
        //Promise is rsolved
        if(userLoggedIn){
        resolve();
        }else{
            //reject
            regect();
        }
    },1000);
});
promise.then(()=>{
    console.log("Logged in");
}).catch(()=>{ console.log("User not login")});