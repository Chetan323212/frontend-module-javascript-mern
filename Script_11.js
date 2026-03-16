

// //push mathod 
// let fruits = ["apple" , "banaan"]
// // syntex 
// //array.push(element you want to add)
// fruits.push("chikoo")
// console.log(fruits)

// const { useInsertionEffect } = require("react")

// console.log(fruits)

// let returnedValue = fruits.push("orange")

// console.log("returnValue" , returnedValue) //  returnValue 4

// console.log(fruits) //[ 'apple', 'banaan', 'chikoo', 'orange' ]

// let arr = [1,2,3,4,5]

// // 
// arr.push[6,7,8,9]

// console.log(arr)

// let name = []
// name.push("neme1")
// name.push("neme2")
// name.push("neme3")
// name.push("neme4")

// console.log(name)

// task add the elment from fruits1 to fruits2

// let fruits1 = ["apple", "banaan", "chikoo" ," orange"]
// let fruits2 = []

// for(let i = 0 ; i<fruits1.length;i++){
//      fruits2.push(fruits1[1])
// }
// console.log(fruits2)

// tesk2 write a function that take a empty array and adds even number form 1 to 10

// let arr = []
// function even(arr = []){
//    for(let i = 1; i<=10;i++){
//      if(i%2==0){
//         arr.push(i)
//     }    
//    }
//    console.log(arr)
// }

// even([])

//----------------------------------------------------[pop()]--------------------------------------------------------------

//pop: reove the last element from an array and return thet element

// let arr = [1,2,3,4,5,6];

// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// arr.pop();
// // if you pop() all element then the pop method return the empty array
// //arr.pop();
// console.log(arr)


// let arr = [1,2,3,4,5,6]

// let result1 = arr.pop()
// console.log("popreturn" , result1)
// console.log(arr)

// task you are given  array[1,2,3,4,5] create 2 function 


// let arr = [1,2,3,4,5];
// let returnElement;
// function removeLastElement(arr = [] ){
//     if(arr.length>0){
//          returnElement = arr.pop()
//     }
//     console.log(arr)
   
// }

// function undo(){

//     if(returnElement){
//     arr.push(returnElement)
//     }
//      console.log(arr)
//     returnElement = null
    
// }

// removeLastElement([1,2,3,4,5])
// undo()

// //---------------------------------------------[ Shuft()]--------------------------------------------------------------------

// let arr = [1,2,3,4,5]
// arr.shift();
// console.log(arr)

//----------------------------------------------[ unshift() ]---------------------------------------------------------------------------

// adding the element to begining of an array and return the new lenght 

let arr = [1,2,3,4,5,6]
arr.unshift(0); 

let returnElement = arr.unshift(-1)
console.log(returnElement)
console.log(arr)