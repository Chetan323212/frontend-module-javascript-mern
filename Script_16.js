// find Aski value













//-----------------------------------------------------[replace]---------------------------------------------------------------------------------------------
// 
// let massage = "javascript  is fun javascript"
// 
// console.log(massage.replace("javascript", "JS"));

//this will replace all the javascript with js 
// console.log(massage.replaceAll("javascript", "JS")) 

// you are given the below input convert it into a normal sentance

// let input = "hi.I.am.sourav.,.nice.to.meet.you"

// console.log(input.replaceAll("." , " "))

//--------------------------------------------------------------[split()]----------------------------------------------------------------------------------------------
// 
// let input = "hi.I.am.sourav.,.nice.to.meet.you"
// 
// console.log(input.split('')) // all element/ caharectes in array
// 
// console.log(input.split('.')) // all element in array / gives the word in the array
// 
//------------------------------------------------------------------[join()]--------------------------------------------------------------------------------------------------
// let input = "Hello chetan. how are you."
// let result = input.split(' ')
// console.log(result)

// console.log(result.join('-')) // Hello-chetan.-how-are-you.
// console.log(result.join(' ')) // Hello chetan. how are you.


// task create a acronym generator
// eg. input = "national aeronautics space administraction"
// 
// let str = "national aeronautics space administraction"
// function acronym(string){
//    let words = str.split(' ')
//    let result = "" 
    // for(let i = 0; i < result.length; i++){
        // let word = words[i] // so the words can store the values in word as a single value
        // let capitalLatter = word[0].toUpperCase();
        // result = result + capitalLatter
    // }
// 
    // return result
    // 
// }
// console.log(acronym(str))
// 
//----------------------------------------------------------[trim()]----------------------------------------------------------------
// 
// let name = " sourav "
//-- remove space from the start and end of the string
// console.log(name)
// 
// console.log(name.trimEnd()); //  sourav
// console.log(name.trimStart())//saurav
// console.log(name.trim());// saurav 

//--------------------------------------------------------------[padding]-----------------------------------------------------------------------

// used for masking values
// syntex str.padStart(lengrth of tha string, char you want to mask)
// this will msk at begining of the str
// let code = "56"
// console.log(code.padStart(10, "*"));
// console.log(code.padEnd(10,"*"))

//-------------------------------------------------------------------------------------------------------------------------------------------------


// task 1: print the reverse of a string 
// input -> hello
// 
// let input = "hello"
// function rev(input){
    // let reve = input.split('');
    // reve.reverse();
    // console.log(reve.join(''))
    // 
// }
// 
// rev(input)
// 
// 
// let user = "hello chetan"
// function rev1(user){
    // let reve = user.split(' ')
    // for(let i = 0; i < reve.length; i++){
        // 
    // }
// }

//------------------------------------------------------------------------------------------------------------

// task2 : for a given count the number of vowels
// input = asdesdisd

// let input = "asdesdisd"
// function vowels(input){
    // let vol = input.split('')
    // let count =0
    // for(let i = 0; i < vol.length; i++){
        // if(vol[i] == ){
            // count++
        // }
    // }
    // console.log(count)
// }

// vowels(input)


// task 3;
// 
// 
// let input = "SOS"
// function palindrome(input){
    // let arr = input.split('').reverse().join("")
    // if(input == arr){
        // return "palindrome"
    // }
    // else{
        // return "Not Palindrome"
    // }
//    
// }
// 
// 
// console.log(palindrome(input))
//  task 4 input "asd ASDASD wqeqweq"

let input = "asd ASDASD wqeqweq"
function upper(){
    let arr = input.split()
    for(let i = 0; i < arr.length; i++){
        let word = arr[i]
        console.log(word[0].toUpperCase())
    }
}

upper(input)