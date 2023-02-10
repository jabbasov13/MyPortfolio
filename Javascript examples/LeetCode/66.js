// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
// var plusOne = function(digits) {
//     digits=[1,2,3]
//     let newArr=[]
//     let sum=0
//     let m = 10
//     for(let i=0;i<digits.length;i++){
//         sum=sum+digits[i]*Math.pow(m,(digits.length-1-i))
//     }

//     sum=sum+1;
//     while(sum>=1){
//         newArr.push(sum%10)
//         sum=parseInt(sum/10)
//     }
//     newArr.reverse()
//     return newArr;    
// };
// console.log(plusOne())

var plusOne = function(digits) {
    let newArr= []
    let joinNum=digits.join('')
    let n= BigInt(joinNum)+1n;
        
    while(joinNum>=1n){
        newArr.push(n%10n)
        n=(n/10n)
    }
    newArr.reverse()
    return newArr;   
}

console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))


