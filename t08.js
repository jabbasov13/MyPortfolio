// Verilən massivdən  tələb olnan ədədi silən funksiya yazın.

function removeElement(arr, element) {
    // Sizin kodunuz
    let newArr=[]
    for(let i=0;i<arr.length;i++){
        
        if(arr[i]!==element){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(removeElement([1, 2, 3, 4, 5], 3)); // [1, 2, 4, 5]