

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







