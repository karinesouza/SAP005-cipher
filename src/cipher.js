/* eslint-disable linebreak-style */
const cipher = {
  encode(offset, word) {
    if (typeof word !== 'string') {
      throw new TypeError('Digite apenas letras');
    }
    let codedWord = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < word.length; i++) {
      const lettersUppercase = word.toUpperCase();
      const convert = (lettersUppercase.charCodeAt(i) + offset - 65) % 26;
      const conversionResult = convert + 65;
      const result = String.fromCharCode(conversionResult);
      codedWord += result;
    }
    return codedWord;
  },
  decode(offset, word) {
    if (typeof word !== 'string') {
      throw new TypeError('Digite apenas letras');
    }
    let codedWord = '';
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < word.length; i++) {
      const lettersUppercase = word.toUpperCase();
      const convert = (lettersUppercase.charCodeAt(i) - offset + 65) % 26;
      const conversionResult = convert + 65;
      const result = String.fromCharCode(conversionResult);
      codedWord += result;
    }
    return codedWord;
  },

};

export default cipher;
