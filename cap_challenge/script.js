const mystring = 'developer';

let newString = mystring.slice(1,mystring.length);

newString = 'D' + newString;


console.log(newString);
// console.log(mystring);


// solution from video; 

const videoString = 'developer';

let myNewStringVideo; 

// solution 1 

myNewStringVideo = videoString.charAt(0).toUpperCase() + videoString.slice(1, videoString.length);
console.log(myNewStringVideo);

//solution 2
myNewStringVideo = videoString[0].toUpperCase() + videoString.slice(1, videoString.length);
console.log(myNewStringVideo);

//solution 3
myNewStringVideo =  `${videoString[0].toUpperCase()}${videoString.slice(1,videoString.length)}`;
console.log(myNewStringVideo);
