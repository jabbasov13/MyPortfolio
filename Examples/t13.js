// Verilən mətndə tələb olunan sözü tapıb onu başqa bir sözlə əvəzləyəcək metod yazın

function replaceWord(str, word, newWord) {
    
    
    str=str.replace(word, newWord);
    return str;
    // Sizin kodunuz
    
}

console.log(replaceWord('Hello world', 'world', 'Javascript')); // Hello Javascript