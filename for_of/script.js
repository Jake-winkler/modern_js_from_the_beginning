// const items = ['book', 'table', 'chair', 'kite'];
// const users = [
//     {name: 'Brad'},
//     {name: 'Kate'},
//     {name: 'Steve'}
// ];
// //The below is how you loop through a arrar with a for loop
// // for (let i = 0; i < item.length; i++){
// //     console.log(item[i]);
// // };


// // the below is the newer way of looping through a array using a for Of loop. 

// for(const item of items){
//     console.log(item);
// } 

// for (const user of users){
//     console.log(user.name);
// }

// // Loop over strings

// const str = 'Hello World'; 

// for(const letter of str){
//     console.log(letter);
// }

// //Loop over maps

// const map = new Map();

// map.set('name', 'John')
// map.set('age', 30); 

// for (const [key, value] of map){
//     console.log(key, value);
// }


// For In loop to loop through an object values: 

const colorObj = {
    color1: 'Red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green'
};

for (const key in colorObj){
    console.log(key, colorObj[key]);
}

const colorArr = ['red', 'green', 'blue', 'yellow']; 

for (const key in colorArr){
    console.log(colorArr[key]);
}