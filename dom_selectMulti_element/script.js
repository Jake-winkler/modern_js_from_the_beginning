//querySelectorAll(); 

//this would be what is used pretty much all the time. 

 const listItems = document.querySelectorAll('.item');

 console.log(listItems[1].innerText);

 //this wont work because this is trying to access style on a node list. 
 //style is meant for a specific element not node list. 
//  listItems.style.color = 'red';

// listItems.forEach((item, index) => {
//     item.style.color = 'red'; 

//     if(index === 1){
//         item.remove();
//     }

//     if(index === 0){
//         item.innerHTML = `Oranges 
//         <button class ="remove-item btn-link text-red">
//             <i class ="fa-solid fa-xmark"></i>
//         </button>`;
//     }
// })

 const listItems2 = document.getElementsByClassName('item');
 console.log(listItems2[2].innerText);

 // you have to convert to an array first using this method as its a collection and not a node list
 const listItemsArray = Array.from(listItems2);

 listItemsArray.forEach((item) => {
    console.log(item.innerText);
 }); 

 // its a collection and not a node list so convert to array 
 
const listItems3 = document.getElementsByTagName('li'); 

console.log(listItems3);


//TLDR you can get by with using queryselector and queryselectorall. 
//other shown options are older methods no longer used but good to know exist. 




