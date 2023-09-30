// var outerDiv = document.getElementById('outer');
// outerDiv.addEventListener('mouseover',function(){
//     outerDiv.style.backgroundColor = "cyan";
// });
// outerDiv.addEventListener('mouseout',function(){
//     outerDiv.style.backgroundColor ="red";
// });

// var searchInput = document.getElementById('search');
// searchInput.addEventListener('keypress',function(){
//  alert("text entered");
// });
// document.addEventListener('keydown',function(event){
//     console.log('key down',event.keyCode);

// });
var innerDiv = document.getElementById('inner');
innerDiv.addEventListener('click',function(event){
    console.log('click inner div');
    
});

var outerDiv = document.getElementById('outer');
outerDiv.addEventListener('click',function(event){
    console.log('click outer div');
   
});
document.addEventListener('click',function(){
    console.log('click Document');
});