const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","batman","flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)// concat returns new array.

// console.log(allHeros);

const all_new_heros = [...marvel_heros,...dc_heros]//spread operators (...)spread array into individual elements

// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = another_array.flat(Infinity)//concatinate all arrays present in single array , and infinity means depth of arrays present in array , we can manually write the depth of array in flat method like 2,3..etc

console.log(real_another_array);


console.log(Array.isArray("Syed"))//checks if it's an array or not
console.log(Array.from("Syed"))// convert object,string, etc into array 
console.log(Array.from({name:"Syed"}))//empty array if not specify from where to make array like in this case we defined method and not specified keys.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
