// Verilən iki massivdəki ortaq elemenləri taparaq yeni bir massiv yaradın.

function findCommonElements(arr1, arr2) {
    // Sizin kodunuz
    let newArr=[]
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                newArr.push(arr1[i])
            }
        }   
    }
    return newArr;
}

console.log(findCommonElements([1,2,8,9,12,10, 2, 3, 4, 5], [3, 4, 5, 6, 7])); // [3, 4, 5]