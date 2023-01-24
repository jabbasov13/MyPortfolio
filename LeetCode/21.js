var mergeTwoLists = function(list1, list2) {
    list1 = [1,2,4], list2 = [1,3,4]
    let newArr=[]
    let sum = 0;
    for(let i=0;i<list2.length;i++){
        list1.push(list2[i])
    }
    for(let j=0;j<list1.length;j++){
        sum=sum+list1[j]
        for(let i=0;i<list1.length;i++){
            if(sum<=list1[i]){
                newArr.push(list1[i])
            }
        }
        sum=0
    }
    return newArr;
};

console.log(mergeTwoLists());