function checkSpam(str) {
  let lowStr = str.toLowerCase();

  let res = (lowStr.includes('1xbet') || lowStr.includes('xxx')) ? true : false;
  return res;
}
