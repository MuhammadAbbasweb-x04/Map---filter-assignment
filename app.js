// Q1
// Answer
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let ans = numbers.map((val) => {
// return val * 2

// })
// console.log(ans);

// Q2
// Answer
// let fruits = ["apple", "banana","cherry"];
// const newarr = fruits.map((val) =>{
// return val.toUpperCase();

// })

// console.log(newarr);

// Q3
// Answer
// let username = [{name: "Alice"}, {name: "Bob"}, {name: "Charlie"}];
// let newarr = username.map((val)=>{
// return val.name 

// })

// console.log(newarr);

// Q4
// Answer
// let animals = ["dog", "elephant","tiger"];
// let newarr = animals.map((word) =>{
// return   word  +  " " + word.length

// })
// console.log(newarr);

// Q5
// Answer
// const words = ["task1", "task2","task3"];
// const newarr = words.map((val)=>{
// return `${val + "done"}`
// })
// console.log(newarr);

// Q6
// Answer
//  let numberarr =  [2, 4, 6, 8];

// let newnum = numberarr.map((num)=>{
// return num * 3
// })
// console.log(newnum);


// Q7
// Answer

// let price = [100,200,300,400,500];
// let newprice = price.map((val) => {
// return `${val + "$"}`

// })
// console.log(newprice);

// Q8
// Answer
// let currentdate = [ new Date() ];
// let newtime = currentdate.map((time)=>{
// return time.toDateString();

// })
// console.log(newtime);


// Q9
// Answer
// let numbers = [1,2,3,4,5,6,7,8,9,10];
// let newnum = numbers.map((num) => {
// return  num%2===0

// })
// console.log(newnum);


// Q10
// Answer
// let words = ["Abbas","Hamza","Abuzar","Abdullah","Muneer","Ahmed"];
// let newarr = words.map((val, index)=>{
// return `${val + index}`

// })
// console.log(newarr);

// Q11
// Answer
// let numbers = [1, 2, 3, 4, 5, 6];
// let newnum = numbers.filter((num) =>{
//   return  num%2===0

// })
// console.log(newnum);


// Q12
// Answer
// let numbers =  [-3, 4, -1, 7, -5];
// let newnum = numbers.filter(num => num > 0);
// console.log(newnum);

// Q13
// Answer
// let  characters = ["Joe","Elizabeth","Tom","Anna"];
// let newarr = characters.filter(names => names.length > 4);
// console.log(newarr);


// Q14
// Answer
// let usernames = [{name: "Alice", active: true}, {name: "Bob", active: false}];
// let newarr = usernames.filter(names => names.active);
// console.log(newarr);


// Q15
// Answer
// let usernames = ["amina", "fatima", "zainab", "ayaan", "hassan", "salman", "khadija"];
// let newarr = usernames.filter((names) => {
// return names.charAt()  === "a"


// });
// console.log(newarr);

// Q16
// Answer
// let numbers = [10,20,30,40,50,60,70,80,90,100]
// let newnum = numbers.filter(num => num > 10);
// console.log(newnum);

// Q17
// Answer
// let values = [0, null, undefined, "", false, NaN, 1, "hello", true, 42];
// let newval = values.filter(val => val);
// console.log(newval);



// Q18
// Answer
// let names = ["I love to code", "Coding is fun", "Decode the message", "Welcome", "Code review"];
// let newarr = names.filter(newnames => newnames.includes("code"));

// console.log(newarr);


// Q19
// Answer
// let  arry = [12, null, "hello", undefined, 0, "world", false, null];
// let newarr = arry.filter(val => val !== null && val !== undefined)
// console.log(newarr);


// Q20
// Answer
// let products = [{name: "Phone", price: 99}, {name: "Tablet", price: 120}];
// let newpro = products.filter(price => price.price < 100)
// console.log(newpro);


// Q21
// Answer

// let numbers = [1, 2, 3, 4];
// let newnum = numbers.reduce((acc, val) => {
// return acc + val

// },0)
// console.log(newnum);



// Q22
// Answer
// let numbers = [10,40,70,100,20,200];
// let newnum = numbers.reduce((acc, max) => {
// return acc > max ? acc : max 
// },0)
// console.log(newnum);



// Q23
// Answer
// let fruits = ["apple", "banana", "apple", "orange", "banana"];
// let newarr = fruits.reduce((count, acc ) => {
// return  count === "fruits" ? acc + 1 : acc
// },0)
// console.log(newarr);
