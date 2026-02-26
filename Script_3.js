// Arithematic operator

let a = 12
let b = 9
let c = a%b
console.log(c)


let result = 2+3*4-5
console.log(result)

let result1 = 2 + 3 * (4 - 1 ) / 3 + 5        // ==> 10
let result2 = 50 / 2 - 10 * 2 + 5 * 3 / 3     // ==> 10
console.log(result1)
console.log(result2)

let str1 = "hello "
let str2 = "wrold"
let connect = str1 + str2
console.log(connect)

let name = "Chtan"
let age = 20 
console.log("my name is "+ name + " my age is " + age)


console.log( 1 + "1") // 11 well be print 
console.log( "2" + 1 + 1 ) // 211 well be print 
console.log( 6 - "2") // 4 well be print

// converting the strig to Number 

let e = "3"
let f = "4"

console.log(Number(e) + Number(f))  // method one 
console.log(+e + +f) // method two 

a = 4 
b = "abc"
console.log(a - b )

console.log(true + 1)  //  2 
console.log(Number(null)) //0
console.log(Number(undefined)) // NaN
console.log(Number("abc")) //NaN
console.log(Number(" ")) //0

// asignment operator 

a = 1
b = 2
c = 3 -(a =b +1)
console.log(a)  // 3
console.log(c)  // 0

a = 5; 
a = a + 2  // now the a hold 7 
a = a + 5  // now the a hold 12


a += 2
a -= 2
a *= 2 
a /= 2

// increment and decrement operators 

// --> ++,--,

a = 5
// here a++  previous value is returned and then the value is added 
b = a++
console.log(b) // now the 5 well be print 

// here ++a return the value after increment 
b = ++a 
console.log(b) // now the 6 well be print 

c = 0
console.log (2 * ++c)


let total = 700
let discount = 15 
discount = (15*700)/100
console.log(700 - discount)

f = 100
c = (f-32)*5/9
console.log(c)


let sal = 50000
let inc = (15*50000)/100
let dic =  (10 * 50000)/100
console.log(sal+inc-dic)