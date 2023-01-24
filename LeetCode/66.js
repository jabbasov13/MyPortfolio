// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits = [9,2,3]
    let newArr=[]
    let sum=0
    let m = 10
    for(let i=0;i<digits.length;i++){
        sum=sum+digits[i]*Math.pow(m,(digits.length-1-i))
    }

    sum=sum+1;
    while(sum>=1){
        newArr.push(sum%10)
        sum=parseInt(sum/10)
    }
    newArr.reverse()


    return newArr;
    

   
    
};
console.log(plusOne())