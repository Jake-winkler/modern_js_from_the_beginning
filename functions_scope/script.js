//the below is called declaring a function
function sayHello(){ 
    console.log('Hello world');
}

//the below is called evoking a function
sayHello();

// num1 and num 2 are the parameters. 
function add (num1, num2) {
    console.log(num1 + num2);
}

//the 4 and 2 are called arguments. 
add (4, 2);

function subtract (num1, num2){
    return num1 - num2; 
///the below wont run cause its after the return. When return is seen it exits the function. 
    console.log('test');
};

const result = subtract(10, 2);

console.log(result, subtract(20,5));

//user is in local scope and not visible to rest of program. 
function registerUser(user = 'Bot') {

    // if(!user){
    //     user = 'Bot';
    // }
    return user + ' is registered';
}

console.log(registerUser('John'));
// using the default value "Bot". 
console.log(registerUser());

// Rest Params

function sum(...numbers){
    let total= 0;

    for(const num of numbers){
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3, 5, 6, 7, 78, 8, 89));

//objects as params 

function loginUser(user){
    return `The user ${user.name} with the user id of ${user.id} is logged in`;
}

const user = {
    id: 1, 
    name: 'John'
}; 

console.log(loginUser(user));

console.log({id: 2, name: 'Sara'});

// Arrays as prams: 

//when passing in the ..."rest" operator will turn the passed in argument to an array
function getRandom (...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length); 

    const item = arr[randomIndex];

    console.log(item);

}
getRandom(1,2,3,4,4,2,2,2);

// scope: 
const x = 100;
console.log(window.innerWidth);
console.log(x, 'in global');

function run(){
    console.log(window.innerHeight);
    console.log(x, 'in function');
}

run();

if (true){
    console.log(x, 'in block');
    
}
//this is call variable shadowing
//the x in the scope of the function is overriding the global x 
//x is in the local scope of the function. 
function add(){
    const x = 1
    const y = 50; 
    console.log(y);
}
//if you want to access Y you have to be in the funciton; 
add();



// const a = 100

if (true) {
    const y = 200; 
    console.log(x + y);
}

// console.log(x+y);

for (let i = 0; i <=10; i++){
console.log(i);
}; 


// console.log(i);

if (true){
    const a = 500; 
    let b = 600;
    var c = 700;

}
// you can access var becuase its not block scoped where as let and const are block scoped. 
console.log(c);

// var is fuction scoped though. 

function run (){
    var d = 100; 
    console.log(d);
}

run();

// console.log(d);

const foo = 1; 
var bar = 2; 

// when you create a global object with var it gets added to the window object.  Which most of the time you are not going to want you global varibables on the window object. 

//nested scope: 
// you can access any varibables in the parent scope but you cant do the reverse. 
// meaning the parent function cant access the variables in its child. 
function first() {
    const x = 100; 

    function second() {
        const y = 200; 
        console.log(x + y);
    }

    second();
}

first();

// another example showing that you dont have access to child variables when declared with let and const because of block scope. 
if(true) {
    const x = 100; 

    if(x === 100){
        const y = 200; 
        console.log(x + y);
    }
    // console.log(y);
}



