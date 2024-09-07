const marvel_Heroes = ["thor","Ironman","spiderman"]
const dc_Heroes = ["superman","flash","batman"]

//marvel_Heroes.push(dc_Heroes)

//console.log(marvel_Heroes);
//console.log(typeof marvel_Heroes)

// const all_heroes = marvel_Heroes.concat(dc_Heroes);
// console.log(all_heroes);

const all_new_heroes = [...marvel_Heroes,...dc_Heroes] //spread operator 
//console.log(all_new_heroes)


const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_arr = another_array.flat(Infinity)
console.log(real_another_arr)



console.log(Array.isArray("sweety"))
console.log(Array.from("sweety"))
console.log(Array.from({name : "sweety"})) /// interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));










