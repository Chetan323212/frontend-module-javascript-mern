// Rounding Method

let a = 4.4 // round up the value
let b = 4.1
console.log(Math.ceil(b))
console.log(Math.round(a))

let c = 4.4 
console.log(Math.floor(c)) // remove the .desimial value 


// Power and Root method

let d = 25
console.log(Math.sqrt(d)) // finding the square root of 2  

console.log(Math.pow(2,3)) // finding the power of 2 the 3 

console.log(Math.cbrt(27))  // finding the cube root of 27 


// Absolute and sign 

let e = 2

console.log(Math.abs(0)) // do zero if it is zero and convert it in positive value 
console.log(Math.abs(-10)) // convert the negitive value in positive value 

console.log(Math.sign(-5)) // return the -1 value if the provieaded value is negitive 
console.log(Math.sign(5))  // return the 1 value if the provieaded value is positive 
console.log(Math.sign(0))  // return the 0 if the value is 0 


// min and max

console.log(Math.min(22,34,56,78,12,45))  // return the minimum value  --> 12
console.log(Math.max(22,34,56,78,12,45))  // return the maximum value  -- > 78

// Random Number

let num = Math.floor(Math.random()*100)+1
console.log(num)

// 
