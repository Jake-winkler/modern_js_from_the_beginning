const promise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'John', age: 20});
    }, 1000);
});


// promise.then((data) => console.log(data))

async function getPromise () {
    const response = await promise;

    console.log(response);
};

// getPromise();

async function getUsers () {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    console.log(data);
}

//this is the same as above but more text the above easier. 
// async function getUsers () {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) = res.json())
//     .then((data) => console.log(data))

// }  

const getPosts = async  () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    console.log(data);
}
getUsers();
getPosts();
