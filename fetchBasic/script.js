fetch('./movies.json')
.then(response => response.json())
.then((data) => console.log(data))


//fetching a textFile 
// this is uncommon 
fetch('./test.txt')
.then(response => response.text())
.then((data) => console.log(data))

//usually this is used to fetch from data from an api. 

fetch('https://api.github.com/users/jake-winkler')
.then(response => response.json())
.then((data) => (document.querySelector('h1').textContent = data.login))
