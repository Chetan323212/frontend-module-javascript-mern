
// let fruits = ["apple" ,"Banana" , "kiwi"]
// shallow copy

// let fruits2 = fruits
//fruits and refers to the fruits2 array in heap memory
// fruits2.splice(1,1,"orange")
// console.log(fruits2)
// console.log(fruits)  



// let fruits = ["apple" ,"Banana" , "kiwi"];

// let datasend = JSON.stringify(fruits);   //converted into a string
// let dataRecieved = JSON.parse(datasend);  // converted into a string

// console.log(fruits); // original arry 
// console.log(datasend); // converted into a string
// console.log(dataRecieved); // converted into a string

// this is ho we crerate a deep copy
// let fruits2 = JSON.parse(JSON.stringify(fruits));
// console.log(fruits2)

// let arr2 = []
// arr2.length = 5
// arr2 = [1 ,2, 3 ,4, 5, 6]
// console.log(arr2)