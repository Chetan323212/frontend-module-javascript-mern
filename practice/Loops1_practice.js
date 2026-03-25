// 1. Print Numbers
// for(let i = 1; i<=10;i++){
//     console.log(i)
// }


//---------------------------------------------------------------------------

//2. Even Numbers
//Print all even numbers from 1 to 50.

// for(let i = 1; i < 50; i++){
//     if(i%2==0){
//         console.log(i)
//     }

// }

//------------------------------------------------------------------------------

//Sum of N Numbers
// Take a number n and print the sum from 1 to n.
// 👉 Example: n = 5 → Output = 15

// let sum = 0;
// let n = 5
// for(let i = 1; i <= n ; i++){
//     sum +=i
// }
// console.log(sum)

//--------------------------------------------------------------------------------


//4. Multiplication Table
// Print the multiplication table of a number n.
// // 👉 Example: n = 3
// let n = 3
// for(let i = 1 ; i <=10 ; i++){
//     console.log(`${n} X ${n} = ${i*n}`)
// }

//---------------------------------------------------------------------------------
// 5. Factorial
// Find the factorial of a number using loop.

// let n = 5
// let res = 1
// for(let i = 1; i <= n ; i++){
//     res *= i
// }
// console.log(res)

//----------------------------------------------------------------------------------

// 6. Reverse a Number
// Reverse a number using loop.
// 👉 Example: 1234 → 4321

let num = 1234;
let rev = 0;
while(num >0){
    let digit = num%10;
    rev = rev*10+digit;
    num = Math.floor(num/10)
}
console.log(rev)
