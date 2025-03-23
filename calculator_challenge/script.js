
const calculator = (num1, num2, operator) => {
    switch (true){
        case operator === '+':
        return num1 + num2;
        break;
        case operator ==='-':
        return num1 - num2;
        break;
        case operator === '*':
        return num1 * num2;
        break;
        case operator ==='/':
        return num1/num2;
        break;
        default: 
        return 'Must use one of the following operators +, -, *, or /';
    }
};

console.log(calculator(2,5,'+')); 
