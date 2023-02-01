// Alarm sistemi üçün metod yazın. Alarm zamanı gəldiyi zaman ekranda bildiriş göstərilməlidir. Alarm zamanı gəlmədiyində ekranda heç bir şey göstərilməməlidir

function wakeUp(day, hour, minute) {

    const d = new Date();
    
    if(day==d.getDay() && hour==d.getHours() && minute==d.getMinutes()){
        console.log("Oyanmaq vaxtı gəldi")
    }

    // Sizin kodunuz
}




console.log(wakeUp('Çərşənbə', 12, 17)); // Oyanmaq vaxtı gəldi

//sizin versiyaniz beledi bunu alindira bilmedim asagidaki versiyada isleyir ama


console.log(wakeUp(1, 12, 29)); // Oyanmaq vaxtı gəldi