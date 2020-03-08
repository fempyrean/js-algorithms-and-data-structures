const base = Number(process.argv[2]) || 10;
const exponent = Number(process.argv[3]) || 10;

/** Recursive and simple implementation of power */
function power(base, exponent) {
  if (base <= 0) return 0;
  if (exponent == 0) return 1;
  return base * power(base, exponent - 1);
};
