// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

// let myFunction = function () {
// console.log("Function was invoked!");
// };

/* 
let myFunction = () => {
    console.log("Function was invoked!");
    }
     */

let myFunction = () => console.log("Function was invoked!");

myFunction();



// let anotherFunction = function (param) {
//   return param;
// };

/* let anotherFunction = (param) => {
    param;
    }
 */
let anotherFunction = (param) => console.log(param);

anotherFunction("Example");

// let add = function (param1, param2) {
//   return param1 + param2;
// };

/* 
let add = (param1, param2) => {
    console.log(param1 + param2);
    }
 */

let add = (param1, param2) => console.log(param1 + param2);

add(1,2);

// let subtract = function (param1, param2) {
//   return param1 - param2;
// };
// subtract(1,2);

/* let subtract = (param1, param2) => {
    console.log(param1 - param2);
    }
 */

let subtract = (param1, param2) => console.log(param1 - param2);

subtract(1,2);


// Stretch

exampleArray = [1,2,3,4];
// const triple = exampleArray.map(function (num) {
//   return num * 3;
// });

/* let triple = (num) => {
        return num * 3;
    }
 */

 /* There is some explanation missing here for me to fully understand what the requirements are. Is handling arrays required? */
let triple = (arry) => {
    tripleArry = [];
    for (let i = 0; i < arry.length; i++) {
    tripleArry.push(arry[i] * 3);
    }
    return tripleArry;   
}

console.log(triple(exampleArray));