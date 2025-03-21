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







