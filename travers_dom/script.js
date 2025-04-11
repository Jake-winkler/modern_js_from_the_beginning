// get child elements from parent 

let output; 
const parent = document.querySelector('.parent');
output = parent.children;
//above give a html collection and give an array like structure: 

output = parent.children[1];

// console.dir(output);

output = parent.children[1].className;
output = parent.children[1].innerText;
output = parent.children[1].nodeName;

parent.children[1].innerText = 'Child two';
parent.children[1].style.color ='red';

parent.firstElementChild.innerText = 'Child One';
parent.lastElementChild.innerText = 'Child Three';


// get parent elements from a child: 

const child = document.querySelector('.child');

output = child.parentElement;

child.parentElement.style.border = '1px solid #ccc';
child.parentElement.style.padding = '10px';

//sibling element: 
const secondItem = document.querySelector('.child:nth-child(2)');
output = secondItem; 
output = secondItem.nextElementSibling;

secondItem.nextElementSibling.style.color = 'green';
secondItem.previousElementSibling.style.color = 'orange';




console.log(output);