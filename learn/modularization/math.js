function roundToDecimal(number, decimals = 2) {
  return Number(number.toFixed(decimals));
}

function sum(x, y) {
  return x + y;
}

export { roundToDecimal, sum };
