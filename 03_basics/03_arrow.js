const user = {
    username: "sweety",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)   //to refer current context used this keyword
        console.log(this)
    }

}
// user.welcomeMessage()
// user.username = "anisha"
// user.welcomeMessage()
//console.log(this)

// function chai(){
//     let username = "sweety"
//     console.log(this);
// }
// chai();


// const chai = function(){
//     let username = "sweety"
//     console.log(this.username)
// }
const chai = () => {
    let username = "sweety"
    console.log(this)
}




//chai();

// const addTwo = (num1,num2) =>{   //explicity return
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2

// const addTwo = (num1,num2) => ( num1+num2 )   //implicity return


const addTwo = (num1,num2) => ({username:"sweety"})


console.log(addTwo(3,3));


// const myArray = [2,4,6,8,10];

// myArray.forEach()
