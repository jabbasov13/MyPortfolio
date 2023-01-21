// Verilən ədədin sadə ədəd olub olmadığını yoxlayan funksiya yazın. Sadə ədəd sadəcə özünə və 1-ə bölünən ədədlərə deyilir.

function isPrime(num) {
    if(num==1){
        console.log(num, " ne sadedi ne murekkeb")
        
    }else if(num>1){
    for(let i = 2;i<=num;i++){
        if(num%i==0 && num!=i && i>1){
            console.log(num, "sade deyil");
            break
        }
        
    }
    }
    else {
        console.log(num, "Sadedir"); 
    }

    // Sizin kodunuz
}

console.log(isPrime(23)); // true 