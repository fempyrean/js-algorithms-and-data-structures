const n = process.argv[2] ? String(process.argv[2]) : 'reverse';

/**
 * Write a recursive function called reverse which accepts a string and returns a new string in reverse.
 */
function reverse(n) {
    const reversedString = [];
    const exploded = n.split('');

    function helper(input) {
        if (input.length <= 0) return;
        reversedString.push(input[input.length - 1]);
        input.pop();
        helper(input);
    }

    helper(exploded);
    return reversedString.join('');
}

console.log(reverse(n));