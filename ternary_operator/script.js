const age = 19; 

// useing an if statement 

if (age >= 18){
    console.log('You can vote');
} else {
    console.log('You can not vote');
}
// using a ternary operator 

// think of the ? as the IF.  the first part following the ? is what happens
// if the check is true.  anything after : is the else portion and what happens when check is false. 
age >= 18 ? console.log('You can vote') : console.log('You cannot vote');

// assigning a conditional value to a variable. 

const canVote = age >= 18 ? true : false ; 
const canVote2 = age >= 18 ? 'You can Vote' : 'You cannot vote' ; 

console.log(canVote);
console.log(canVote2);

const auth = true; 

// let redirect; 

// if(auth){
//     alert('Welcome to the dashboard'); 
//     redirect = '/dashboard';
// } else {
//     alert('access denied');
//     redirect = '/login'; 
// }; 

// console.log(redirect);

 
// const redirect = auth ? (alert('Welcome to the dashboard'), '/dashboard') : (alert('Access Denied'), '/login'); 

// console.log(redirect);

auth ? console.log('Welcom to the dashboard') : null;

auth && console.log('Welcome to the dashboard');


