//for of

// ["",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
   // console.log(num);
    
}

const greattings = "Hello world"

for (const greet of greattings) {
    //console.log(greattings)
    //console.log(`"Each character id ${greet}`)
}


//Maps  //Maps contains unique values

const map = new Map()
map.set('IN',"INDIA");
map.set('USA',"UNITED STATES OF AMERICA");   //KEY AND VALUE
map.set('FR',"FRANCE");
//map.set('IN',"INDIA");

//console.log(map);


for (const [key,value] of map) {
    //console.log(key,':-',value);
}


const myObj = {
    Game1:'NFS',
    Game2:'Spider man'
}
// for (const [key,value] of myObj) {
//     console.log(key,':-', 'value')
// }



