function fizzBuzz(){
    let array = new Array(100);
    for (let i = 1; i <= 100; i++){
        if (i%3 == 0 && i%5 != 0){
            array[i]="Fizz";
        } else 
        if (i%5 == 0 && i%3 != 0){
            array[i]="Buzz";
        } else 
        if (i%3 == 0 && i%5 == 0){
            array[i]="FizzBuzz";
        } else {
            array[i]=i;
        }
    }
    return array;

}
console.log(fizzBuzz());