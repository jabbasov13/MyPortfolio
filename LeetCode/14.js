/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs = ["flower","flow","flight"]
    let newArr=[]
    
    for(let i=0;i<strs.length;i++){
        newArr.push(strs[i][0])
        // for(let j=i+1;j<strs.length;j++){
        //     if(strs[i][i]==strs[j][i]){
        //         newArr.push(strs[i][i])
        //     }
        //     break
        // }
    }

    return newArr;
};



console.log(longestCommonPrefix())