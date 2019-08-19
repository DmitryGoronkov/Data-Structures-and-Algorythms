function jumpingOnClouds(c) {
    let array = c.split(" ");
    let i = 0;
    let counter = 0;
    while (i<array.length){
        counter ++;
        if (array[i+2] == "0"){
            i+=2;
            
        } else
            i+=1;
           
    }
    counter --;
    return counter;
}
const c="0 0 1 0 0 1 0";
console.log(jumpingOnClouds(c));