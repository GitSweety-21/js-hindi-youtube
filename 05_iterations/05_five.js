const coading = ["js","python","ruby","cpp","java"]

// coading.forEach( function (val) {
//     console.log(val);
// })


// coading.forEach((item) => {
//     console.log(item)
// })

// function printMe(items){
//     console.log(items);
// }

// coading.forEach(function (items){
//     console.log(items);
// })

//coading.forEach(printMe);


// coading.forEach( (item,index, arr) => {
//     console.log(item,index,arr);
// })


const myCoading = [
    {
        languagename:"javaScript",
        languagefill: "js"
    },
    {
        languagename:"java",
        languagefill: "java"
    },
    {
        languagename:"Python",
        languagefill: "py"
    },
]

myCoading.forEach( (item) => {
    console.log(item.languagename);
})