console.log("Hello there!This script file works")
const myFunc =() =>{
   alert("This alert works!")
}
function myFunction1(){
   alert("please enter the followin")
    let name = prompt("Name");
    let verb = prompt("Verb");
    console.log(`Hello there ${name}}Did you ${verb} today`)
    console.log(`Hello there"   +name+" !`)
    var bar=2
    let x=4.3 + 3
    let y= "4" + 4 //4
    let a = 2 * 6
    let b= 8/2 //0
    let c = 5 % 2 //1
    
    console.log(`y`+y)
 }
 
 let x=4
 const y = 6
 var foo  = "this a variable"
 var script = "ECMAScript"
 https://github.com/RenuJaishankar/Jan30thRepo.git
 function myFunction(){
    let inches = prompt("input your height in inches")
    let cm = 2.54* inches
    console.log(`${inches} inches is equal to ${cm} centimeters`)
    document.getElementById("myId").innerHTML = `${inches} inches is equal to ${cm} centimeters`
 }

 function myOtherFunc(){
     document.getElementById("myId").innerHTML = "this document function works"
 }
//jquery example, dont worry too ,much about this
//  $('#circle').click(function(){
//    alert('Clicked!');

//  });
// conditional code
let myVar = 500
let myOtherVar = 400

if (myVar > myOtherVar) {
alert(`${myVar} is bigger than ${myOtherVar}`)
}


function countcups(){
   let noofcups = prompt("Enter Number of Cups")
   if (noofcups <3 ){
      console.log(`Yes I will take another cup of Coffee`)
   }
   else
       console.log(`I think I'm okay for now`)

}

// for(let i=0; i<=9;i++){
//    alert(`We are on iterations ${i}`}
// }

//99 bottles of beer on the wall
let beer = 99


for (let  i = 99; i >= 0; i--){
   beer=i
   if (beer > 0){
   console.log(`We have ${i} bottles of water on the wall`)
    }
    else {
   console.log("We need more beer.")
}

}
