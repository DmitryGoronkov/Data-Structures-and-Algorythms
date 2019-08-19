function palindrome(str){
    var reg = /[\W_]/g; // regex expression for non alphanumeric characters;
    var smallStr = str.toLowerCase().replace(reg, "") // replacing with nothing;
    var reversed = smallStr.split('').reverse().join('');
    if(reversed === smallStr) return true;
    return false;
}
// same but without built in methods
function palindrome(str){
    var reg = /[\W_]/g;
    var str = str.replace(reg, '');
    var str = str.toLowerCase();
    for (let i=0; i<str.length; i+=1){
        if (str[i] !== str[str.length - 1 -i]) {
            return false;
        }
    }
    return true;
}