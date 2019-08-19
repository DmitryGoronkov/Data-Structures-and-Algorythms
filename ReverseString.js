function reverseString(str){
    var array = str.split(''); // convert string to array
    array.reverse(); // use reverse method that only works for arrays!
    var result = array.join(''); // convert the array back to string
    return result;
}
// use method chaining: 
function reverseString(str){
    return str.split('').reverse().join('');
}
// old school:
function reverseString(str){
    let revString = '';
    for(let i = str.length - 1; i>= 0; i--){ 
        revString = revString + str[i];
    }
    return revString;
}
// impressive way:
function reverseString(str){
    let revString = '';
    str.split('').forEach((char) =>
    revString = char + revString);
    return revString;
}