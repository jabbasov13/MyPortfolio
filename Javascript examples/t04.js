// Verilən ədədin rəqəmlərini tərsinə çevirən funksiya yazın.

function reverseNumber(a) {
    // Sizin kodunuz
    let newArr=[];
    
    while(a>0){
        newArr.push(a%10);
        a=(parseInt(a/10));   
    }
    return newArr.join('');
}

console.log(reverseNumber(123)); // 321