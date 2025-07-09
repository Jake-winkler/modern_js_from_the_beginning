// function toggle(e){
//     e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle)


//custom example 
//note just cause you use a call back.  That doesn't mean its always asyncronous. 

const posts = [
    {
        title: 'Post one', body: 'this is the body'
    },
    {
        title: 'Post two', body: 'this is the body'
    }
];

function createPost(post, cb){
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000)
}

 function getPosts(){
    setTimeout(() => {
        posts.forEach(function (post){
            const div = document.createElement('div'); 
            div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
            document.querySelector('#posts').appendChild(div);
        })
    }, 1000);
 }

 createPost({title: 'Post Three', body: 'this is post 3'}, getPosts)
 
