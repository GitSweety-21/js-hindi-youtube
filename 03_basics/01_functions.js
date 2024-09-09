
function sayMyName(){
    console.log("S");
    console.log("W");
    console.log("E");
    console.log("E");
    console.log("T");
    console.log("Y");
}

//sayMyName()

// function addTwoNumbers(nums1, nums2){  //parameters - nums1,nums2
//     console.log(nums1+nums2)
// }


function addTwoNumbers(nums1, nums2){ 

    // let result = nums1+nums2;
    // console.log("sweety")

    // return result


    return nums1+nums2
}


const result = addTwoNumbers(3,5)   //arguments  - 3,null


//console.log("Result values:" , result);
  

function loginUserMessage(username){
    // if(username == undefined){
    if(!username){
        //console.log("please enter the user name:")
        
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("sweety"))

//console.log(loginUserMessage("sweety"))


// function division(nums5,nums6){
//     return nums5/nums6
// }
// console.log(division(10,2))

function calculateCardPrice(val1,val2,...num1){   //...->rest or spread operator
      return num1
}

//console.log(calculateCardPrice(200,400,500,600,700))

const user = {
    username: "sweety",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}


// handleObject(user)

handleObject({
    username : "sam",
    price : 399
})


const myNewArray = [200,400,100,600]

function returnSecondvalue(getArray){
     return getArray[1]
}
//console.log(returnSecondvalue(myNewArray));
// console.log(returnSecondvalue([200,400,100,600]));

// function substraction(nums7,nums9){
//     return nums7-nums9
// }
// console.log(substraction(10,5))


