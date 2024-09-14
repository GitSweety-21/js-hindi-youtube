//reduce method used in count the shopping cart bills

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currval${currval}`)
//     return acc + currval
// },0)

const myTotal = myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);


const shoppingcart = [
    {
        itemname:"js course",
        price:3000
    },
    {
        itemname:"py course",
        price:999
    },
    {
        itemname:"mobile dev course",
        price:5000
    },
    {
        itemname:"data scientist course",
        price:12000
    },
]

const priceTopPay = shoppingcart.reduce((acc,item) => acc + item.price,0)
console.log(priceTopPay);