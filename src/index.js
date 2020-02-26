module.exports = function reverse (n) {
    if(n<0){
        n=n*(-1);
    }
  let string = n+'';
  let arr = string.split('').reverse().join('');
  return Number(arr);
}
