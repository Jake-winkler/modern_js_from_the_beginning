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


// Math opporator: 

let a; 

a = Math.sqrt(9);

console.log(a);

a = Math.abs(-5);
 
console.log(a);

a = Math.round(4.2); 

console.log(a);

// With the ceil method it will always round up no mater the value. 

a = Math.ceil(4.2);

console.log(a);
//
a = Math.floor(4.7); 
console.log(a);

a = Math.pow(2, 3);
console.log(a);

a = Math.min(4,5,1);
console.log(a);

a = Math.max(4, 5, 2);
console.log(a);

a = Math.floor(Math.random() * 10  +  1);

console.log(a);


