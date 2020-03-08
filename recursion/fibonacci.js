const n = Number(process.argv[2]) || 10;

/**
 * Write a recursive function called fib which accpets a number and returns the nth number
 * in the fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers,
 * which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 */
function fib(n) {
    const arr = [1, 1];

    function helper(input) {
        if (input <= 0) return;
        const lastTwo = arr.slice(-2);
        arr.push(lastTwo[1] + lastTwo[0]);
        helper(input - 1);
    }

    helper(n);

    return arr[n - 1];
}

console.log(fib(n));