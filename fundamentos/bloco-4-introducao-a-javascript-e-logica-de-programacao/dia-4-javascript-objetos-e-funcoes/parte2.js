function checkPalindromo(word){
    // for(index in word){
    //     if(word[index] != word[(word.length - 1) - index]){
    //         return false;
    //     }
    // }
    // return true;
for(let i = 0; i < word.length; i += 1){
    if(word[i] != word[(word.length - 1) - i]){
        return false;
    }
}
    return true;

}




console.log(checkPalindromo('tamat'));