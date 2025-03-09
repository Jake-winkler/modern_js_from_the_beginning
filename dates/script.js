let d; 

d = new Date();

console.log(typeof d);

d = d.toString();

// remember date is 0 based so 6 would equate to the 7th month. 
d = new Date(2021, 6, 10, 12, 30, 0); 

console.log(d);

d = new Date('2021-07-10T12:30:00')
console.log(d);

d = new Date('07/10/2021 12:30:00')
console.log(d);

// there is an issue where JS dates will show up as 1 day off. 
// this will give you the exact millisecond in time. 
d = Date.now(); 
console.log(d);


// to get a time stamp of a spceific date 

d = Date.now();

d = new Date()
d = d.getTime();
d = d.valueOf();

d = new Date(1741544037926);

d = Math.floor(Date.now()/1000);


console.log(d);


let x;
let date = new Date();

x = date.toString();
x = date.getTime();
x = date.valueOf();

x = date.getFullYear();
// note get month is zero based so the count will be one less than actual month date. 
x = date.getMonth();

x = date.getDate();
x = date.getDay();
x = date.getHours();
x = date.getMinutes();
x = date.getSeconds();
x = date.getMilliseconds();

x = `${date.getFullYear()} - ${date.getMonth() +1} - ${date.getDate()}`;

x = Intl.DateTimeFormat('en-US').format(date);
x = Intl.DateTimeFormat('en-GB').format(date);
x = Intl.DateTimeFormat('default').format(date);
x = Intl.DateTimeFormat('default', {month: 'long'}).format(date);

x = date.toLocaleDateString('default', {month: 'short'});

//This is a much newer way of doing things when formatting dates: 

x = date.toLocaleDateString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone:'America/Chicago',
});



console.log(x);




