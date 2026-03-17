// let arr = ["a", "b", "c" ,"d" ,"e", "f", "g"]

// console.log(arr.slice(0,4))// [a , b , c ,d]
// console.log(arr.slice(3)) // [d, e ,f, g]
// console.log(arr.slice(2,2)) // []
// console.log(arr.slice(2,3))// [c]

// console.log(arr.slice(-3))//[e , f , g]

//------------------------------------------------------------------------------------------

//Q1. you are given an array and size write function to splite teh array into given number
//eg. array = [1,2,3,4,5,6,7,8,9] ,size = 3


// let array = [1,2,3,4,5,6,7,8,9] 
// // index  =  0 1 2 3 4 5 6 7 8 
// let size = 3 

// function splite(arr ,size){
//     result = []
//     for(let i = 0; i<array.length; i+=size){
//         result.push(array.slice(i, i+size))
//     }
//     return result
// }
// console.log(splite(array , size))



// arr = [ 1 ,2 , 3 , 4 , 5 ,  6 ,  7 ]

// console.log(arr.splice(0 , 2 , 69 ,69 ))
// arr.splice(1,2)

// let fruits = ["apple" , "banana" , "orange" , "chikoo"]

// fruits.splice(2,1) //["apple","banana" "chikoo"]


// task 2 you are give the array of element and your task is to remove all the falsy value from the array
//input --> arr = [1, 2, 0, 5,"a" null, undefined, 10 ," "]
//output arr =[1 ,2 ,3 ," a" ,  10 ]

// let arr = [1, 2, 0, 5,"a", null, undefined, 10 ," "]
// for(let i = 0; i<arr.length;i--){
//     if(!arr[i]){
//     let result = arr.splice(i,1)
// }
// }

// console.log(arr)


// let arr = [1, 2, 0, 5,"a", null, undefined, 10 ," "]
// for(let i = arr.length;i>=0; i--){
//     if(!arr[i]){
//       let result = arr.splice(i,1)
//     }
// }

// console.log(arr)


// let fruits = ["apple", "banan"]

// fruits.splice(1,0,"Kiwi","orange", "Mango")// [ 'apple', 'Kiwi', 'orange', 'Mango', 'banan' ]
// console.log(fruits)
// fruits.splice(fruits.length, 0,"Kiwi","orange", "Mango") //add the element at the end 
// console.log(fruits)

// let colors = ["red" , "blue" , "green"]

//------------------------------------------[Index of ()]---------------------------------------------------------

// let arr = ["apple" , "banana", "kiwi", "orange" ]

// console.log(arr.indexOf("banana")) //1
// console.log(arr.indexOf("strawberry")) // -1

// task seach if strawberry exists in the above array

// let arr = ["apple" , "banana", "kiwi", "orange" ]
// let index = arr.indexOf("strawberry")
// if(arr.indexOf() == -1){
//     console.log("strawberry is not found ")
// }

// let arr = ["apple" , "banana", "kiwi", "orange" ]
// let index = arr.indexOf("kiwi")
// arr.splice(index,1)

// console.log(arr)

//---------------------------------------[includes]----------------------------------------------------


// let arr = ["apple" , "banana", "kiwi", "orange" ]
// console.log(arr.includes("apple")) // true
// console.log(arr.includes("Mango")) //false


//-------------------------------------------[concat ()]----------------------------------------------------------

// let arr = [1 , 2 , 3]
// let arr1 = [4 , 5 , 6]
// let arr2 = [7 , 8 , 9]
// // console.log(arr.concat(arr1))
// // console.log(arr.concat(arr1 ,arr2))
// console.log(arr.concat(4,5)) // 1 , 2, 3, 4, 5 


// // let arr = [1 , 2 , 3]
// // let arr1 = [4 , 5 , 6]
// // console.log(...arr,...arr1)


// ---------------------------------------------------[reverse()]------------------------------------------------------------------------


let arr = [1,2,3,4,5]
console.log(arr)
console.log(arr.reverse())


