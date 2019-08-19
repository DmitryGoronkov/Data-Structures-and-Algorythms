function changeLetters(str){
    let formattedStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z'){
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    return formattedStr;
}