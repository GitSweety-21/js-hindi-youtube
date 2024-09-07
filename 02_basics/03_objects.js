//singleton
//object defined both key and value but arrays defined only value not key
//object literals
//Object.create

const mySym = Symbol("key1")

const Jsuser = {
    name:"sweety",
    "full name":"Sweety Behera",
    [mySym]: "myKey1",
    age:"23",
    location:"cuttack",
    email:"sweety123@gmail.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser["full name"])
// console.log(Jsuser[mySym])

Jsuser.email = "sweety@chatgpt.com"
//Object.freeze(Jsuser)
Jsuser.email = "sweety@microsoft.com"
//console.log(Jsuser)

Jsuser.greeting = function(){
    console.log("Hello Js user");
}
Jsuser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())