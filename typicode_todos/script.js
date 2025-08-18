const apiUrl = 'https://jsonplaceholder.typicode.com/todos'; 

const getTodos = () => {
    fetch(apiUrl + '?_limit=10')
    .then(res => res.json())
    .then((data) => {
        data.forEach(element => {
                addToDoToDOM(element);
        });
    });
};


const addToDoToDOM = (element) => {
            const div = document.createElement('div');
            div.classList.add('todo');
            div.appendChild(document.createTextNode(element.title));
            div.setAttribute('data-id', element.id);

            if(element.completed){
                div.classList.add('done')
            }

            document.getElementById('todo-list').appendChild(div)
}

const createTodo = (e) => {
    e.preventDefault(); 
    
    const newTodo = { 
        title: e.target.firstElementChild.value,
        completed: false 
    }

    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res =>res.json())
    .then(data => addToDoToDOM(data))

};

    const toggleCompleted = (e) => {
        if(e.target.classList.contains('todo')){
        e.target.classList.toggle('done');
        }

        updateTodo(e.target.dataset.id, e.target.classList.contains('done'));
    };

    const updateTodo = (id, completed) => {
        fetch(`${apiUrl}/${id}`, {
            method: 'PUT',
            body: JSON.stringify({completed}),
            headers: {
                'Content-type': 'application/json'
            }
        })
    }

    const deleteTodo = (e) => {
        if(e.target.classList.contains('todo')){
            const id = e.target.dataset.id;
            fetch(`${apiUrl}/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(() => e.target.remove())
        } 
    }

const init = () => {
    document.addEventListener('DOMContentLoaded', getTodos)
    document.querySelector('#todo-form').addEventListener('submit', createTodo)
    document.querySelector('#todo-list').addEventListener('click', toggleCompleted)
    document.querySelector('#todo-list').addEventListener('dblclick', deleteTodo);
}

init();
 