// Function declaration 
//this works because of hoisting. 
console.log(addDollarSign(100));

function addDollarSign (value){
    return '$' + value;
}




// function expression: 
// this wont work because of how you declared the function. Hoisting doesn't take place. 
// console.log(addPlusSign(200)); 

const addPlusSign = function (value) {
    return '+' + value; 
}



//Arrow functions: 

// function add (a, b){
//     return a + b;
// }

const add = (a , b) => {
    return a + b
}; 

console.log(add(2,1));

// this is using an implicit return since its not specified it just does it. 
const subtract = (a, b) => a - b; 

console.log(subtract(10, 5));

// can only emmit the parenthesis when you have  single parameter. 
const double =  a => a * 2; 

console.log(double(10));

// return an object: 
//This will be  allow you to have a function that returns a object.  surround the brakets with (). 
const createObj = () => ({
    name: 'Brad'
}); 

const numbers = [1,2,3, 4, 5]; 
// the 2 are the same just different ways to declare the function in the callback. 
numbers.forEach(function(n){
    console.log(n);
});


numbers.forEach(n => console.log(n));


// Immediately invoked funcitons: 

