const { odd, even } = require("./app");

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  } else {
    return even;
  }
}

module.exports = {
  checkStringOddOrEven,
};
