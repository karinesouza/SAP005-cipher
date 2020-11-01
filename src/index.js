/*import cipher from './cipher.js';
console.log(cipher);*/

function converter(palavra, deslocamento){
    let palavracod=""
 for(let i=0; i<palavra.length;i++){
     let letraminuscula=palavra.toUpperCase()
     let resultado1=(letraminuscula.charCodeAt(i)+deslocamento-65)%26
     let resultado2= resultado1+65
     let exibir= String.fromCharCode(resultado2)
     palavracod += exibir

}
return palavracod
}
function desconverter(palavra, deslocamento){
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
function BtnDesconverter() {
	let palavra = document.getElementById("inputText").value;
	let deslocamento = parseInt(document.getElementById("inputDeslocament").value);
    document.getElementById("inputTextoConvertid").value = desconverter(palavra, deslocamento); 
}

function BtnConverter() {
	let palavra = document.getElementById("inputTexto").value;
	let deslocamento = parseInt(document.getElementById("inputDeslocamento").value);
    document.getElementById("inputTextoConvertido").value = converter(palavra, deslocamento); 
}

function resetar() {
    document.getElementById("myForm").reset();
  }
  function resetar1() {
    document.getElementById("meuForm").reset();
  }
