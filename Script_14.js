// -------const --------------------------------------------
// let  variable are reassignable or updatable 
// let name = "chetan";
// neme = "raju";
// console.log(name);


//---------const ---------------------------------------------------------
// You can not reassign or update a const variable.
// const naem  = "chetan";
// //neme = "raju";
// console.log(name);

// Use capital latter when you are using const values that needs to be used in multiple places.
// const PI = Math.PI;
// const Black = Black


//-------------------------------------------------------[Scope]---------------------------------------------------------------------------------
// let hello = "hello"  // global variable
// {
//     let hello = "hello world "; // block variable or local variable
//     console.log(hello);
// }

// console.log(hello);

//eg 1.
// let hello = "hello world"  // global variable
// { 
//     console.log(hello)  // get access
// }


// //eg 2.
// {
//     let hello = "hello chetna" // block variable
// }

// console.log(hello) // cannot get access



// // eg 3 
// let username1 = "Alice"
// function updatename1(){
//     username1 = "bob"
// }
// updatename1()
// console.log(username1) // bob
//-----------------------------------------------------------------------------------------------

// // eg 4
// let username = "Alice"
// function updatename(){
//     let username = "bob"
//     console.log(username)// bob
// }
// updatename()
// console.log(username) // Alice

// eg 5
// let i 
// for(i = 0; i < 10; i++){
//         // block of code
// }
// console.log(i);


// cannot access a befour initialization

// console.log(a);
// let a = 5;   // error

// need to write this way for let 
// let b = 5;
// console.log(b);  // 5


// console.log(c)  // undefined
// var c = 5;

// hoisting: when the code is getting executed the declaraction of the variable
// is taken to the  top of its scops 



// {
//         console.log(a)
//         var a = 10;
// }

// the above will look like the below one after hoisting

//{
// var a;
// console.log(a)
// a = 5
//}

//-------------------------------------------------------------------------------------------------------------
// function can be called before its declaration 
// when function are hoisted the whole function is taken to the top its scop
// greet()
// function greet(){
//         console.log("Hello")
// }

// function expreession 

// greet2()  // error
// let greet2 = function(){
//         console.log("hello2");
// }



// //greet2()  // error
// var  greet2 = function(){  // well give error whith var,let , const
//         console.log("hello2");
//         //return;
// }
// greet2() 

// console.log(greet2()) // type of variable well be print

// Temporeal dead zone:- it is the period in js whwer a let or const variable exeists in its scope but cannot be acessed until declaration is reached;

// {
//         console.log(x) //ref error (TDZ active)
//         let x = 10; // TDZ eds here
//         console.log(x) //10
// }

//-----------------------------------------------------------------[var scope]-----------------------------------------------------------------------------------

// var is global scope
// {
//         {
//                 var a = 5;
//         }
// }
// console.log(a); // 5

//eg 2

// for(var i = 0; i<10; i++){}
// console.log(i)  // 10


// // if var is inside a function it well become function scoped 
// function fun(){
//         var a = 5;
// }
// fun();
// console.log(a)

// var variables can be redecleared

var a = 5;
var a = 6;
console.log(a) // 6