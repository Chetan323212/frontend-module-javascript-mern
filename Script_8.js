

/***************************(do while loop)*********************************************************/

// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i<5)

/**********************************(For loop)********************************************************/

// for ( let i = 0; i<3 ; i++){
//     console.log(i)
// }

// let i = 0 
// for(; i<3;i++){
//     console.log(i)
// }

/*************************************(Break)********************************************************/

// for(let i =0; i<10 ; i++){
//     console.log(i)
//     if(i==5){
//         break
//     }
// }



/******************************************(Continue)**************************************************/

// for(let i =0; i<10 ; i++){
   
//     if(i==5){
//         continue
//     }
//      console.log(i)
// }


//Q1 you are given a number n find the number of digits in thet number
let n = 572
//let count =0
// while (n > 0) {
//     n = Math.floor(n / 10);
//     count++;
// }

// // Q2 find the given n find the sum of its digits

// let sum = 0
// while(n>0){
//     let reminder =  n%10
//     n = n - reminder
//     n = n/10
//     sum += reminder
// }
// console.log(sum)


//Q3 print the 2 table

// n = 2
// for(let i = 1;i<=10;i++){
//     console.log(n + " x "+  i + " = " + n*i)
// }

// for(let i = 0; i<5;){
//     console.log(i++)
// }
// console.log("__________________")
// for(let j = 0; j<5;){
//     console.log(++j)
// }


//Q4 find the fist number that is divisible by 7 and 5 using for loop
// the number is between 1 and 500
let count =0
for(let i = 1;i<=500;i++){
    if(i%7==0  && i%5==0){
        console.log(i)
        count++
    }

    if(count == 2){
        break 
    }
    
}