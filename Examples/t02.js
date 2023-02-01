// Daxil edilən argumentlərin cəmini tapan funksiya yazın.

function sumOfArguments(...args) {
    // Sizin kodunuz
    let sum =0;
    for(let i=0;i<args.length;i++){
        sum+=args[i];
    }
    return sum
}

console.log(sumOfArguments(1, 2, 3)); // 6