const n = Number(process.argv[2]) || 10;

function factorial(n) {
    if (n === 1) return n;
    return n * factorial(n - 1);
}

console.log(factorial(n));