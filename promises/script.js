//to create a promise
const promise = new Promise((resolve,reject) => {
    //do some async task 
    setTimeout(() => {
        console.log('asynct task complete');
        resolve();
    }, 1000)
});

// promise.then(() => {
//     console.log('promise consumed');
// });

const getUser = new Promise((resolve,reject) => {
    setTimeout(() => {
        let error = true; 

        if(!error){
            resolve({name: 'John', age: 30});   
        } else {
            reject('error: something went wrong');
        }

        
    }, 1000);
});

getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('The promise has been resolved or rejected'));  

console.log('hello from global scope.');