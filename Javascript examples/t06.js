// Verilən massivin ədədlərinin cəmini tapın.

function findSumOfNumbers(arr) {
    // Sizin kodunuz
    let sum=0
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum
}

console.log(findSumOfNumbers([1, 2, 3, 4, 5])); // 15