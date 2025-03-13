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


