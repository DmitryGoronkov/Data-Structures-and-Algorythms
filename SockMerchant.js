function sockMerchant(n, ar) {
    let pair = new Array(101); // initializing an array with a length of 100 possible colors
    pair.fill(0); // fill array with 0;
    for (let i = 0; i < n; i++){ // adding socks according to colors
        pair[ar[i]] = pair[ar[i]] + 1;
    }
    
    pair.forEach((element, index) => { // checking how many pairs of each colors
        if (element % 2 == 0 && element != 0) {
            pair[index] = element / 2;
        }
        if (element % 2 == 1 ) {
            pair[index] = Math.floor(element/2);
        }
    })
    
    let sum = pair.reduce((a, b) => { // calculating a sum of pairs
        return a + b;
    })

    return sum;

}
var n = 100;
var ar = [44, 55, 11, 15, 4, 72, 26, 91, 80, 14, 43, 78, 70, 75, 36, 83, 78, 91, 17, 17, 54, 65, 60, 21, 58, 98, 87, 45, 75, 97, 81, 18, 51, 43, 84, 54, 66, 10, 44, 45, 23, 38, 22, 44, 65, 9, 78, 42, 100, 94, 58, 5, 11, 69, 26, 20, 19, 64, 64, 93, 60, 96, 10, 10, 39, 94, 15, 4, 3, 10, 1 ,77, 48, 74, 20, 12, 83, 97, 5, 82, 43, 15, 86, 5, 35, 63, 24, 53, 27, 87, 45, 38, 34, 7, 48, 24, 100, 14, 80, 54]
console.log(sockMerchant(n, ar));