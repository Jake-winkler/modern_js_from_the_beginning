// //Method JAKES ANSWER: 
// let divClass = document.getElementsByClassName('key');


// const keyPress = (e) => {
//     divClass[0].innerHTML = e.key;
//     divClass[1].innerHTML = e.keyCode;
//     divClass[2].innerHTML = e.code;

// }

// window.addEventListener('keypress', keyPress);

//video Method1: 
//video answer creates the HTML dynamically rather than my answer I hard coded it and then just updated the Html 
//their answer is better since they are not hard coding anyting. 


// window.addEventListener('keydown', (e) => {
//     const insert = document.getElementById('insert'); 

//     insert.innerHTML = `
//          <div class="key">
//             ${e.key === ' ' ? 'Space' : e.key}
//             <small>e.key</small>
//         </div>
//         <div class="key">
//             ${e.keyCode}
//             <small>e.keyCode</small>
//         </div>

//         <div class="key">
//             ${e.code}
//             <small>e.code</small>
//         </div>
    
//     `

// })

//method 2 from video: 
//this also dynamically creates the div element and loops through to create the element
//


const showCodes = e => { 
    const insert = document.getElementById('insert'); 
    insert.innerHTML='';

    const keyCodes = {
        'e.key': e.key === ' ' ? 'space' : e.key, 
        'e.keyCode': e.keyCodes, 
        'e.code': e.code
    }

    for(let key in keyCodes) { 
        const div = document.createElement('div'); 
        div.className ='key';
        const small = document.createElement('small');

        const keyText = document.createTextNode(key);
        const valueText = document.createTextNode(keyCodes[key]);

        small.appendChild(keyText);
        div.appendChild(valueText);
        div.appendChild(small); 

        insert.appendChild(div);
        
    }
}

window.addEventListener('keydown', showCodes);