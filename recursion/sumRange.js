const n = Number(process.argv[2]) || 10;

function sumRange(n) {
    if (n === 1) return 1;
    return n + sumRange(n - 1);
}

console.log(sumRange(n));