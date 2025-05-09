const logo = document.querySelector('img');

const onClick = () => console.log('Click Event');
const onDoubleClick = () => {
    if(document.body.style.backgroundColor = 'purple'){
        document.body.style.backgroundColor = 'purple';
        document.body.style.color = 'white';
    }else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';

    }
};

const onRightClick = () => {
    console.log('right click event');
}

const onMouseDown = () => {
    console.log('down mouse event');
}
const onMouseUp = () => {
    console.log('Up Event');
}
const onMouseWheel = () => {
    console.log('wheel');
}
const onMouseOver = () => {
    console.log('over');
}
const onMouseOut = () => {
    console.log('out');
}
const onDragStart  = () => {
    console.log('drag start');
}
const onDragEnd  = () => {
    console.log('drag end');
}


// Event Listener
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDoubleClick);
logo.addEventListener('contextmenu', onRightClick);
logo.addEventListener('mousedown', onMouseDown);
logo.addEventListener('mouseup', onMouseUp);
logo.addEventListener('wheel', onMouseWheel);
logo.addEventListener('mouseover', onMouseOver);
logo.addEventListener('mouseout', onMouseOut);
logo.addEventListener('drag', onDragStart);
logo.addEventListener('dragend', onDragEnd);