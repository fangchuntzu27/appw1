// //case 1
// function b1(){
//   //var myVar;
//   console.log(myVar); //scope chain to global var = 2
// }
// function a1(){
//   var myVar = 1;
//   b1();
//   console.log(myVar); //1
// }
// var myVar = 2;
// console.log(myVar); //2
// a1();


//case 2
function a1(){
  var myVar = 1;
  function b1(){
    console.log(myVar); // scope chain to a1 = 1
  }
  b1();
  console.log(myVar); //1
}

var myVar = 2;
console.log(myVar); //2
a1();
