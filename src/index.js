module.exports = function reverse (n) {
  num=Math.abs(n).toString().split("").reverse().join("");
  return num;
}
