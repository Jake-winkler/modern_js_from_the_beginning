console.log(10 > 20 && 30 > 15);

// the above will be false cause everything in the above needs to evalute to true. 

console.log(10 > 20 || 30 > 15);

// since one is true this will return true. 

// && - will return first false value or the last value. 
let a; 

a = 10 && 20;
a = 10 && 20 && 30 ;
a = 10 && 0 && 30 ;
a = 10 && '' && 0 && 30 ; 

console.log(a);


const posts = []; 

posts.length > 0 && console.log(posts[0]);


// || Will return the first truthy value or the last value. 

let b; 

b = 10 || 20; 
b = 0 || 20; 
b = 0 || null || "";
b = 0 || null || '' || undefined; 
console.log(b);


// ?? Nullish coelesing operator.  Returns the rightside operand when the left is null or undefined. 

let c ; 

c = 10 ?? 20 ; 

c = null ?? 20; 
c = undefined ?? 30; 
c = 0 ?? 20 ; 
c = '' ?? 30;



console.log(c);


// ||= assigned the right side value only if the left is a falsy value 

let e = false; 

if(!e){
    e = 10; 
}

e = e || 10; 

e ||= 10; 

console.log(e);

// &&= assigns the right side value only if the left is a truthy value 

let d = 10; 

if(d){
    d = 20;
}

console.log(d);


// ??= Assigned the right ide value only if the left is null or undefined. 

let f = null; 

if(f ===null || f === undefined){
    f = 30; 
}

f = f ?? 20; 

c ??= 20; 

console.log(f);
