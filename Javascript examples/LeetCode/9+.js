
//Given an integer x, return true if x is a palindrome , and false otherwise.


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let b=x
    let arr = []
    while(b>=1){
        arr.push(b%10)
        b=parseInt(b/10)
        
    }
    if(arr.join('')==x){
        return true
    }else{
        return false
    }
};
console.log(isPalindrome(115511))