// Verilən ədədin sadə ədəd olub olmadığını yoxlayan funksiya yazın. Sadə ədəd sadəcə özünə və 1-ə bölünən ədədlərə deyilir.

function isPrime(num) {
    if(num<0){
        console.log( " musbet eded daxil edin")
    }

    else if(num==1){
        console.log(num, " ne sadedi ne murekkeb")
        
    }
    
    
    else{
        for(let i = 2;i<=num;i++){
            if(num%i==0 && i!=num){
                console.log(num, "sade deyil");
                break
            }else if(num==i){
                console.log(num, "Sadedir");
            }
        
    }
    }
    

    // Sizin kodunuz
}

console.log(isPrime(151514567)); // true 