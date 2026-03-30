// let parson1Array = ["sourav" , 20 , "male"]
//  create a objects
// let parson1obj = {
// name: "chetan",
// age: 20,
// gender: "male",
// "likeBirds": true,
// "like Animals": false
// }
//
// console.log(parson1Array[0])

// accessing values in an object.
//method 1
// console.log(parson1obj.name) // chetan
// console.log(parson1obj.age) // 20
// console.log(parson1obj.gender) // male

//method 2
// console.log(parson1obj["name"]) // chetan
// console.log(parson1obj["age"])  // 20
// console.log(parson1obj["gender"]) // male

// let key = "name"
// console.log(parson1obj[key]) // chetan
// console.log(parson1obj.key)  // undefined
// console.log(parson1obj["like Animals"]) // false
// console.log(parson1obj["likeBirds"]) // true

//
//
// let parson1obj = {
// name: "chetan",
// age: 20,
// gender: "male",
// "likeBirds": true,
// "like Animals": false
// }

// update value in an object
// parson1obj.name = "sourav"
// console.log(parson1obj)

// task 1 print the value 8 in points in the below obj
//
// let parson1obj = {
// name: "chetan",
// age : 20,
// points: [1,5,8,10]
// }
// console.log(parson1obj.points[2])  // . method
// console.log(parson1obj["points"][2]) // [] method

//taks 2
// let parson1obj = {
// name: "chetan",
// age : 20,
// points: {
//   first: 100,
//   "2": 50,
//   "3":80
// }
// }
//
// console.log(parson1obj.points["first"])
// console.log(parson1obj["points"]["first"])

//add properties to an obj

// let obj = {}
// obj.name = "sourav"
// obj.age = 20
// obj.gender = "male"

// console.log(obj)

//------------------------------------------------------------------------------------------------
//remove object properties
//
// let obj = {
// name: "chetan",
// age : 20,
// gender: "male",
// key : "value"
// }

// console.log(obj)    //{ name: 'chetan', age: 20, gender: 'male', key: 'value' }
// delete obj.key      // delet the key value
// console.log(obj)    //{ name: 'chetan', age: 20, gender: 'male' }

//---------------------------------------[key execeptions]-----------------------------------------------------
//
// let boj2 = {
// "one" : 1,
// "o n e": 2
// }
//
// console.log(obj2.one)
// console.log(obj2["o n e"])
//

//
// let obj = {
// 1:1,
// 2:2,
// 3:3
// }
//
// console.log(obj["1"]) // 1  // for an int key
// console.log(obj[1]) //1

//---------------------------------------------[in operater]--------------------------------------------------------
// in operateere is use to check the key is present in object or not if persent then return true
// if not then flase
// let obj = {
// name: "chetan",
// age: 20,
// gender: "male",
// key: true,
// key2
// }
//
// console.log("name" in obj) // true
// console.log("num" in obj)  // flase
// console.log("key2" in obj) // error key is not defined

//----------------------------------------------[for in loop]---------------------------------------------------------------
//
// let obj = {
//  name: "chetan",
//  age: 20,
//  gender: "male",
//  key: true,
// }
//
// for(let key in obj){
//    console.log(key)  // this line print the only keys not a valuse of keys
//    console.log(key,obj[key])  // this line print keys and their values
// }
//

//In this task, you will create a JavaScript object called student with a property called name. You will then write a function called getKeys() that accepts an object and returns an array of all its keys.
// let student = {
// name :"John",
// }
//
// function getKay(student){
//
//    return Object.keys(student)
//
// }
//
// console.log(getKay(student))
// 
// let Arr = [1, 2, 3];
// 
// let count = 0;
// let result = [];
// for (let i = 0; i < Arr.length; i++) {
  // count = 0;
// 
  // for (let j = i + 1; j < Arr.length; j++) {
    // if (Arr[j] % Arr[i] == 0) {
      // count++;
    // }
  // }
  // result.push(count);
// }
// console.log(result)













