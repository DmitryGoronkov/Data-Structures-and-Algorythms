function maxCharacter(str){
    const charMap = {};
    let maxNum = 0;
    let maxChar = ''; 
    str.split('').forEach(function(char){ 
        if(charMap[char]){    // if character exists then it adds 1 to accumulator for that character
            charMap[char]++;
        } else {
            charMap[char] = 1; // if not it creates a new object.
        }
    });
    for (let char in charMap){  // The for/in statement loops through the properties of an object.
        if (charMap[char]>maxNum){
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    console.log(maxChar,':',maxNum);

}
maxCharacter("Hare Krishna Hare Krishna Krishna Krishna Hare Hare Hare Rama Hare Rama Rama Rama Hare Hare")