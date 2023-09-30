function sayHello(){
    alert('hello!!');
}
console.log('Hello');
var helloButton = document.getElementById('btn');
helloButton.addEventListener('click',sayHello);
