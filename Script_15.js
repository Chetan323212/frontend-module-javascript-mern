

// let world = "world"
// let str = `Hello ${world}`
// console.log(str)

// // if you want to display the string in a paraticular format use backticks
// //  using "" or `` will not work here

// let fruits = `fruits:
//          * apple
//          * Banana
//          * kiwi
// `
// console.log(fruits)

// // bold() method to bold the string

// let str2 = "HELLO CHETAN"
// let text = str2.bold()
// console.log(text)

//--------------------------------------------------------[Sprcial charecter]-----------------------------------------------------

// let fruits1 = "fruits: \n   *apple \n   *banana \n   *kiwi"
// console.log(fruits1)

// let str1 = "hello\nworld"
// let str2 = `hello
// world`
// if(str1 === str2){
//      console.log("thay are same")
// }

// console.log("backslack:  \\")  // backslack

// // console.log("Hi i'm chetna")

// console.log('Hi i\'m chetna')
// console.log("Hi i'm \"Chetan\" " )


//----------------------------------------------------------------[tab]--------------------------------------------------------------------

//console.log("hi \t I'm\t chetan")


//-----------------------------------------------------------------------------------------------------------------------------------------


//  let str = "hello"
// let arr = ['h','e','l','l','o']

// console.log(str[str.length -1])//o
// console.log(str[0]) //h   // can not use negative index
// console.log(str.at(-1)) // able ot use negative index


// for(let i = 0; i < str.length; i++){
//     console.log(str[i])
// }

// for(let char of str){
//     console.log(char)
// }

// -------------------------------------------------------------strings are not mutable-----------------------------------------------------------------------------

// let str = "hello"
// let arr = ['h','e','l','l','o']

// arr[0] = "H"
// console.log(arr)
// str[0] = "H"
// console.log(str)


//----------------------------------------------------------------------------[uppercase]------------------------------------------------------------------------------------

// let str = "hello"
// console.log(str.toUpperCase()) // consvert it in uppercase

// console.log(str[0].toUpperCase() + str.slice(1))  // convert the first element


//--------------------------------------------------------------------------------[lowercase]-------------------------------------------------------------------------------------------

// let STR = "hello"

// console.log(STR.toLowerCase()) // consvert to lowercase

// task : you are given a string convert it into camel case
// input1 = hello -> hello
// input2 = jAVAsCript -> javascript
// input3 = the -THe

// function camCase(str){
//     //console.log(str[0].toUpperCase() + str.slice(1).toLowerCase())
//     //or
//     str = str.toLowerCase()
//     console.log(str[0].toUpperCase() + str.slice(1))
// }

// camCase("the")
//----------------------------------------------------------------------------------------[indexOf]------------------------------------------------------------------------------------
// syntex stringName.indexOf(substring , index(optional)) 
// let str = "hello"
// console.log(str.indexOf('h')) //0
// console.log(str.indexOf('l')) //2
// console.log(str.indexOf('z'))  // -1

// let str2 = "widget with id"
// console.log(str2.indexOf('widget')) //0
// console.log(str2.indexOf('with')) //7
// console.log(str2.indexOf('id')) //1


//----------------------------------------------------------------------------------------[includes]------------------------------------------------------------------------------------

// let str2 = "Widget with id"
// console.log(str2.includes('Widget')) // true

//----------------------------------------------------------------------------------------------[Startwith and endswith]----------------------------------------------------------------------------------
// // cheack the string startingwith and endswith i
// let str2 = "Widget with id"
// console.log(str2.startsWith('Wid')) // true
// console.log(str2.endsWith('id')) // true

//-------------------------------------------------------------------------------------------[substring]------------------------------------------------------------------------------------

//1. slice
let str = 'stringify'

// console.log(str.slice(0,5)) // strin
// console.log(str.slice(5)) // gify
// console.log(str.slice(-4 ,-1)) // gify

// substrng
// in substring if the 1st index is grater then the 2nd index.
// it well be interchange them to given the right answer
// console.log(str.substring(6 ,2))  // ring
// console.log(str.substring(-6 ,-2))  // it's not support the negitive index 


//3. sustr

console.log(str.substr(2,4)) //ring
console.log(str.substr(2,5)) //ringi
console.log(str.substr(-4,2))  //gi
//--------------------------------------------------------------------------------------[end of the class]-----------------------------------------------------------------------------------------------------