

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




