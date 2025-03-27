//High Order Array methods: 

const socials = ['Twitter', 'LinkedIn', 'FaceBook', 'Instagram'];

// console.log(socials.__proto__);

// socials.forEach(function(item){
//     console.log(item);
// }); 

socials.forEach((item)=>{
    console.log(item);
}); 

const socialObjs = [
    {name: 'Twitter', url: 'https://twitter.com'},
    {name: 'facebook', url: 'https://facebook.com'},
    {name: 'linkedin', url: 'https://linkedin.com'},
    {name: 'instagram', url: 'https://instagram.com'}
];

socialObjs.forEach((item) => {console.log(item.url);})


