// const c = 70
// console.log(c, "hello", typeof c);
// // a = 0

// var a
// // console.log(a);
// a = 'Tanish'
// console.log(a, typeof a);

// let b = 'ban'
// console.log(b);

// {
//     let a = 77
//     console.log(a);
//     let b = 'asdczxz'
//     console.log(b, typeof b);
// }
// console.log(b);
// console.log(a);

// var d = false
// console.log(d, typeof d);

// var e = null
// console.log(e, typeof e);

console.log("======================================================================");

const a = [1, 2, 3, 4]
let g = [1, 2, 3, 4]
// console.log(f==g);
// console.log(f, g, typeof f);
// f = g;
// f[0] = 70
// console.log(f, g);
// console.log(f==g);





//***************************************************************************************************** */
// let add = (number1 , number2)=>{
//     if (typeof number1 == "number" && typeof number2 == "number"){
//     console.log(number1+number2);
//     }
//     else{
//         console.log("Invalid Input");
//     }
// }

// let sub = (number1,number2)=>{
//     if (typeof number1 == "number" && typeof number2 == "number"){
//         console.log(number1-number2);
//     }
//     else{
//         console.log("Invalid Input");
//     }
// }

// const randomof = (param,number1,number2)=>{
//     param(number1,number2)
// }

// let userin3 = prompt("Addition or Subtract?")
// let userin1 =Number (prompt("Enter num1:"))
// let userin2 =Number (prompt("Enter num2:"))
// console.log(userin1,typeof userin1);
// console.log(userin2,typeof userin2);
// randomof(eval(userin3),userin1,userin2)
// *********************************************************************************************************




var number1 = 9
var number2 = 90
let addition = (number1,number2)=>{
    return number1+number2
}
let subtract=(number1,number2)=>{
    return number1-number2
}
let functionGenrator = (functionName)=>{
    switch(functionName){
        case "add" : return["Adding numbers ",addition]
        case "sub" : return["Subtracting numbers ",subtract]
        default : return ["Invalid",null]
    }
}



// console.log(functionGenrator("add"));
let [m,add] = functionGenrator("add")
console.log(add(number1,number2));
