//IIFE
(() => {
  outage = 20; //global
  var height = 170; //local
  if(outage === 20)height = 180;
  console.log(`height = ${height}`);
})();
console.log(`outage = ${outage}`);
//console.log(`height = ${height}`); //can't show

//compare let & var
"use strict";
var a = 5;
var b = 10;
if(a === 5){
  let a = 4;
  var b = 1;
  console.log(a); //scope in {}
  console.log(b); //scope in function
}

console.log(a);
console.log(b);
