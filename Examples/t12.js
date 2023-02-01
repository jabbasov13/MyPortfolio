// verilən aralıq arasında olan ədədlərdən təsadüfi x sayda ədəd seçən və bunu massiv olaraq return edən metod yazın. Seçilən təsadüfi ədədlər arasında təkrarlanma ola bilməz.

//1.Random ədəd alan a dəyişəni tanıdırıq
//2.verilən x qədər random ədəd almalıdı
//2.Sonra a ədədini aralıqdakı hansısa ədədə bərabərdisə push edirik arrayə
//3.

function randomArray(start, end,x) {
    let arr = [];
    let newArr = [];
    for(let i=start;i<end+1;i++){
        arr.push(i)
    }
    x = Math.floor(Math.random() * end);
    
    for(let j=0;j<=x;j++){
        newArr.push(arr[j]);
    }

    return newArr;
    
}

console.log(randomArray(1, 10,5)); // [1, 2, 3, 4, 5]