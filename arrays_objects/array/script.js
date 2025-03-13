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

// Nesting and Concat and spread operator: 

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





