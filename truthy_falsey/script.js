// Falsy Values: 
// - false: 
// - 0
// - "" or '' (empty String)
// - null 
// - undefined
// - NaN 

const x = []; 
if(x){
    console.log('This is truthy');
} else{
    console.log('This is Falsy');
}

console.log(Boolean(x));

// truthy and falsy caveats: 

const children = 0; 
// when evaluating the number 0 in the example we had to state NOT UNDEFINED
//because 0 gets treated as false.  that way A zero for this question gets treated correctly. 
if(children !== undefined){
    console.log(`You have ${children} children`);
}else{
    console.log('Please enter number of Children');
}


//checking for empty arrays: 

const posts = [];

//the below is needed to handle the scenario of an empty array 
if(posts.length > 0){
    console.log('List Posts');
} else{
    console.log('No to list Posts');
}

// checking for empty objects: 

const user = {
    name: 'Brad'
};

if (Object.keys(user).length > 0){
    console.log('list user');
}else{
    console.log('No User');
}

// Lose equality (==)
console.log(false === 0);
console.log('' === 0);
console.log(null === undefined);


