function longestWord (str){
    // The match() method retrieves the result of matching a string against a regular expression.
    const array = str.toLowerCase().match(/[a-z0-9]+/g); 
    let maxLength = 0;
    let maxWord = '';
    array.map(word => {
        if (word.length > maxLength){
            maxLength = word.length;
            maxWord = word;
        }
    })
    console.log(maxWord);
}
// using sorting - allows us to return multiple words 
function longestWord2 (str){
    const array = str.toLowerCase().match(/[a-z0-9]+/g); 
    const sorted = array.sort((a,b) => {
        return b.length - a.length
    })
    const longestWordArray = sorted.filter(function(word){
        return word.length === sorted[0].length;
    })
    if (longestWordArray.length == 1){
        return longestWordArray[0];
    }
    else {
        return longestWordArray.join(",");
    }
}
console.log(longestWord2("I was chanting hare krishna"));