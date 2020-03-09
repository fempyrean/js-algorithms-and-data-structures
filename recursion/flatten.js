/**
 * Write a recursive function called flatten which accepts an array of arrays and returns a new array
 * with all values flattened.
 */
function flatten(arr) {
    const result = [];

    function helper(input) {
        if (input.length <= 0) return;
        if (typeof input[0] !== 'object') {
            result.push(input[0]);
        }
        if (typeof input[0] === 'object') {
            helper(input[0]);
        }
        helper(input.slice(1));
    }

    helper(arr);
    return result;
}

// flatten([1, 2, 3, [4, 5] ]);
// flatten([[1],[2],[3]]);
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])
/**
 * [1, 2, 3, [4, 5]];
 * 1 > push 1
 * [2, 3, [4, 5]];
 * 2 > push 2
 * [3, [4, 5]];
 * 3 > push 3
 * [[4, 5]] > flatten([4, 5]);
 * 4 > push 4
 * 5 > push 5
 */