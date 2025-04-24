//This first way is not recommended and could cause a security risk 
// basically adding the listener directly into the HTML.  which is not recommended. 

function onClear () {
    const li = document.querySelectorAll('li');
    li.forEach((li) => {
        li.remove();
    })
}
//javascript event listener

const clearBtn = document.querySelector('#clear');
//doing this it will only run the second item.  
// clearBtn.onclick = function () {
//     alert('Clear Items');
// };
// clearBtn.onclick = function () {
//     console.log('clear Items');
// };

// this is the most modern way using the add event listener method 

// using adding event listener allows both to run. 
// the below wont run at the same time because the first is an alert and its a blocking event. 
// clearBtn.addEventListener('click', () => alert('Clear Items'))
// clearBtn.addEventListener('click', () => console.log('clear item'))

// You can also instead of adding a callback you can define a function else where
// and then add the function in where the callback is. 
//when doing the above though  you dont want to add in the () as  that will cause the function to trigger and execute right away. 

clearBtn.addEventListener('click', onClear);
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// the below will trigger the button click after 5 seconds 
// setTimeout(() => clearBtn.click(), 5000);