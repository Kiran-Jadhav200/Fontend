// var para1 = document.getElementById('para1');
// para1.innerHTML= "Welcome";
// $('p').html("Welcome")
// $('#para1').hide();
// $('#para2').width(100);


/*
function $(query){
    document.querySelector(query);
}
*/
//for css query 
$('p').css({
    'color':'red',
    fontSize:"30px"
});

$('div').css({
    width:"100px",
    height: "100px",
    backgroundColor:"cyan"
});

//for event handling

// $('div').click(function(){
//     alert("upon Div");
// });

$('div').on('click',function(event){
    var element = $(this);
    element.width(element.width()+ 10 + "px");
   // alert("div Clicked");
})
$('a').on('click',function(event){
    event.preventDefault();
    alert("a clicked");
})