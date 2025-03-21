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