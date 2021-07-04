var a = 5;
var b = 1;





// Declare the function (function declerations)
function sum (x,y) {
  // console.log(x,y)
  var c = x+y;
  return c ; 
}
 
//  function expression 

//  var sum = function (x,y){
//   console.log(x,y)
//     var c = x+y;
//     return c ; 
//  }


var result =  sum(a,b);
 document.write('<p class="pFromJS"> ' + result + ' </p>') 

//  document.write('<p class="pFromJS"> ' + sum(a,b) + ' </p>')  


var result2 =  sum(8,9);
console.log(result2);

console.log(sum(a,3));

var input1 =parseInt(prompt('Enter the first num'));
var input2 = parseInt(prompt('Enter the second num'));

var result3 = sum(input1,input2);

alert("the result is : " + result3);


