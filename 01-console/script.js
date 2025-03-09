let x; 

const name = 'John';
const age = 30;

x = 'Hello, my naame is' + name + ' and I am ' + age + ' years old';


// template literals: 

x = `Hello, my name is ${name} and I am ${age} years old`;

console.log(x);

const s = 'Hello World';

x = s.length;
console.log(x);

// access value by key 
x = s[0];

x = s.__proto__;

x = s.toUpperCase();
x = s.toLowerCase();

x = s.charAt(0);

x = s.indexOf('d');

x = s.substring(0,4);

x = x.substring (2,5);

console.log(x);

x = '        Hello World';

x = s.trim();
console.log(x);

x = s.replace('World', 'john');

console.log(x);

x = s.includes('Hell');

x = s.valueOf();

console.log(x);

x = s.split('');
console.log(x);

