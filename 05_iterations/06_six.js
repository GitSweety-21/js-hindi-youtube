//const coading = ["js","ruby","java","python","cpp"]

// const value = coading.forEach((item) => {
//   //console.log(item);
//   return item
// })

// console.log(value)

 const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num) =>  {
//    return  num > 4
// })

// const newNums = []

// myNums.forEach( (num) => {
//    if (num > 4) {
//       newNums.push(num)
//    }
// })

//console.log(newNums);



const books = [
    {
        title:'Book One',grnre:'Friction',publish: 1981,edition:2004},
    {
        title:'Book Two',grnre:'Non-Friction',publish: 2002,edition:2008},
    {
        title:'Book Three',grnre:'History',publish: 1999,edition:2009},
    {
        title:'Book Four',grnre:'Non-Friction',publish: 1989,edition:2010},
    {
        title:'Book Five',grnre:'Science',publish: 2003,edition:2014},
    {
        title:'Book Six',grnre:'Friction',publish: 1986,edition:2017},
    {
        title:'Book Seven',grnre:'History',publish: 1976,edition:2019},
    
];

//const userBooks = books.filter((bk) => bk.grnre === 'History')

const userBooks = books.filter((bk) => {
    return bk.publish >= 1995 && bk.grnre === 'History'
})

console.log(userBooks);
