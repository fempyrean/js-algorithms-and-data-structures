const n = process.argv[2] ? String(process.argv[2]) : 'reverse';

function isPalindrome(n) {
    const r = [];
    const e = n.split('');
    
    function helper(input) {
        if (input.length <= 0) return;
        r.push(e[e.length - 1]);
        e.pop();
        helper(e);
    }
    
    helper(e);
    return r.join('') == n;
}

console.log(isPalindrome(n));