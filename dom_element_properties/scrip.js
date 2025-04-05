let output;
//the below is depricated and not recommended to use good to know though
//this will give you an array of all the different parts of the html page.
output=document.all;
//this will give you the 10th item in the array. 
output = document.all[10];

output = document.documentElement; 

output = document.head;
output = document.body; 
output = document.head.children;
output = document.body.children;

output = document.doctype; 
output= document.domain;
output = document.URL;
output = document.characterSet; 
output = document.contentType;

output = document.forms;

output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;


//this is setting the new ID in javascript
// document.forms[0].id = 'new-id';
//bland initially cause the html didn't have links.  Next I manually added the link to the page. 
// output = document.links; 
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href =  'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

output = document.images;
output = document.images[0];
output = document.images[0].src;

//this doesn't work out the box cause initially this is just an HTML collection
//you would need to convert to an array to beable to use array methods
// document.forms.forEach((form) => console.log(form));

const forms = Array.from(document.forms);

forms.forEach((form) => console.log(form));



console.log(output);
