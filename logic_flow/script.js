// // // If statements 

// // if(true){
// //     console.log('This is true');
// // };

// // if(false){
// //     console.log('This is NOT true');
// // };

// // const x = 10; 
// // const y = 5; 

// // if(x >= y){
// //     console.log(`${x} is greater than or equal to ${y}`);
// // }

// // if (x === y){
// //     console.log(`${x} is equal to  ${y}`);
// // }else{
// //     console.log(`${x} is NOT equal to ${y}`);
// // };

// // if (x !== y){
// //     const z = 20; 
// //     console.log(`${z} is 20`);
// // }; 

// // // possible but not recommended. 

// // // short han if
// // // can do things without the brakets but confusing and hard to read. 
// // if(x >= y) console.log(`${x} is greater than or equal to ${y}`);
// // else console.log('This is true');


// // // if/else if 

// const d = new Date(10, 30, 2022, 13, 0, 0);

// const hour = d.getHours();

// console.log(hour);

// if (hour < 12){
//     console.log('Good Morning');
// }else if(hour < 18){
//     console.log('Good Afternoon');
// }
// else {
//     console.log('Good Night');
// }

// // Nested if

// if (hour < 12){
//     console.log('Good Morning');

//     if(hour === 6){
//         console.log('Wake up');
//     }
// }else if(hour < 18){
//     console.log('Good Afternoon');
// }
// else {
//     console.log('Good Night');

//     if(hour >= 20){
//         console.log('zzzzz');
//     }
// }

// if (hour >= 7 && hour < 15){
//     console.log('It is Work time');
// };

// if(hour === 6 || hour ===20){
//     console.log('brush your teeth');
// }


// Switchs: 


const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hour = d.getHours();
switch (month) {
    case 1: 
        console.log('It is January');
        break;
    case 2: 
        console.log('It is February');
        break;
    case 3: 
        console.log('It is March');
        break;
    defult: 
        console.log('It is not January, February, or Match');
}

switch (true) {
    case hour < 12: 
        console.log('Good Morning');
        break;
    case hour < 18: 
        console.log('Good Afternoon');
        break;
    default: 
        console.log('Good Night');
}