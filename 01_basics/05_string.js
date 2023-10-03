const name = "Syed "
const repoCount = 50

// console.log(name + repoCount + " value"); not used anymore in the industry

// use backticks  which have string interpolation 

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);
//string declaration

const gameName = new String("SyedT-lc-nader")

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(-2,4);//not include the last index string.
console.log(newString);

const anotherString = gameName.slice(-2,4);
console.log(anotherString);

const newStringOne = "     Syed     "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://syed.com/syed9%website"

console.log(url.replace('9%','-'))

console.log(url.includes('syed'))
console.log(url.includes('zayn'));

console.log(gameName.split('-'));
console.log(gameName.split(''));