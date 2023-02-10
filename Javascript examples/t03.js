// Bir a ədədi verilir.Sizdən tələb olunan bu ədədin rəqəmlərinin cəmini tapmadır

function findSumOfDigits(a) {
    // Sizin kodunuz
    let sum = 0;
    while(a>0){
        sum+=a%10;
        a=parseInt(a/10)
    }
    return sum;
    
}

console.log(findSumOfDigits(123)); // 6