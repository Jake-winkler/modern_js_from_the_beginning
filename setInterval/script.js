// const intervalID = setInterval(myCallback, 1000);

// function myCallback(){
//     console.log(Date.now());
// }

let invervalID

const startChange =  () => {
    if(!invervalID){
        invervalID = setInterval(changeRandomColor, 1000);
    }
}

// const changeColor =  () => {
//     if(document.body.style.backgroundColor !== 'black'){
//         document.body.style.backgroundColor = 'black'
//         document.body.style.color = 'white'
//     } else {
//         document.body.style.backgroundColor = 'white'
//         document.body.style.color = 'black'
//     }
// }

const changeRandomColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = `#${randomColor}`;
}

function stopChange(){
    clearInterval(invervalID);
}



document.getElementById('start').addEventListener('click', startChange);
document.getElementById('stop').addEventListener('click', stopChange);


