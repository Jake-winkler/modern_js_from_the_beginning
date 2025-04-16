//insertAdjacentElement for if your inserting a new custom element 
function insertElement () {
    const filter = document.querySelector('.filter');

    const h1 = document.createElement('h1');

    h1.textContent = 'insertAdjacentElement'; 

    filter.insertAdjacentElement('beforebegin', h1);
}

//insertAdjacentText for if you are inserting text 

function insertText() {
    const item = document.querySelector('li:first-child');

    item.insertAdjacentText('afterend', 'insertAdjacentText');
}

// insertAdjacentHTML if you are inserting adjacent HTML. 

function insertHTML(){
    const clearBtn = document.querySelector('#clear');
//works like innerHTML
    clearBtn.insertAdjacentHTML('beforebegin', '<h2>insertAdjacentH2</h2>')
}

//insertBeforeElement

function insertBeforeItem(){
    const ul = document.querySelector('ul');

    const li = document.createElement('li');
    li.textContent = 'inserBefore';

    const thirdItem = document.querySelector('li:nth-child(3)'); 


    ul.insertBefore(li, thirdItem);
}

insertElement();
insertText();
// insertHTML();
// insertBeforeItem();
/*
<!-- beforebegin --->
<p>
    <!--afterbegin-->
    foo
    <!-- beforeend -->
</p>
<!-- afterend-->
*/

