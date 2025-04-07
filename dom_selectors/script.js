//the following are much more common and practical methods for selecting 
//single elements from page. 

//document.getElementbyId(); 

console.log(document.getElementById('app-title'));
console.log(document.getElementById('app-title').id); 
//class is not a property so this will always return undefined even when there is a class on the element. 
console.log(document.getElementById('app-title').class); 
//There is a className property which will grab the class value. 
console.log(document.getElementById('app-title').className); 
console.log(document.getElementById('app-title').getAttribute('class'));


//set attribute: 
document.getElementById('app-title').title = 'shopping list';
document.getElementById('app-title').setAttribute('class','title');

const title = document.getElementById('app-title');

console.log(title);

// get/change content: 

console.log(title.textContent);

title.textContent = "Hello World";

title.innerText = 'Hello Again';

title.innerHTML = '<strong>Shopping List</strong>'


//change styles: 
//allows for full control of the interface through javascript. 
title.style.color = 'red';
title.style.backgroundColor = 'black';
title.style.borderRadius = '10px';


//document.querySelector();
//this will only select single elements. In this case it will select the first one it finds
console.log(document.querySelector('h1'));
console.log(document.querySelector('#app-title'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('input[type="text"'));
console.log(document.querySelector('li'));
console.log(document.querySelector('li:nth-child(2)'))

const secondItem = document.querySelector('li:nth-child(2)');

secondItem.innerText='Apple Juice';

secondItem.style.color = 'red';


//use these methods on other elements: 
const list = document.querySelector('ul');
console.log(list);

const firstItem = list.querySelector('li');

firstItem.style.color = 'blue'

