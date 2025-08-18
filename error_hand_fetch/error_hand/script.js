// fetch('https://tools-httpstatus.pickup-services.com/404')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     // .catch((error) => {
//         console.log(error);
//     })

//Catch only will run on network errors
// fetch('http://hello123.not')
//     .then((response) => {
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// //test with response.ok showing how to check errors.
// fetch('https://tools-httpstatus.pickup-services.com/404')
//     .then((response) => {
//         if(!response.ok){
//             throw new Error('Request Failed');
//         }
//         return response;
//     })
//     .then(() => {
//         console.log('success');
//     })
//     .catch((error) => {
//         console.log(error);
//     });

fetch('https://tools-httpstatus.pickup-services.com/401')
    .then((response) => {
        if(response.status === 404){
            throw new Error('Not found');
        } else if (response.status === 500){
            throw new Error('server error');
        }else if(response.status !== 200){
            throw new Error('request failed');
        }
        return response;
    })
    .then(() => {
        console.log('success');
    })
    .catch((error) => {
        console.log(error);
    }); 

