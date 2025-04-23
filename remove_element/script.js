//remove 

function removeClearButton () {
    const clearBtn = document.querySelector('#clear');

    clearBtn.remove();
}

removeClearButton();


// remove a child

function removeFrstItem(){
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');

    ul.removeChild(li);
}

// removeFrstItem();

function removeItem(itemNumber) {
// this was Jakes answer 
    //  const li = document.querySelectorAll('li');
     
    //  li[itemNumber].remove();

    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

removeItem();

// function removeItem3(itemNumber){
//     const li = document.querySelectorAll('li');
//     li[itemNumber - 1].remove();
// }; 

// removeItem3(1)