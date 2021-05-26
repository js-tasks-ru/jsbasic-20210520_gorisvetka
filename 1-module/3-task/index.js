function ucFirst(str) {
  let restStr = str.slice(1, str.length);
  if (str && str !== '') {
    return str = str[0].toUpperCase() + restStr;
  } else {
    return '';
  }
}
