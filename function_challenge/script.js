
const fahren = 40;

const getCelcius = temp => Math.floor((temp - 32) * 5/9)



console.log(`The following is the temperature in Fahrenheit ${fahren} and this is the same temp expressed as Celcius ${getCelcius(fahren)} `);

// Challenge 2: 

const numArray = [25,35,55,46,2,141,52,5,19,1,5,84]

const findMinMax = (arr) => ({
     minNum: Math.min(...arr), 
    maxNumb: Math.max(...arr) 
    
})

console.log(findMinMax(numArray));


// Challenge 3: 

(function(length, width){
    console.log(`The length of a rectangle with the length of ${length} and a width of ${width} is ${length * width}!!!`);
})(40,50)

