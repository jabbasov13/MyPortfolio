// Verilən massivin tək yerdə duran elemenləri ilə cüt yerdə duran elemenləri dəyişdirin.

function swapArr(arr) {
    // Sizin kodunuz
    newArr= [];
    for(let i=0;i<arr.length;i++){
        if(i%2==1){
            newArr.push(arr[i-1])
        }else{
            if(i+1==arr.length){
                newArr.push(arr[i])
                break
            }
            newArr.push(arr[i+1])
        }
        
    }

    return newArr;
}

console.log(swapArr([1, 2, 3, 4, 5])); // [2, 1, 4, 3, 5]
