const reverseString = (string) => {
  if (string.length === 1) {
    return string;
  }

  return [...string].reverse().join("");
};

export default reverseString;
