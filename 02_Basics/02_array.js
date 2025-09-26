const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["batman", "superman", "flash"];

//marvel_heroes.push(dc_heroes)

//console.log(marvel_heroes);

const all_heroes = marvel_heroes.concat(dc_heroes); //concat is used to merge two arrays
// console.log(all_heroes);


const all_new_heroes = [...marvel_heroes, ...dc_heroes]; //spread operator is used to merge two arrays
// console.log(all_new_heroes);

const another_arr = [1, 2, 3, [4, 5, 6], 7, 8, [9, 10]];

const real_new_arr = another_arr.flat(1); //flat is used to flatten the array
//console.log(real_new_arr);



console.log(Array.isArray("Abhinash"));
console.log(Array.from("Abhinash"));
console.log(Array.from({ name: "Abhinash" }));

let score = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score, score2, score3));
