function arrayChunking(array, size){
    let chunkedArray = [];
    for (let i = 0; i < array.length; i=i+size){
        chunkedArray.push(array.slice(i,i+size));
        
    }
    console.log(chunkedArray);
}
function arrayFlatten(array){
    let flatArray = [];
    array.forEach(x => {
        for (let i=0; i<x.length; i++){
            flatArray.push(x[i]);
        }
    })
    return flatArray
}

function formatString(str){
    return str.replace(/[^\w]/g, '')// replace everything which is not a letter with nothing
              .toLowerCase()
              .split('')
              .sort() // sorting an array
              .join('')
}
function isAnagram(str1, str2){
    return formatString(str1) === formatString(str2);
}
console.log(formatString("dormitory"), formatString("Dirty     &*&#Room####"));
console.log(isAnagram("dormitory","Dirty Room"));