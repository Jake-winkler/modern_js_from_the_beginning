function replaceFirstItem() {
    const firstItem = document.querySelector('li:first-child');

    const li = document.createElement('li');

    li.textContent = 'Replaced First';

    firstItem.replaceWith(li);
}

replaceFirstItem();


function replaceSecondItem (){
    const secondItem = document.querySelector('li:nth-Child(2)');

    secondItem.outerHTML = '<li>Replaced Second</li>';
}

replaceSecondItem();


function replaceAllItems() {
    const lis = document.querySelectorAll('li'); 

    lis.forEach((item, index) => {
        // The below allow you to target a list of items to update all of them  
        // item.outerHTML = '<li>Replace All</li>';

//  this below shows how to target a specific item the long way. 
    // if(index === 1){
    //     item.innerHTML = 'Second Item'; 
    // }else {
    //     item.innerHTML = 'Replace All';

    // }

    // short hand and cleaner using a ternary operator
    (item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>item</li>')
    })
}

replaceAllItems();


function replaceChildHeading () {
    const header = document.querySelector('header'); 
    const h1 = document.querySelector('header h1'); 

    const h2 = document.createElement('h2');
    h2.id = 'app-title';
    h2.textContent = 'Shopping list'; 
    header.replaceChild(h2, h1);


}

replaceChildHeading();


