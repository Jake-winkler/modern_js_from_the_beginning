const logo = document.querySelector('img');

// logo.addEventListener('click', function (e) {
//     console.log(e);
// });

//target  - the element that triggered the event. 

// logo.addEventListener('click', function (e) {
//     console.log(e.target);
//     // e.target.style.backgroundColor = 'black';
// });

//currentTarget - the element that the event listenter is attached to. 
// Note: currenTarget and Target are the same in this case
// logo.addEventListener('click', function (e) {
//     console.log(e.currentTarget);
     
// });

// document.body.addEventListener('click', function (e){
//     console.log(e.target);
//     console.log(e.currentTarget);
// })

//type = The type of event that was triggered


// logo.addEventListener('click', function (e) {
//     console.log(e.type);
// });

//timestamp -  the time that the event was triggered 
// logo.addEventListener('click', function (e) {
//     console.log(e.timeStamp);
// });

// clientX - the X position of the mouse click reletive to the window

// logo.addEventListener('click', function (e) {
//     console.log(e.clientX);
// });
// clientY - the Y position of the mouse click reletive to the window

// logo.addEventListener('click', function (e) {
//     console.log(e.clientY);
// });
// offsetX - the X position of the mouse click reletive to the element
// logo.addEventListener('click', function (e) {
//     console.log(e.offsetX);
// });

// offsetY - the Y position of the mouse click reletive to the 
// logo.addEventListener('click', function (e) {
//     console.log(e.offsetY);
// });

//pageX - the x position of the mouse click reletive to the page
logo.addEventListener('click', function (e) {
    console.log(e.pageX);
});

//pagey - the y position of the mouse click reletive to the page
logo.addEventListener('click', function (e) {
    console.log(e.pageY);
});

//screenx - the x position of the mouse click reletive to the screen
logo.addEventListener('click', function (e) {
    console.log(e.screenX);
});

//screeny - the y position of the mouse click reletive to the screen

logo.addEventListener('click', function (e) {
    console.log(e.screenY);
});

//Example of how to prevent default actions on event listeners: 

document.querySelector('a').addEventListener('click', function(e) {
    e.preventDefault(); 
    console.log('link was clicked');
})

function onDrag(e){
    document.querySelector('h1').textContent = `X${e.clientX} Y ${e.clientY}`;
}
logo.addEventListener('drag', onDrag)