for(let i =1; i<=5;i++){
    setTimeout(function(){
        console.log(i);
    },1000);
}
var arr = new Array(6);
for(let i =1; i<5;i++){
i++;
arr[i] =function(){
    console.log(i);
}
i--;

}