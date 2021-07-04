// single comment
/*
 multi-line comment


syntax: rules ,how write smth 
semantics: the meaning 

Data types:

numbers => 1 2 -1 727327 1.5 1.09

string => "whatebevr ahmad 28282" or 'snfsnbd72727@@##%#' ,"1"

boolean => true , false 

operators 

arithmatics op
+ , * ,/ 

1+1 , !*9 

comprasion operators

1 == 1 , 1 != 2 , 1 > 6 

== -> compare the value , 1 == 1 , 10 == "10" , true

=== - > compare the value and data type
"10" === 10 -> false 
10 === 10 -> true 



assigmnet op

=
name = "ahmad"

variables /store data inside of them 

var firstName = "Ahmad"

var x = 1
 var isGreater = true

var x 
 x = 10

var name = "ahmad what"


 */

// var firstName = "Ahmad"

// console.log(firstName)

// console.log("hello")

// var x = 10 

// var y = 20

// var sum = x + y 

// console.log(sum)

// var z = "  !@@ sdadjadj "

// var anything = z + firstName

// console.log(anything)

// console.log(x+z)//concate


// var lastName = " Murad"
// var name = firstName+lastName

// console.log(name)

//compare only the value 
// console.log(1==1)

// compare value and datatype

// console.log(1 == "1" , 1==="1")

// console.log(1 != 2, 1!=1 , 1 !== "1") 

/**
 pop boxes 

 alert() => showing data to the user

 alert("hello and  wlc to my website")

 prompt() = > to get input from the user


to wwrite smth to the user in the html page 

document.write()

conditional statments

if (condition) {
  code goes
}
esle {
  code goes 
}


 */
// var name = "Ahmad"


// alert("wlecome to my website " + name + " :)" )

//undefined
// var x = 10
// var y 
// //undefined
// console.log(y)
// //NAN
// console.log(x + y)

//SyntaxError
// var num = 10 
// console,log(num


// var name = prompt("what is you name?")
// console.log(name)

// alert("wlecome to my website " + name + " :)" )

// var favAnime = prompt("what is your fav Anime ?")

// console.log(favAnime)

// if (favAnime != null)
// {document.write("<h4>" + favAnime + "</h4>")}
// else if(favAnime == "Hunter X Hunter"){
//   alert("you entered Hunter X Hunter ")
// }
// else{
//   alert("you didn't input anything")
// }
//  if (favAnime == "Hunter")
//  {
//    alert("hunter you entered")
//  }
//  else if (favAnime != null)
//  {
  //  document.write("<h2>" + favAnime + "</h2>")
//  }

// else{
//   alert("you didn't input anything")
// }
// if(1 > 12 ){
//   console.log("yes it is")
// }
// else{
//   console.log("no it is not ")
// }


// console.log(1 === "1")

// alert("the message i want ")

// var name = prompt("what is your name ?")

// // console.log(name)
// if (name == "marah"){
//   alert("welcome " + name)
// }
// else{
//   alert("you are not welcome ")
// }


/*

logical operators

and or not  => && , ||, !

this atat && this 

truth table :

true && true - > true 
true && fasle -> false
true || true -> true 
true || false -> true 

!true -> false 
!false -> true 


loops

to repeat smth 
var count = 0 
count = count + 1 , count += 1
count = count + 1 

count = count + 1
count = count + 1

for loop 

for(initial value , condition , counter){
  statmet to repeat 
}


while loop 


 */

//logical op


// var guessNum = prompt("Guess a number")

// if (guessNum == 3 ){
//   alert("you got the first guess right")
// }
// else if (guessNum > 3  && guessNum <= 5 ){
//   alert("you guessed right the number wanted between 3 and 5 ")
// }

// else{
//   alert("you are not lucky")

// }

// var count = 1 

// console.log(count)
// count +=1 
// console.log(count)
// var count = 0;
// infinit loop the condition alwyas true
// for( count ; count <10 || count > 4; count += 1){
//   // if( count % 2 != 0){
//   //   console.log(count)
//   // }
//   console.log(count)
// }

// count = 1
// count = count + 1  , count += 3

// count++ , +1



// var x = prompt("how many times do you want to see hello on the page ")

// for(var i = 0; i < x ; i++){
//   if(x > 10)
//   {
//     i = x +1 
// // break;
//   }
//   else{  document.write("<h3>" + "hello" + "</h3>")
// }
// }

// for(var i = 0; i < x ; i++){
//   document.write("<h3>" + "hello"  + "</h3>")
// }


//while loop 

// var y = 10 

// while(y < 20){

// console.log(y)

// y +=1

// }

// var guessNum = 10;

// var ask =prompt("guess my fav number")
//depend on attept 5 

// for (var i = 0; i <5 ; i ++){
//   if(ask != guessNum){
//       ask =prompt("try agaon ")
  
// }
// }
// while(ask != guessNum){

// ask= prompt("try again wrng answer")


// }

// alert("you guessed right it is 10 ")




//Demo 



var favAnime = prompt("what is your fav anime? (Hunter X Hunter , one Peace )")

function animeFunc() {

while(favAnime != "one peace" && favAnime != "Hunter X Hunter"){
  favAnime = prompt("what is your fav anime? (Hunter X Hunter , one Peace )")
}


if( favAnime == "Hunter X Hunter" ){
var times= prompt("how many time you wish  to it on my page ")

for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + favAnime +"</h3>" + "<img src='https://media.comicbook.com/2020/03/hunter-x-hunter-1209382-1280x0.jpeg' alt='Hunter X Hunter'>" + "</div>")
}

}
else if (favAnime == "one peace"){
  var times= prompt("how many time you wish  to it on my page ")
while(times > 10){
  times = prompt("please enter less than 10 time to see you fav anime")
}
for(var i = 0 ; i < times; i++) {
document.write("<div>" + "<h3>" + favAnime +"</h3>" + "<img src='https://cdn.verasia.eu/14544/one-piece-wan-pisu-vol-96.jpg' alt='one peace'>" + "</div>")
}
}
else{
  alert("djjsjds")
}
}

animeFunc();



var stars = prompt('How many stars do you rate our website ?')



function starsFun(num){
 var output = '' 
for(var i = 0 ; i < num; i++) {
  console.log(output);
  output = output +  "<img src='https://i.pinimg.com/564x/7e/28/89/7e288947c2c179f39398a72fdad19e0c.jpg' alt='stars'>"
}
 
 return output;
}


document.write(starsFun(stars))

// escape
// var name = "ahmad  \" 'jasjad' "

// var name = 'ahmad "nickname"  "jandja" ' 