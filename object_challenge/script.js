const library = [
    {
        title: 'Wheel of Time Book 1',
        Author: 'Robert Jordan',
        status: {
            own: true, 
            reading: false,
            read: false
        },

    }, 
    {
        title: 'Wheel of Time Book 2',
        Author: 'Robert Jordan',
        status: {
            own: true, 
            reading: false,
            read: false
        },

    }, 
    {
        title: 'Wheel of Time Book 3',
        Author: 'Robert Jordan',
        status: {
            own: true, 
            reading: false,
            read: false
        },

    }
];

console.log(library);


library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

console.log(library);

const {title: firstBook} = library[1];

console.log(firstBook);

const jsonString = JSON.stringify(library[0]);
console.log(jsonString);

const jsonString1 = JSON.stringify(library[1]);
console.log(jsonString1);

const jsonString2 = JSON.stringify(library[2]);
console.log(jsonString2);
