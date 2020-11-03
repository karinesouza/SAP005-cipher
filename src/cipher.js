const cipher = {
    encode:
    function(palavra, deslocamento){
        let palavracod=""
     for(let i=0; i<palavra.length;i++){
         let letraminuscula=palavra.toUpperCase()
         let resultado1=(letraminuscula.charCodeAt(i)+deslocamento-65)%26
         let resultado2= resultado1+65
         let exibir= String.fromCharCode(resultado2)
         palavracod += exibir
    
    }
    return palavracod
    },
     decode:
     function(palavra, deslocamento){
        let palavracod=""
     for(let i=0; i<palavra.length;i++){
         let letraminuscula=palavra.toUpperCase()
         let resultado1=(letraminuscula.charCodeAt(i)-deslocamento+65)%26
         let resultado2= resultado1+65
         let exibir= String.fromCharCode(resultado2)
         palavracod += exibir
    
    }
    return palavracod
    }

}

export default cipher;
