const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
};

// the below will onver the obje literal above to json 
//the below is what you would send to a server if you are sending data to a server
//stringify will allow you to store things in local storage. 
const str = JSON.stringify(post);

// Parse JSON; 

const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: 'Post One',
        body: 'This is the body',
    },
    {
        id: 2,
        title: 'Post Two',
        body: 'This is the body',
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);

