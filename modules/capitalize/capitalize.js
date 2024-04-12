const capitalize = (string) => {
  if (!string.length) {
    return string;
  }

  return string[0].toUpperCase() + string.slice(1);
};

export default capitalize;
