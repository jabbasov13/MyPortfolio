// Ana dilimizdə tarix və saatı göstərən metod yazın

// function showLocalDateTime() {
//     // Sizin kodunuz
// }

// console.log(showLocalDateTime()); // 10 Yanvar 2023, Çərşənbə, 12:00:00


const testCases = [
    
    new Date().toLocaleString( {year: 'numeric', month: 'long', day: '2-digit', weekday:"long", hour: '2-digit', hour12: false, minute:'2-digit', second:'2-digit'}),
    
  ]
  
  for (const testData of testCases) {
    console.log(testData)}


    //az-Latn-AZ
    