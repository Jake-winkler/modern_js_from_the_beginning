const button = document.querySelector('form button');
const div = document.querySelector('form div:nth-child(2)')
const form = document.querySelector('form');

//In this case if you trigger the button event as coded below.  The click even will bubble up 
// this means when the button was clicked it will also trigger the click even for the parent element 
//only when the parents have click events.

button.addEventListener('click', (e) => {
    alert('button was clicked');
    //can be used to stop the triggering of the parent elements when they also have the same event handler. 
    
    e.stopPropagation();
})

div.addEventListener('click', () => {
    alert('div was clicked');
})

form.addEventListener('click', () => {
    alert('form was clicked');
});

document.body.addEventListener('click', () => {
    alert('body was clicked');
});

