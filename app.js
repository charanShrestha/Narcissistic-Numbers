function isNarcissistic(n) {
  const strgNum =  n.toString();
  const indivNum = strgNum.split('');
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + Math.pow(indivNum[i],a.length); 
  }
  if (sum === n) return true;
  else return false;
}
module.exports = numChecker;
