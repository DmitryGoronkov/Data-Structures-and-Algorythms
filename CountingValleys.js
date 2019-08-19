function countingValleys(n, s) {
    var news = s.toLowerCase().replace(/u/g, '1,').replace(/d/g, '-1,').split(',');
    let sum = 0;
    let oldsum = 0;
    let counter = 0;
    for (let i = 0; i<news.length-1; i++){
        oldsum = sum;
        sum += parseInt(news[i]);
        console.log('sum: ',sum,'news[i]: ',news[i]);
        if (sum == 0 && oldsum<0 ){
            counter ++;
        }
    }
    return counter;
}
function countingValleys2(n, s) {
    var news = s.split('');
    let sum = 0;
    let oldsum = 0;
    let counter = 0;
    let number = 0;
    for (let i = 0; i < news.length; i++) {
        if (news[i] == 'U') {
            number = 1; 
        }
        if (news[i] == 'D') {
            number = -1;
        }
        oldsum = sum;
        sum += number;
        console.log('oldsum: ', oldsum,'number: ',number, 'sum: ',sum);
        if (sum == 0 && oldsum < 0) {
            counter++;
        }
    }
    return counter;
}
