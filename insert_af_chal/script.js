const insertAfter = (newEl, existingEL) => {
    existingEL.parentElement.insertBefore(newEl, existingEL.nextSibling);
}

// New element to insert
const li = document.createElement('li');
li.textContent = 'Insert Me After!';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// Our custom function
insertAfter(li, firstItem);