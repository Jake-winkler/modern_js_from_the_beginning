

- javascript is core technology of the web
- interpeted meaning the code is executed line by line 
- it does not get compiled to machine language 


### What is JS used for: 
- DOM Manipulation
- Event Handling
    - mouse clicks
    - drags
    - hovers
    - keyboard clicks
- Asynchronous Requests
    - requests that can happen behind the sciens 
- Animations and Effects
    - Fading
    - rotatting 
- data manipulation
    - sorting
    - filter
    - aggregate data






## Starting with Console

There is all kinds of things you can do with the console.  Most of the time you are just going to be using it to log out values or help in debugging an issue. 

You can always go and use the console and then type ``` console ``` that will show you the console object.  Thas has tons of different methods that you can use. Methods are just functions that can be executed. 

Majority of the time you'll use ``` console.log ```.  


## comments in Javascript and shortcuts: 

// this is a single line of comment. 

/* followed by */ is multiline comment 

use the cmd + shift + J


# Variables:  

- Ways to declare a variable: 

Var
let
const

Prior to 2016 var was the only way with es6 let and const were introduced. 

- Thing to keep in mind is that const will be constant and never be able to be updated.  
- Let and Var opperate very similar in nature. 

- You can use const to initialize arrays.  You can then edit the array but you cannot directly change it from array to primitive for example. 

- The same goes for objects you can update the object but cant change it from an object to anything.  

-  generally use const unless you know you are going to directly re-assign the variable. 

you can also do things like the following when declaring variables. 

``` let a,b,c ```
The above will initialize 3 variables with just one let 

``` const d = 10, e = 11, f = 12 ```

The above will initialize variables for const but you still have to initialize a const. 


Primitive vs Reference data type: 

Primitive data is stored in the location called the stack which is where its accessed from 

Reference data: is stored in the area of the  Heap. 
    - Important to know is that when you initialize a object or variable the variable name is stored in the stack and the actual object or array is stored in heap.  
        - which means that if you have 2 different variables referencing the same item in the heap then if you update one to a different name you will also affect the value of the other.  
        
```
let name = "John" 
let age = 30; 
let person = {
name = "Brad", 
age = 30 
};
let newName = name 
newName = 'Johnathan'
let newPerson = person 
newPerson.name = 'Bradley';
```
In this case above line 94 would log out the object for person. But then on line 95 we are updating the object to have a name of "Bradley".  So that means we are updating both the person variable reference and the newPerson variable reference.  The reason for this is because the the object itself that is getting updated is stored in heap and is referenced by both person and newPerson.  




### converting string to number
- why would you ever want to do this?  
    - this can be done when someone is submitting a form and it gets submitted as a string then you can convert it and do other processing on it once you convert it to a number. 

``` 
let amount = '100';

console.log(amount, typeof amount);

amount = parseInt(amount);
console.log(amount, typeof amount);

amount = +amount

console.log(amount, typeof amount);

amount = Number(amount);

console.log(amount, typeof amount);

```


Change a number to a string: 
- maybe you are needing to do form validation or something. 

```
amoun2 = amoun2.toString();
```


- The main thing to keep in mind is that you can always take any primitive value and then convert it to any other type of data.  If you are given a number and you need a string you can convert.  If you are given a string form of a number you can convert to number.  Careful when converting to number as there are scenarios where you can bet NaN. 

- NaN = Not a Number. This is a special type of number as when you call typeOf on it, it still logs out Number.  There are like 5 different ways to get this. 

### Operators: 
- Arithatic operators 

```
x = 5 + 5; 
x = 5 - 5; 
x = 5 * 5; 
x = 5/5;
x = 5 % 5 ;

//concatenation: 
x = 'hello'  = 'world';

console.log(x);

// exponent 

x = 2 ** 3; 

// increment
 
x = 1; 
x = x +1
x ++ 

x 3; 
x = x -2; 
x--;

// Assigment operators; 

x = 10; 
x +=5; 
x -= 5; 
x *= 5; 
x /= 5;
x %= 5; 
x **= 5;

// comparison Operators: 

x = 2 == 2;
x = 2 === 2;
x = 2 != 3
x = 2 !== 3; 
x = 10 > 5;
x = 10 < 5; 
x = 10 >= 5;
x = 10 <= 12; 

```

### Type Coercion: 

```

let a; 

a = 5 + '5';

console.log(a, typeof a);

// logs: 55 string
```
The above is an example of type Coercion where JS on its own converts something to a string.  This happened because there is a mix over numbers and strings in the expression. 

Type coercion is simply where JS tries it harded to make sense out of what is going on.  There for there are times where it will change the type to make things work. 


### working with strings: 


### Working with Numbers: 
- In general there are tons of methods that can be called when working with numbers.  Below are the examples that were gone over in the video. 


```
let x;

const num = new Number(5); 

x = num.toString(); 

// the below doesn't work cause you can't call .length on a number
x = num.length;
//shows you how to get the length of a number.  
x = num.toString().length;
console.log(x);

//below limits decimal places to 2 places
x = num.toFixed(2);
console.log(x);

// limits the digits so in this case output is 5.0 
x = num.toPrecision(2);
console.log(x);
// convers your number given to exponential form. 
x = num.toExponential(2);
console.log(x);

// converts the number string to the language local needed. 
x = num.toLocaleString('en-US')
console.log(x);

// give the value of x 
x = num.valueOf();
console.log(x);

// gives you the max number possible in the Number object
x = Number.MAX_VALUE; 
console.log(x);
// give the smallest number possible in the Number object. 
x = Number.MIN_VALUE;
console.log(x);

```

### Math operator: 

 there is all kinds of operators that can be used along with the Math object.  One of the commone ones would be using floor and random to generate random whole numbers.  You just need to multiple the random by a number to get a random number between 1 and the number given. 

### Date: 
- there is all kinds of manipulations that can be done with the Date object.  Below are examples of using this. 

```
let d; 

d = new Date();

console.log(typeof d);

d = d.toString();

// remember date is 0 based so 6 would equate to the 7th month. 
d = new Date(2021, 6, 10, 12, 30, 0); 

console.log(d);

d = new Date('2021-07-10T12:30:00')
console.log(d);

d = new Date('07/10/2021 12:30:00')
console.log(d);

// there is an issue where JS dates will show up as 1 day off. 
// this will give you the exact millisecond in time. 
d = Date.now(); 
console.log(d);


// to get a time stamp of a spceific date 

d = Date.now();

d = new Date()
d = d.getTime();
d = d.valueOf();

d = new Date(1741544037926);

d = Math.floor(Date.now()/1000);


console.log(d);
```

You can also use all kinds of things to format and get dates.  Remember in js it usually shows up as milliseconds so you have to convert.  Also a lot of items are 0 based so may look like a neumerical instance off.  

```javascript
d = Date.now();

d = new Date()
d = d.getTime();
d = d.valueOf();

d = new Date(1741544037926);

d = Math.floor(Date.now()/1000);


console.log(d);


let x;
let date = new Date();

x = date.toString();
x = date.getTime();
x = date.valueOf();

x = date.getFullYear();
// note get month is zero based so the count will be one less than actual month date. 
x = date.getMonth();

x = date.getDate();
x = date.getDay();
x = date.getHours();
x = date.getMinutes();
x = date.getSeconds();
x = date.getMilliseconds();

x = `${date.getFullYear()} - ${date.getMonth() +1} - ${date.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(date);
x = Intl.DateTimeFormat('en-GB').format(date);
x = Intl.DateTimeFormat('default').format(date);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(date);

x = date.toLocaleDateString('default', {month: 'short'});

//This is a much newer way of doing things when formatting dates: 

x = date.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone:'America/Chicago',
});



console.log(x);
```

## Section 2: 
### Arrays and Objects

#### Array's: 
- they are special type of objects and a data structure in Javascrip that stores multiple values. 

```javascript
const arr = [345, 345,322,234];
```

The main thing to keep in mind with arrays are they are zero based.  So the first item in the array will start with 0 and go up from there.  

Here is a bunch of examples: 

```javascript
let x;
// array literal
const numbers = [12, 45, 33, 29, 39]; 

console.log(numbers);
// array constructor

const fruits = new Array ('apple', 'grape', 'orange');
console.log(fruits);


x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favorite fruit is an ${fruits[2]}`;

x = numbers.length; 

fruits [2] = 'pear'

fruits[3] ='strawberries';

fruits[fruits.length] = 'blueberry';
fruits[fruits.length] = 'peach';

x = fruits;

console.log(x);


// mixed 

const mixed = ['string', 123, true];
```

### Array Methods: 

There are hundreds of examples of built in methods that can be added on to arrays.  The key is that they are there to make your life easier.  You are just going to have to do research to find the right one you are looking for.  
- Also keep in mind that you can chain methods together and add them onto arrays. 

```javascript
// Array Methods: 

let b; 

const arr = [34, 55, 23, 56, 13, 95];

// arr.push(100);

// arr.pop(); 

// arr.unshift(99);

// arr.shift();

// arr.reverse();

b = arr.includes(95);

// if you pass something in that is not in the array it will return -1
b = arr.indexOf(56);

b = arr.slice(1, 4);

// b = arr.splice(1, 4);

// b = arr.splice(3, 1);

// example showing you can chain on additional methods. 
b = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(arr);

console.log(b);

```

### Nesting, Concatenation, and Spread Operator: 

- Nesting: 
    - This is just meaning that you have an array within an array.  So an array as an index of another array. 

- concatenating - adding the items from one array into another arary to make 1 larger array. 

- the spread operator is simply ...

```javascript
let c;

const treeFruit = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry']; 

// treeFruit.push(berries);

// c= treeFruit[3][1];

const allFruits = [treeFruit, berries];

c = allFruits[1][0];

c = fruits.concat(berries);

// spread Operator (...)

c = [...fruits, ...berries];

// flatten arrays

const nestArr = [1, 2, [3, 4], 5, [6, 7], 8];

c = nestArr.flat();

// static methods on array object: 

c = Array.isArray(treeFruit)

c = Array.from('12345');

const a = 1;
const d= 2;
const e = 3;

c = Array.of(a,d,e)

console.log(c);
```

### Object Literal: 

- These are just key value pairs.  
- You can also nest objects inside of objects. 
- You can also nest arrays inside of object.  You can also nest objects inside of arrays. 
- you can add methods to objects.  These are simply just functions that live inside an object that can be called and refereced elsewhere throughout the project.  
```javascript
let x;

const person = {
    name: 'John Doe',
    age: 30, 
    isAdmin: true,
    address: {
        street: '123 Main St',
        city: 'Boston',
        state: 'MA'
    },
    hobbies: ['music', 'sports']
};

x = person.name;

x = person['age'];

x = person.address.state;
x = person.hobbies[0];

person.name = 'Jane Doe';

x = person;

person.isAdmin = false; 

delete person.age;

x=person

person.hasChildren = true;

person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
};

x = person.greet();
console.log(x);

```

#### Spread Operator and Methods that can  be used on objects.

- This allows you to have 2 different objects and have a 3rd object and include the properties of the other 2 objects. The Key point is it takes the properties not the entire object. 

```javascript
// 
const todo = {};
todo.id = 1;
x = todo;

console.log(x);

// the above is the same as what is shown below.  Just 2 different ways to contruct an object

const todoTwo = new Object();

todoTwo.id = 1; 
todo.name = 'Buy Milk';
todo.completed = false;

console.log(todoTwo);


const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232
        }
    }
}

x = person.address.coords.lat;
console.log(x);

const obj1 = {
    a: 1,
    b:2
};

const obj2 = {
    c:3, 
    d:4
};
// example of the spread operator. 
const obj3 = {...obj1, obj2};

x = obj3;
console.log(x);

//When you create an object this way and then pass in objects for example it will take just those properties from the passed in objects. 
//meaning it wont be a nested object.  
const obj4 = Object.assign({}, obj1, obj2);

// in JS its very common to be workinig with arrays of objects. 
const todos = [{id: 1, name: 'buy milk'},
    {id: 2, name: 'Pickup kids from school'},
    {id: 3, name: 'Take out trash'},
    {id: 4, name: 'pay bills'}
];

x = todos[0].name;

x = Object.keys(todo);

// the below will allow you log out the Keys of an object inside of an array. 
x = Object.keys(todo);
//this will allow you to get the length of the object. 
// you cant call .length on the object directly so you have to do funny stuff
//to get the length of the object. 
x= Object.keys(todo).length;
// this will log out the values of the object and not the Keys. 
x = Object.values(todo);
// this will log out an array of arrays containing the key value pairs. 
x = Object.entries(todo);
//This will log a boolean that checks if there is a property matching term passed in. 
x = todo.hasOwnProperty('name');

console.log(x);
```

### Destructuring and Naming: 

- this is the ability to take values in an array or object and easily access the values within. 

```javascript
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

// const person = {
//     firstName: firstName, 
//     lastName: lastName,
//     age: 30
// }; 

// the above can be formatted like the below
//as long as the keys match the variable names this works. 
// you wont have to write out the key value pairs. 
const person = {
    firstName, 
    lastName,
    age
};

console.log(person.age);

// Destructuring: 

const todo = {
    id: 1, 
    title: 'Take out trash', 
    user: {
        name: 'John'
    },
}; 

const {id: todoId, 
    title, 
    user: {name},} = todo;

console.log(todoId);

// showing destructuring Arrays. 
const number = [ 23, 67, 33, 49, 52]

const [first, second, ...rest] = number;

console.log(first, second, rest);
```

## JSON

- Javascript Object Notation

- lightway way to send and recieve data. 

- the most common things you will use when it comes to JSON is stringify and parse. 
    - stringify turnes a js object into json
    - parse task json and parses it into a JS object that can be used in the program 

```javascript
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// the below will conver the obje literal above to json 
//the below is what you would send to a server if you are sending data to a server
//stringify will allow you to store things in local storage. 
const str = JSON.stringify(post);

// Parse JSON; 

const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);

```

example JSON file

```json
[
    {
        "id": "1", 
        "title": "Take out trash"
    }
]
```

## Functions: 

- a function is a way to have a specific block of code that can perform a certain task and then be referenced throughout the project. 

- you can pass in simple data types as arguments to functions but you can also pass in arrays and objects.  Youcan also set default behavior for when a function gets called but an argument is not given. 

```javascript
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
```

### scope: 

- global scope: everything is accessible anywhere in the project. 

- Function scope is where you have declared a variable inside of a function.  That vaiable is only going to be acessible inside the function.  But the function will also have access to the global variables. 


- Block Scope: 
    - This is the theory where your variables such as const and let will only be accessible within the {} they are declared in.  
    - Var is different in that it is not block scoped so if you delcare a var in a for loop or if statement its still globally accessible.  
        - Key difference here though is with var if  its declared in a function then its not a global as its function scoped.  Pre es6 this was how variables worked in JS but they added let and const later to follow same princibles as other languages where they are block scoped. 

- Nested Scope: 
    - this is the principle that if you have nested items the child item's variables will have access to the parents variables but the partents will not have access to the child variables. 

```javascript
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
```

Declaration vs Expression.  Also showing arrow runctions. 
- basically when you declare a function declaritively with the function key word it gets picked up when the interpreters first sees the program.  Allowing you to have say a console.log of the return from the function before the function is actually declared in the programe and it work and net error out.  Allows you to if you want declare all the functions at the end of the program.  Not really recommended though.  

- with expression functions.  you declare the function inside of a variable declaration.  There for you cant use the function until after you have actually declared it.  

### Immediately Invoked Function Expression: 

- this allows you to create a function and then immediately invoke the function. 

- this avoids global scope pollution. 

This is commonly used where if you pull in javascript from another developer and it is using a variable name you also wanted to use.  You can create an iffe in your script with the same variable name and not have issues since your variable is in the scope of your IFFE. 

 ```javascript
 
(function(){
    const user = 'Jon';
console.log(user); 
const hello = () => console.log('Hello from the IIFE');
hello();
})();

(function (name){
console.log('Hello ' + name)})('Shawn'); 



```

### Execution Context: 

- special environment that is created by the javascript engine thats in the browser. or if nodeJS the v8engine. 
- when the progame starts the initial creating is the global execution context that is created for the span of the program.  Aids in the execution of the code. 
- everytime  you invoke a function that will have its own execution context that last the span of the function. 

- JS is a single thread of language. 
- code is executed line by line 
- also is syncronus. 

2 phases: 
- Memory creation phase 
    - does not execute the code 
    - creates the global object
        - browser this is called window. 
    - creates the this object and binds it to the global object. 
    - setup memory heap for variables and functions. 
    - set the value to all values of variables to undifined. 
- execution phase
    - Execute code line by line
    - create a new execution context for each function call 

## the call stack 

- a stack is a datastructure 
    - operates in last in first out. LIFO
- Call stack is a manager of execution context. 

### If statements
- allows you to put code inside of a if block that is not going to run until a specific criteria is met. controls the flow of the program. 

```javascript
// If statements 

if(true){
    console.log('This is true');
};

if(false){
    console.log('This is NOT true');
};

const x = 10; 
const y = 5; 

if(x >= y){
    console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y){
    console.log(`${x} is equal to  ${y}`);
}else{
    console.log(`${x} is NOT equal to ${y}`);
};

if (x !== y){
    const z = 20; 
    console.log(`${z} is 20`);
}; 

// possible but not recommended. 

// short han if
// can do things without the brakets but confusing and hard to read. 
if(x >= y) console.log(`${x} is greater than or equal to ${y}`);
else console.log('This is true');

```

- if/else if 
    - allows you to string multiple things together. 

```javascript
// // if/else if 

const d = new Date(10, 30, 2022, 13, 0, 0);

const hour = d.getHours();

console.log(hour);

if (hour < 12){
    console.log('Good Morning');
}else if(hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');
}

// Nested if

if (hour < 12){
    console.log('Good Morning');

    if(hour === 6){
        console.log('Wake up');
    }
}else if(hour < 18){
    console.log('Good Afternoon');
}
else {
    console.log('Good Night');

    if(hour >= 20){
        console.log('zzzzz');
    }
}

if (hour >= 7 && hour < 15){
    console.log('It is Work time');
};

if(hour === 6 || hour ===20){
    console.log('brush your teeth');
}

```

- Switch: quicker way than long if/else if statements.  Keeps things flowing better.  But must have break and default in them. 

``` Javascript
const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();
switch (month) {
    case 1: 
        console.log('It is January');
        break;
    case 2: 
        console.log('It is February');
        break;
    case 3: 
        console.log('It is March');
        break;
    defult: 
        console.log('It is not January, February, or Match');
}

switch (true) {
    case hour < 12: 
        console.log('Good Morning');
        break;
    case hour < 18: 
        console.log('Good Afternoon');
        break;
    default: 
        console.log('Good Night');
}
```

## Truthy and Falsey: 

- If you pass something into an if statement then that variable will get coerced into a boolean value.  

The following are 6 falsy values: 
- Falsy Values: 
    - false: 
    - 0
    - "" or '' (empty String)
    - null 
    - undefined
    - NaN 

- Anything else that isn't the above will evaluate to truthy. 

Examples of truthy values: 
- true
- '0' in a string
- ' ' space in a string 
- 'false' in a string 
- [] empty array
- {} empty object
- function () {} Empty function 

```javascript
// Falsy Values: 
// - false: 
// - 0
// - "" or '' (empty String)
// - null 
// - undefined
// - NaN 

const x = []; 
if(x){
    console.log('This is truthy');
} else{
    console.log('This is Falsy');
}

console.log(Boolean(x));

// truthy and falsy caveats: 

const children = 0; 
// when evaluating the number 0 in the example we had to state NOT UNDEFINED
//because 0 gets treated as false.  that way A zero for this question gets treated correctly. 
if(children !== undefined){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of Children');
}


//checking for empty arrays: 

const posts = [];

//the below is needed to handle the scenario of an empty array 
if(posts.length > 0){
    console.log('List Posts');
} else{
    console.log('No to list Posts');
}

// checking for empty objects: 

const user = {
    name: 'Brad'
};

if (Object.keys(user).length > 0){
    console.log('list user');
}else{
    console.log('No User');
}

// Lose equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);

```

## Logical Operators: 

used when writing if statments to help control flow. think of it as || and && and ??. 

```javascript
console.log(10 > 20 && 30 > 15);

// the above will be false cause everything in the above needs to evalute to true. 

console.log(10 > 20 || 30 > 15);

// since one is true this will return true. 

// && - will return first false value or the last value. 
let a; 

a = 10 && 20;
a = 10 && 20 && 30 ;
a = 10 && 0 && 30 ;
a = 10 && '' && 0 && 30 ; 

console.log(a);


const posts = []; 

posts.length > 0 && console.log(posts[0]);


// || Will return the first truthy value or the last value. 

let b; 

b = 10 || 20; 
b = 0 || 20; 
b = 0 || null || "";
b = 0 || null || '' || undefined; 
console.log(b);


// ?? Nullish coelesing operator.  Returns the rightside operand when the left is null or undefined. 

let c ; 

c = 10 ?? 20 ; 

c = null ?? 20; 
c = undefined ?? 30; 
c = 0 ?? 20 ; 
c = '' ?? 30;



console.log(c);
```

### Logical Assignment operators: 
- see examples below.  Not currently sure how I would use the below.  but good to know it exists. 

```javascript 
// ||= assigned the right side value only if the left is a falsy value 

let e = false; 

if(!e){
    e = 10; 
}

e = e || 10; 

e ||= 10; 

console.log(e);

// &&= assigns the right side value only if the left is a truthy value 

let d = 10; 

if(d){
    d = 20;
}

console.log(d);


// ??= Assigned the right ide value only if the left is null or undefined. 

let f = null; 

if(f ===null || f === undefined){
    f = 30; 
}

f = f ?? 20; 

c ??= 20; 

console.log(f);

```


## Ternary Operator: 
- shorter way of writing a conditional 

examples below. 

```javascript
const age = 19; 

// useing an if statement 

if (age >= 18){
    console.log('You can vote');
} else {
    console.log('You can not vote');
}
// using a ternary operator 

// think of the ? as the IF.  the first part following the ? is what happens
// if the check is true.  anything after : is the else portion and what happens when check is false. 
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// assigning a conditional value to a variable. 

const canVote = age >= 18 ? true : false ; 
const canVote2 = age >= 18 ? 'You can Vote' : 'You cannot vote' ; 

console.log(canVote);
console.log(canVote2);

const auth = true; 

// let redirect; 

// if(auth){
//     alert('Welcome to the dashboard'); 
//     redirect = '/dashboard';
// } else {
//     alert('access denied');
//     redirect = '/login'; 
// }; 

// console.log(redirect);

 
// const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login'); 

// console.log(redirect);

auth ? console.log('Welcom to the dashboard') : null;

auth && console.log('Welcome to the dashboard');

```

## For Loops. 

- what is a loop: 
    - a control structure that allows you to continue doing a certain task until a certain condition is met. 

example syntax: 
```javascript
for([initialExpression]; [conditionExpression]; [incrementExpression]){
};

```

```javascript

// for(let i = 0; i <= 10; i++){
//     if(i === 7){
//         console.log('7 is my lucky number');
//     }else {
//         console.log('Number ' + i);
//     }
// };

// // nested loops

// for(let i = 1; i <=10; i++){
//     console.log('Number ' + i);

//     for (let j = 1; j <= 10; j++){
//         console.log(`${i} * ${j}`);
//     }
// }

// Loop through an Array: 

const names = ['Brad', 'Sam', 'sara', 'john', 'tim'];

for(let i = 0; i < names.length; i++){
    if(names[i] === 'sara'){
        console.log(`${names[i]} is the best`);
    }else {
        console.log(names[i]);
    }
};

```

## break and continue: 
break will stop the entire loop from finishing out once a condition is met. 

continue just skips part of the loop if a condition is met then continues on. 

```javascript
// // break

// for( let i = 0; i <= 20; i++){
//     if(i ===15){
//         console.log('breaking...');
//         break;
//     }
//     console.log(i);
// };


//continue

for(let i = 0; i <= 20; i++){
    if(i === 13){
        console.log('skipping 13...');
        continue;
    }
    
    console.log(i);
}
```

## While and Do While Loops: 

use a while loop when the number of time the loop will run is unknown.  

Use a for loop when you know the number of times the loop will run. 

- when using do while loops keep in mind that the block of code will always run at least once. 

```javascript
let i = 0; 

// // while(i <=20){
// //     console.log('Number ' + i);
// //     i++;
// // }

// // the above is  a syntax of a while loop. 

// // loop over arrays: 

// // const arr = [10, 20, 30, 40];

// // while (i < arr.length){
// //     console.log(arr[1]);
// //     i++;
// // }

// // nesting while loops. 

// while (i<= 5){
//     console.log('Number ' + i);

//     let j = 1
//     while(j <=5){
//         console.log(`${i} * ${j} = ${i * j}`);
//         j++
//     }
//     i++
// }


// do while the block of code will always run at least once. 


do {
    console.log('Number ' + i);
    i++
}while(i <=20);
```

## For Of Loops: 

- This is a much clearner way of looping through a interatable item. Such as array and maps. 

```javascript
const items = ['book', 'table', 'chair', 'kite'];
const users = [
    {name: 'Brad'},
    {name: 'Kate'},
    {name: 'Steve'}
];
//The below is how you loop through a arrar with a for loop
// for (let i = 0; i < item.length; i++){
//     console.log(item[i]);
// };


// the below is the newer way of looping through a array using a for Of loop. 

for(const item of items){
    console.log(item);
} 

for (const user of users){
    console.log(user.name);
}

// Loop over strings

const str = 'Hello World'; 

for(const letter of str){
    console.log(letter);
}

//Loop over maps

const map = new Map();

map.set('name', 'John')
map.set('age', 30); 

for (const [key, value] of map){
    console.log(key, value);
}
```
## For In Loops: 

```javascript
const colorObj = {
    color1: 'Red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
};

for (const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow']; 

for (const key in colorArr){
    console.log(colorArr[key]);
}
```

## Array methods: 

- high order array methods: 
    - they all work in similar fashion in that they take in a function. 
        - this is called a callback function. 

you can chain multiple methods together it doesn't have to be just .map. 


## Document Object Model: 

- programming interface for web/html elements
- structure that we can interact with via javascript
- includes tags, attributes text nodes, etc.
- Represented as a tree structure. 

- The DOM is represented as a tree structure: 

 - you can access the window in the code 
 

```javascript
console.log(window.document); 

/// will log out the html file with the document element. 

console.dir(window.document); 
// will show with methods within document.


console.log(document.body) 


console.log(document.links[0]);

// document.body.innerHTML = '<h1>Hello World';

// console.log(document.body);

console.log(document.getElementById('main'));

const main = document.getElementById('main');
// main.innerHTML = '<h1>Hello from main';

document.querySelector('#main h1').innerText = 'hello';

```

- the Dom is what contains all the HTML or sctructure from the webpage.  This can be dynamically updated and changed in javascript. 
    - can be done by using selectors to get to the element wanted  and then update or change by using innerText 
- can also add dynamically additional elements. 



## Document Element Properties: 

The following are examples of using document properties. 

```javascript
let output;
//the below is depricated and not recommended to use good to know though
//this will give you an array of all the different parts of the html page.
output=document.all;
//this will give you the 10th item in the array. 
output = document.all[10];

output = document.documentElement; 

output = document.head;
output = document.body; 
output = document.head.children;
output = document.body.children;

output = document.doctype; 
output= document.domain;
output = document.URL;
output = document.characterSet; 
output = document.contentType;

output = document.forms;

output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;


//this is setting the new ID in javascript
// document.forms[0].id = 'new-id';
//bland initially cause the html didn't have links.  Next I manually added the link to the page. 
// output = document.links; 
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href =  'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;

//this doesn't work out the box cause initially this is just an HTML collection
//you would need to convert to an array to beable to use array methods
// document.forms.forEach((form) => console.log(form));

const forms = Array.from(document.forms);

forms.forEach((form) => console.log(form));



console.log(output);
```
## DOM Selectors: 

```javascript
//the following are much more common and practical methods for selecting 
//single elements from page. 

//document.getElementbyId(); 

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id); 
//class is not a property so this will always return undefined even when there is a class on the element. 
console.log(document.getElementById('app-title').class); 
//There is a className property which will grab the class value. 
console.log(document.getElementById('app-title').className); 
console.log(document.getElementById('app-title').getAttribute('class'));


//set attribute: 
document.getElementById('app-title').title = 'shopping list';
document.getElementById('app-title').setAttribute('class','title');

const title = document.getElementById('app-title');

console.log(title);

// get/change content: 

console.log(title.textContent);

title.textContent = "Hello World";

title.innerText = 'Hello Again';

title.innerHTML = '<strong>Shopping List</strong>'


//change styles: 
//allows for full control of the interface through javascript. 
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.borderRadius = '10px';


//document.querySelector();
//this will only select single elements. In this case it will select the first one it finds
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"'));
console.log(document.querySelector('li'));
console.log(document.querySelector('li:nth-child(2)'))

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText='Apple Juice';

secondItem.style.color = 'red';


//use these methods on other elements: 
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');

firstItem.style.color = 'blue'

```

## query selectors Multi selectors: 
```javascript
//querySelectorAll(); 

//this would be what is used pretty much all the time. 

 const listItems = document.querySelectorAll('.item');

 console.log(listItems[1].innerText);

 //this wont work because this is trying to access style on a node list. 
 //style is meant for a specific element not node list. 
//  listItems.style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red'; 

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerHTML = `Oranges 
//         <button class ="remove-item btn-link text-red">
//             <i class ="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// })

 const listItems2 = document.getElementsByClassName('item');
 console.log(listItems2[2].innerText);

 // you have to convert to an array first using this method as its a collection and not a node list
 const listItemsArray = Array.from(listItems2);

 listItemsArray.forEach((item) => {
    console.log(item.innerText);
 }); 

 // its a collection and not a node list so convert to array 
 
const listItems3 = document.getElementsByTagName('li'); 

console.log(listItems3);


//TLDR you can get by with using queryselector and queryselectorall. 
//other shown options are older methods no longer used but good to know exist. 

```

 ## Transversing the DOM element node: 

- basically know the releationship of parent to child and what sibling elements are. 

```javascript
// get child elements from parent 

let output; 
const parent = document.querySelector('.parent');
output = parent.children;
//above give a html collection and give an array like structure: 

output = parent.children[1];

// console.dir(output);

output = parent.children[1].className;
output = parent.children[1].innerText;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child two';
parent.children[1].style.color ='red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';


// get parent elements from a child: 

const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//sibling element: 
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem; 
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';




console.log(output);
```
the above are examples of selecting singular elements from the dom and the items related to it. 


## Traversing the DOM: 

- everything in the dom is a node.  

## DOM Node types: 

- Element 
- Attr
- text
- CDATASection
- EntityReference
- Entity
- ProcessingInstruction
- Comment
- Dcoument
- DocumentType
- DocumentFragement
- Notation

```javascript
let output;
const parent = document.querySelector('.parent'); 

output = parent.childNodes;
output = parent.childNodes[0].textContent;
output = parent.childNodes[0].nodeName;
output = parent.childNodes[3];
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerText = 'Child One';
output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;
output = parent.lastChild;
output = parent.lastChild.textContent = 'Hello';


//parent nodes: 

const child = document.querySelector('.child');

output = child.parentNode;
output = child.parentElement;

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '10px';

const secondItem = document.querySelector('.child:nth-child(2)');

output = secondItem.nextSibling;
output = secondItem.previousSibling;

console.log(output);
```

##  create and append element: 

```javascript
const div = document.createElement('div');

div.className = 'my-element';

 div.id = 'my-element';

div.setAttribute('title', 'My Element');

// innerText typically meant to update and change the text of something already existing: 
// div.innerText = 'Hello World';

const text = document.createTextNode('Hello World');

div.appendChild(text);

// document.body.appendChild(div);
document.querySelector('ul').appendChild(div);

```


## innerHTML vs createElement: 

```javascript

//quick and dirty: 

function createListItem(item){
    const li = document.createElement('li');
    li.innerHTML = `${item}
     <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
        </button>`;

    document.querySelector('.items').appendChild(li);
}

createListItem('Eggs');

//cleaner and more performant: 

function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    Const = button = document.createElement('button');
    button.className = 'remove-item btn-link text-red';

    const icon = document.createElement('i');
    icon.className = 'fa-solid fa-xmark';

    button.appendChild(icon);

    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

}

createNewItem('cheese');
```


```javascript
function createNewItem(item) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(item));

    const button = createButton('remove-item btn-link text-red')
    li.appendChild(button);

    document.querySelector('.items').appendChild(li);

}

function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;

    const icon = createIcon('fa-solid fa-xmark');
    button.appendChild(icon);
    return button
}
function createIcon(classes) {
    const icon = document.createElement('i');
    icon.className = classes;
    return icon;
}
createNewItem('cheese');
createNewItem('sauce');
```
the above is refractoring of the clearner method to create an element. 



## insert examples: 

```javascript
//insertAdjacentElement for if your inserting a new custom element 
function insertElement () {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');

    h1.textContent = 'insertAdjacentElement'; 

    filter.insertAdjacentElement('beforebegin', h1);
}

//insertAdjacentText for if you are inserting text 

function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML if you are inserting adjacent HTML. 

function insertHTML(){
    const clearBtn = document.querySelector('#clear');
//works like innerHTML
    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentH2</h2>')
}

//insertBeforeElement

function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'insertBefore';

    const thirdItem = document.querySelector('li:nth-child(3)'); 


    ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
insertHTML();
insertBeforeItem();
/*
<!-- beforebegin --->
<p>
    <!--afterbegin-->
    foo
    <!-- beforeend -->
</p>
<!-- afterend-->
*/

```

## The below is examples of replacing element: 

```javascript 
function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');

    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();


function replaceSecondItem (){
    const secondItem = document.querySelector('li:nth-Child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceSecondItem();


function replaceAllItems() {
    const lis = document.querySelectorAll('li'); 

    lis.forEach((item, index) => {
        // The below allow you to target a list of items to update all of them  
        // item.outerHTML = '<li>Replace All</li>';

//  this below shows how to target a specific item the long way. 
    // if(index === 1){
    //     item.innerHTML = 'Second Item'; 
    // }else {
    //     item.innerHTML = 'Replace All';

    // }

    // short hand and cleaner using a ternary operator
    (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>item</li>')
    })
}

replaceAllItems();


function replaceChildHeading () {
    const header = document.querySelector('header'); 
    const h1 = document.querySelector('header h1'); 

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping list'; 
    header.replaceChild(h2, h1);


}

replaceChildHeading();


```

## Removing elements:

```javascript

//remove 

function removeClearButton () {
    const clearBtn = document.querySelector('#clear');

    clearBtn.remove();
}

removeClearButton();


// remove a child

function removeFrstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// removeFrstItem();

function removeItem(itemNumber) {
// this was Jakes answer 
    //  const li = document.querySelectorAll('li');
     
    //  li[itemNumber].remove();

    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

removeItem();

function removeItem3(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}; 

removeItem3(1)
```

## Manipulating Styles and Classes: 

```javascript
const text = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const items = document.querySelectorAll('li')

function run(){
    //className
    // console.log(itemList.className);
    // text.className = 'card dark';

    // class list
    console.log(itemList.classList);

    itemList.classList.forEach((c) => console.log(c));

    // text.classList.add('dark');
    // text.classList.remvoe('card');

    // text.classList.toggle('hidden');

    text.classList.replace('card', 'dark');

    //change style

    // itemList.computedStyleMap.lineHight = '3';

    items.forEach((item,index) => {
        item.style.color = 'red';

        if(index === 2) {
            item.style.color = 'blue'
        }
    })

    
}


document.querySelector('button').onclick = run;
```

## Events 
- Actions that the user takes to make things happen on the webpage. 

## Event listeners: 
- These are actions that occur in your system that your code can listen for and react to.  This makes your pages dynamic. 

ex: 
- keyboard
- webpage load
- clicking 
- mouse down
- dragging
- resizing

- just about anything is an event. 


## mouse events: 
```javascript

const logo = document.querySelector('img');

const onClick = () => console.log('Click Event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor = 'purple'){
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    }
};

const onRightClick = () => {
    console.log('right click event');
}

const onMouseDown = () => {
    console.log('down mouse event');
}
const onMouseUp = () => {
    console.log('Up Event');
}
const onMouseWheel = () => {
    console.log('wheel');
}
const onMouseOver = () => {
    console.log('over');
}
const onMouseOut = () => {
    console.log('out');
}
const onDragStart  = () => {
    console.log('drag start');
}
const onDragEnd  = () => {
    console.log('drag end');
}


// Event Listener
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('drag', onDragStart);
logo.addEventListener('dragend', onDragEnd);
```

## Event Objects and Prevent Default: 

```javascript
const logo = document.querySelector('img');

// logo.addEventListener('click', function (e) {
//     console.log(e);
// });

//target  - the element that triggered the event. 

// logo.addEventListener('click', function (e) {
//     console.log(e.target);
//     // e.target.style.backgroundColor = 'black';
// });

//currentTarget - the element that the event listenter is attached to. 
// Note: currenTarget and Target are the same in this case
// logo.addEventListener('click', function (e) {
//     console.log(e.currentTarget);
     
// });

// document.body.addEventListener('click', function (e){
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

//type = The type of event that was triggered


// logo.addEventListener('click', function (e) {
//     console.log(e.type);
// });

//timestamp -  the time that the event was triggered 
// logo.addEventListener('click', function (e) {
//     console.log(e.timeStamp);
// });

// clientX - the X position of the mouse click reletive to the window

// logo.addEventListener('click', function (e) {
//     console.log(e.clientX);
// });
// clientY - the Y position of the mouse click reletive to the window

// logo.addEventListener('click', function (e) {
//     console.log(e.clientY);
// });
// offsetX - the X position of the mouse click reletive to the element
// logo.addEventListener('click', function (e) {
//     console.log(e.offsetX);
// });

// offsetY - the Y position of the mouse click reletive to the 
// logo.addEventListener('click', function (e) {
//     console.log(e.offsetY);
// });

//pageX - the x position of the mouse click reletive to the page
logo.addEventListener('click', function (e) {
    console.log(e.pageX);
});

//pagey - the y position of the mouse click reletive to the page
logo.addEventListener('click', function (e) {
    console.log(e.pageY);
});

//screenx - the x position of the mouse click reletive to the screen
logo.addEventListener('click', function (e) {
    console.log(e.screenX);
});

//screeny - the y position of the mouse click reletive to the screen

logo.addEventListener('click', function (e) {
    console.log(e.screenY);
});

//Example of how to prevent default actions on event listeners: 

document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault(); 
    console.log('link was clicked');
})

function onDrag(e){
    document.querySelector('h1').textContent = `X${e.clientX} Y ${e.clientY}`;
}
logo.addEventListener('drag', onDrag)
```


 ## Keyboard events

```javascript
const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
}
const onKeyUp = (e) => {
    console.log('keyup');
}
const onKeyDown = (e) => {
    console.log('keydown');
}



//Properties to get the key thats pressed. example knowing when enter is clicked

//key
// const onKey = (e) => {
//     console.log(e.key);
//     // document.querySelector('h1').innerText = e.key
//     if(e.key === 'Enter'){
//         alert('You Pressed Enter');
//     }
    
// }

//keyCode
// const onKey = (e) => {
//     console.log(e.key);
//     // document.querySelector('h1').innerText = e.key
//     // if(e.key === 'Enter'){
//     //     alert('You Pressed Enter');
//     // }
//     if(e.keyCode === 13){
//         alert('You pressed enter'); 
//     }
    
// }

//code

const onKey = (e) => {
    // console.log(e.key);
    // // document.querySelector('h1').innerText = e.key
    // if(e.key === 'Enter'){
    //     alert('You Pressed Enter');
    // }

    console.log(e.code) ;

    // the repeat property allows you to check if you are holding down a key
    if(e.repeat){
        console.log('you are holding down ' + e.key);
    }
    //the below will check for each key
    console.log('shift: ' + e.shiftKey);
    console.log('Ctrl: ' + e.ctrlKey);
    console.log('alt: ' + e.altKey); 

    if(e.shiftKey && e.key === 'K'){
        console.log('You hit shift + K');
    }
    
};

// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
//keydown will keep firing when held down.
// itemInput.addEventListener('keydown', onKeyDown)
itemInput.addEventListener('keydown', onKey);

```

## KeyCode Mini Project: 

The thing to keep in mind with my answer is its not wrong.  However not the best methof for answering this project because of the following reasons: 
- I still hard coded the HTML needed 
- Did not dynmaically create the html element needed 
- not the most performant way (assumption). 

Of the 2 methods they gave below, the second is their preferred method as it uses an object and then dynamically creates the html using create element and createtextnode elements.  Then it appends everything together to get displayed on the screen. 


 ```javascript
 // //Method JAKES ANSWER: 
// let divClass = document.getElementsByClassName('key');


// const keyPress = (e) => {
//     divClass[0].innerHTML = e.key;
//     divClass[1].innerHTML = e.keyCode;
//     divClass[2].innerHTML = e.code;

// }

// window.addEventListener('keypress', keyPress);

//video Method1: 
//video answer creates the HTML dynamically rather than my answer I hard coded it and then just updated the Html 
//their answer is better since they are not hard coding anyting. 


// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert'); 

//     insert.innerHTML = `
//          <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>
//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
    
//     `

// })

//method 2 from video: 
//this also dynamically creates the div element and loops through to create the element
//


const showCodes = e => { 
    const insert = document.getElementById('insert'); 
    insert.innerHTML='';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'space' : e.key, 
        'e.keyCode': e.keyCodes, 
        'e.code': e.code
    }

    for(let key in keyCodes) { 
        const div = document.createElement('div'); 
        div.className ='key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small); 

        insert.appendChild(div);
        
    }
}

window.addEventListener('keydown', showCodes);
```


 

