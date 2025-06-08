const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');


const onInput = e => {
     heading.textContent = e.target.value;
}

const onChecked = e => {
    const isChecked = e.target.checked;
    heading.textContent = isChecked ? 'checked' : 'not';
    
}

function onFocus() {
    console.log('input is focused');
    itemInput.style.outlineStyle = 'solid';
    itemInput.style.outlineWidth = '1px';
    itemInput.style.outlineColor = 'red';
}

function onBlur() { 
    console.log('input is not focused');
        itemInput.style.outlineStyle = 'none';

}
//when dealing with input fields its better to use an event of 'input' 
//for text fields keydown would work but not the best method for the above reason. 
//Input will append values as well. Where as a key event wouldn't. 
itemInput.addEventListener('input', onInput);
//for select list you can use change.  Input is recomended. 
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onChecked);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur); 


