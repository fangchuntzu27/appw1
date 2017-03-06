function greet(){
  console.log("hi");
}
greet();

function logGreeting(fn){
  fn();
}
logGreeting(greet);

//funciton expression
var greetMe = function(){
  console.log("Hello");
}
greetMe();

logGreeting(greetMe);
