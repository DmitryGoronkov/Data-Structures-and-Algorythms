function capitalizeLetters(str){
    const strArr = str.toLowerCase().split(' ');
    for (let i=0; i < strArr.length; i++){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');
}
/////////// 
function capitalizeLetters2(str){
    return str.toLowerCase()
              .split(' ')
              .map(word => {
                  return word[0].toUpperCase() + word.substr(1);
                })
              .join(' ');
}
////////// using regular expressions
function capitalizeLetters3(str){
    return str.replace(/\b[a-z]/gi, function(char){
        return char.toUpperCase();
    })
}
console.log(capitalizeLetters3("i love javaScript"));