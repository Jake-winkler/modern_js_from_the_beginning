const itemInput = document.getElementById('item-input');

const onKeyPress = (e) => {
    console.log('keypress');
}
const onKeyUp = (e) => {
    console.log('keyup');
}
const onKeyDown = (e) => {
    console.log('keydown');
}



//Properties to get the key thats pressed. example knowing when enter is clicked

//key
// const onKey = (e) => {
//     console.log(e.key);
//     // document.querySelector('h1').innerText = e.key
//     if(e.key === 'Enter'){
//         alert('You Pressed Enter');
//     }
    
// }

//keyCode
// const onKey = (e) => {
//     console.log(e.key);
//     // document.querySelector('h1').innerText = e.key
//     // if(e.key === 'Enter'){
//     //     alert('You Pressed Enter');
//     // }
//     if(e.keyCode === 13){
//         alert('You pressed enter'); 
//     }
    
// }

//code

const onKey = (e) => {
    // console.log(e.key);
    // // document.querySelector('h1').innerText = e.key
    // if(e.key === 'Enter'){
    //     alert('You Pressed Enter');
    // }

    console.log(e.code) ;

    // the repeat property allows you to check if you are holding down a key
    if(e.repeat){
        console.log('you are holding down ' + e.key);
    }
    //the below will check for each key
    console.log('shift: ' + e.shiftKey);
    console.log('Ctrl: ' + e.ctrlKey);
    console.log('alt: ' + e.altKey); 

    if(e.shiftKey && e.key === 'K'){
        console.log('You hit shift + K');
    }
    
};

// itemInput.addEventListener('keypress', onKeyPress)
// itemInput.addEventListener('keyup', onKeyUp)
//keydown will keep firing when held down.
// itemInput.addEventListener('keydown', onKeyDown)
itemInput.addEventListener('keydown', onKey);

