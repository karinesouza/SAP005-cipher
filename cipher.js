const cipher = {
    encode:
    function(offset, word){
        if (typeof word !== "string"){
            throw new TypeError("Digite apenas letras");
}
        let codedWord = ""
        for(let i = 0; i < word.length; i++){
            let lettersUppercase = word.toUpperCase()
            let convert = (lettersUppercase.charCodeAt(i) + offset - 65) % 26
            let conversionResult = convert + 65
            let result = String.fromCharCode(conversionResult)
            codedWord += result   
}
        return codedWord
},
    decode:
    function(offset, word){
        if (typeof word !== "string"){
            throw new TypeError("Digite apenas letras");
}
        let codedWord = ""
        for(let i = 0; i < word.length; i++){
            let lettersUppercase = word.toUpperCase()
            let convert = (lettersUppercase.charCodeAt(i) - offset + 65) % 26
            let conversionResult = convert + 65
            let result = String.fromCharCode(conversionResult)
            codedWord += result   
}
        return codedWord
}

}

export default cipher;
