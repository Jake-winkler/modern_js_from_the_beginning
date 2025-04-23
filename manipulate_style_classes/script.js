const text = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const items = document.querySelectorAll('li')

function run(){
    //className
    // console.log(itemList.className);
    // text.className = 'card dark';

    // class list
    console.log(itemList.classList);

    itemList.classList.forEach((c) => console.log(c));

    // text.classList.add('dark');
    // text.classList.remvoe('card');

    // text.classList.toggle('hidden');

    text.classList.replace('card', 'dark');

    //change style

    // itemList.computedStyleMap.lineHight = '3';

    items.forEach((item,index) => {
        item.style.color = 'red';

        if(index === 2) {
            item.style.color = 'blue'
        }
    })

    
}


document.querySelector('button').onclick = run;
