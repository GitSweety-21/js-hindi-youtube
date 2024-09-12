//if statement


const isUserLoggedIn = true

const temperature = 41

// if(temperature === 40 ){
//    console.log("temperature is less than 50");
// } else {
//     console.log("temperature is greater then 50");

// }

//<,>,<=,>=,==,!=,===


// const score = 200

// if(score > 100){
//     let power = "fly";
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


//const balanced = 1000

// if(balanced > 500)  console.log("test");

// if(balanced < 500){
//     console.log("less than");
// } else if(balanced < 750){
//     console.log("less than 750");
// } else if(balanced < 900){
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false;
const LoggedInFromEmail = true;

if(userLoggedIn && debitCard && 2==3){    //AND MEANS TWO STATEMENT ARE TRUE
    console.log("Allow to buy course");
}

if(LoggedInFromGoogle || LoggedInFromEmail){    //IF ONE CONDITION IS TRUE
    console.log("User Logged In");
}


