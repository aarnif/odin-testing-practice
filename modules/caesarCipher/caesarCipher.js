const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
const nonAlphabets = " ,.?!".split("");

const getCipheredLetter = (index, shift) => {
  const cipheredLetterIndex =
    index + shift > alphabets.length - 1
      ? index + shift - alphabets.length
      : index + shift;

  return alphabets[cipheredLetterIndex];
};

const caesarCipher = (string, shift = 0) => {
  let cipheredString = "";

  for (let i = 0; i < string.length; ++i) {
    let cipheredLetter = "";
    if (nonAlphabets.includes(string[i])) {
      cipheredLetter = string[i];
    } else {
      cipheredLetter = getCipheredLetter(
        alphabets.indexOf(string[i].toLowerCase()),
        shift
      );
    }
    cipheredString += cipheredLetter;
  }

  return cipheredString;
};

export default caesarCipher;
