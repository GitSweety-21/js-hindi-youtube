//PRIMITIVE DATATYPE

//7 types primitive
// 1.String
// 2.Number 
// 3.Boolean
// 4.null
// 5.undefined
// 6.Symbole
// 7.BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anoterId = Symbol('123')
console.log(id === anoterId);

const bigNumber = 3456678976555445n




//REFERENCE TYPE (NON PRIMITIVE DATA TYPE)
//  1.Array
//  2.objects
//  3.functions

const heros = ["shaktiman","nagaraj","doga"]  //Arrays
let myObj = {
    name:"sweety",            //Objects
    age:"23",

}

 const myFunction = function(){
    console.log("Hello World");   //Function
 }

 console.log(typeof outsideTemp);
 console.log(typeof scoreValue);
 console.log(typeof isLoggedIn);
 console.log(typeof myFunction);
 console.log(typeof id);