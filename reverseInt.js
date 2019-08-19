function reversed(num){
    
        num1 = num.toString();
        console.log('toString', num);
        num1 = num1.split('');
        console.log('Split', num);
        num1 = num1.reverse();
        console.log('reverse', num);
        num1 = num1.join('');
        console.log('join', num);
        var numR = parseFloat(num1);
        console.log('parseInt', numR);
        // converting to string / converting to array / reversing array / cnverting back to string
    
    // parseFloat converts the string to a float
    return numR * Math.sign(num); // Math.sign multiplies by the sign of original number
}
console.log('Math.sign', reversed(-15000.49));

