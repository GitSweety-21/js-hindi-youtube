// const userEmail = "sweety@1234.com"
// const userEmail = ""
const userEmail =[]



// if(userEmail){
//     console.log("Got user Email"); //Assume the true value
// }  else {
//     console.log("Don't have user email");
// }


//falsey values:----

// false,0,-0,BigInt 0n,"",null,undefined,NaN


//truthy values:----

//"0",'false'," ",[],{},function(){}



// if(userEmail.length === 0){
//     console.log("Array is Empty");
// }

const emptyObj ={}

if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

//Nullish Coalescing Operator(??): null undefined (basically null , undefined)


let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10

// val1 = undefined ?? 15

val1 = null ?? 10 ?? 15

console.log(val1);


//Terniary Operator:----

// condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("Greater then 80");


