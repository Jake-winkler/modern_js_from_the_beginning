// 1. during memory phase x gets created and stored as undefined. 
// 6. execution phase places 100 into the x variable. 
let x = 100; 
// 2. during memory phase y gets created and stored as undefined. 
// 7. execution phase places 50 into the y variable. 
let y = 50 
// 3. getSum() Function is allocated memory and stores all code. does not get stored as undefined. 
// 8. Executiopn phase skips over this function initially cause there is nothing to execute. 
function getSum(n1, n2){
    let sum = n1 + n2;
    return sum; 
}
// 4. During memory phase sum1 gets created and stored as undefined. 
//9. execution phase invokes the get sum. 
//10. memory phase of the execution of getSum function stores n1 and n2 as variables and as undefined. 
// 11. memory  store sum as undefined. 
// 12. execution phase of function assignes n1 and n2 equal to 100 and 50. 
// 13. execution calculation is done and puts 150 into the sum variable 
// 14. execution rturn tell the fuction execution context to return 150 to the global execution 150. 
// 15. global ex returned sum is put into the value of sum1
let sum1 = getSum(x, y); 
// 5. during memory phase sum2 gets created and stored as undefined. 
//16. another  execution context is opened for the function again as it was in steps 10 - 15. only different is its with 10 and 5. 
let sum2 = getSum(10, 5); 

