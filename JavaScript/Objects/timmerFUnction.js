// function sayHello(){
//     console.log("after ", sec);
//     sec++;
//     if(sec == 6){
//         clearInterval(id);
//     }
// }
// var sec= 1;
// //setTimeout(sayHello,1000);
// var id = setInterval(sayHello,1000);
var count= 10;
function timer(){
    if(count ==0){
        console.log("Time Up!!");
        clearInterval(id2);
    }else{
    console.log(count);
    count--;
    }
}
var id2 =setInterval(timer, 1000);
 