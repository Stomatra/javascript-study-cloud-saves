const sum = (...nums) => nums.reduce((acc, x) => acc + x, 0);

const avg = (arr) => sum(...arr) / arr.length;

module.exports = {
  sum,
  avg,
};