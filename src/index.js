import cipher from './cipher.js';

const buttonCode= document.getElementById("buttonEncode")
buttonCode.addEventListener("click", encodeWord)

function encodeWord() {
	let word = document.getElementById("inputText").value;
  let offset = parseInt(document.getElementById("inputOffset").value);
  document.getElementById("inputConvertedText").value = cipher.encode(offset, word); 
}

const buttonDecod= document.getElementById("buttonDecode")
buttonDecod.addEventListener("click", decodeWord)

function decodeWord() {
	let word = document.getElementById("inputText2").value;
	let offset = parseInt(document.getElementById("inputOffset2").value);
  document.getElementById("inputConvertedText2").value = cipher.decode(offset, word); 
}

const buttonClean= document.getElementById("buttonReset")
buttonClean.addEventListener("click", reset)

function reset() {
  document.getElementById("myForm").reset();
}
  
const buttonClean2= document.getElementById("buttonReset2")
buttonClean2.addEventListener("click", reset2)

function reset2() {
  document.getElementById("myForm2").reset();
}
