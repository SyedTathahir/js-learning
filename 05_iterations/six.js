const coding = ["js","ruby","java","python","cpp"]

// const values = coding.forEach( (item) => {// for each does not return any value it's undefined 
//     // console.log(item);
//     return item
// })

// console.log(values)


const myNums = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNums.filter( (num)=> {//filter have callback function which acces for each item and then you have to give conditions then those will be returned.

//     return num>4// {} if scope is there you have to write return for explicit return 
// })


// const newNums = []

// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk)=>{
    return bk.genre === "Science"
  })
  const userBooks = books.filter( (bk)=>{
    bk.publish === 2000
  })

console.log(userBooks)
