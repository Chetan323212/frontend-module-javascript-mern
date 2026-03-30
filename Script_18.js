


// 
// let boj = {
    // marks1: 10,
    // marks2: 20,
    // marks3: 30,
    // marks4: 40
// }
// let keys = Object.values(boj)
// sum = 0
// for(let i = 0; i < keys.length; i++ ){
    //  sum = sum + keys[i]
// }
// 
// 
// console.log(sum)



// instert contery :  india inside the given obj
// 
// const data ={
    // address:{
        // City: "pune",
        // pin: 411014
    // }
// }
// 
// data.address.country ="indea"
// 
// console.log(data)


//---------------------------------------------------------------------------------------------------------------------------------------------
// 
// let student = [
    // {id: 1, name: "aman", marks: 82, gender: "male"},
    // {id: 1, name: "sara", marks: 91 , gender: "female"},
    // {id: 1, name: "Rohit", marks: 25 , gender: "male"},
    // {id: 1, name: "Sachin", marks: 100 ,gender: "male" },
    // {id: 1, name: "Shreya", marks: 30, gender: "female"},
    // {id: 1, name: "Astha", marks: 99,gender: "female"}
// ]
// 
// 
//print the name of all student 
// 
// console.log("--------------------[task 1]-----------------------------------------------")
// for(let i = 0; i < student.length; i++){
    // console.log(student[i].name)
// }
// 
// console.log("--------------------[task 2]-----------------------------------------------")
// 
// for(let i = 0; i < student.length; i++){
    // if(student[i].gender == "female"){
        // console.log(student[i].name)
    // }
// }
// 
// 
// console.log("--------------------[task 3]-----------------------------------------------")
// for(let i = 0; i < student.length; i++){
    // if(student[i].marks > 50){
        // console.log(student[i].name)
    // }
// }
// 


//-----------------------------------------------------------------[object destruachering]---------------------------------------------------------------------------

// 
// let user = {
    // name: "prisha",
    // age: 23,
    // city: "pune"
// }
// 
// let name = user.name
// let age = user.age
// 
// 
// let {name, age} = user
// 
// console.log(name)
// console.log(age)


// 
// let product = {
    // title: "Phone",
    // price: 30000
// }
// distuachuring using the name of some other variable
// let {title: producTitle, price: productPrice} = product;
// 
// console.log(producTitle , productPrice);// phone 30000
// 


// 
// let people = [
    // {name: "Alice" , city: "NYC"},
    // {name: "bob" , city: "LA"},
    // {name: "Charlie" , city: "NYC"}
// ]
// 
// let result = {}
// for(let i = 0; i < people.length; i++){
    //    let city = people[i].city;
    //    if(!result[city]){
        // result[city]= []
    //    }
    //    result[city].push(people[i])
    //    
// }
// 
// console.log(result)



// worldCount("hello world hello")

let str = "hello world hello"
let arr = str.split(' ')
let result = {}
function worldCount(str){
    for(let i = 0; i < arr.length; i++){
        let courent= arr[i]
        if(!result[courent]){
            result[courent] = 1
        }
        else{
            result[courent] += 1
        }
        
    }

    console.log(result)
}

worldCount(str)