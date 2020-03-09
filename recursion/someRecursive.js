/**
 * Write a recursive function called someRecursive which accepts an array and a callback.
 * The function returns true if a single value in the array returns true when passed to the callback.
 * Otherwise it returns false.
 */
// function someRecursive(n, cb) {
//     function helper(input) {
//         console.log(input);
//         if (input.length <= 0) return false;
//         if (cb(input[0])) {
//             return true;
//         } else {
//             return helper(input.slice(1));
//         }
//     }

//     return helper(n);
// }

function someRecursive(n, cb) {
    if (n.length <= 0) return false;
    if (cb(n[0])) {
        return true;
    } else {
        return someRecursive(n.slice(1), cb);
    }
}

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([4, 6, 8], isOdd));