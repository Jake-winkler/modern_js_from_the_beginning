// setTimeout(changeText, 2000);


const changeText = () => {
    document.querySelector('h1').textContent = 'Hello from callback';
} 

const timerId = setTimeout(changeText, 3000);


document.querySelector('#cancel').addEventListener('click', () => {
    console.log(timerId);
    clearTimeout(timerId);
    console.log('timer cancelled');
});






