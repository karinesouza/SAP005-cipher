import cipher from './cipher.js';
console.log(cipher);

const btnCodificar= document.getElementById("botaoCodificar")
btnCodificar.addEventListener("click", codificaFrase)

function codificaFrase() {
	let palavra = document.getElementById("inputTexto").value;
	let deslocamento = parseInt(document.getElementById("inputDeslocamento").value);
    document.getElementById("inputTextoConvertido").value = cipher.encode(palavra, deslocamento); 
}

const btnDecodificar= document.getElementById("botaoDecodificar")
btnDecodificar.addEventListener("click", decodificaFrase)

function decodificaFrase() {
	let palavra = document.getElementById("inputText").value;
	let deslocamento = parseInt(document.getElementById("inputDeslocament").value);
    document.getElementById("inputTextoConvertid").value = cipher.decode(palavra, deslocamento); 
}
const btnResetar= document.getElementById("botaoResetar")
btnResetar.addEventListener("click", resetar)
function resetar() {
    document.getElementById("myForm").reset();
  }
  
const btnLimpar= document.getElementById("botaoLimpar")
btnLimpar.addEventListener("click", resetarb)
function resetarb() {
    document.getElementById("meuForm").reset();
  }
