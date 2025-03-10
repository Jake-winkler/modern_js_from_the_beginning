let x;
const arr = [1, 2, 3, 4, 5];

x = arr.reverse();
arr.unshift(6);
console.log(x);

//[6, 5, 4, 3, 2, 1]

let b;
let c;

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

b = arr2.splice(1, 5);

c = [...arr1, ...b];

console.log(c);


//[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]