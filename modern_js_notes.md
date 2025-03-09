

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









