/**
 * Write a recursive function called capitalizeWords.
 * Given an array of words, return a new array containing each word capitalized.
 */
function capitalizedWords(arr) {
    let newArr = []

    function helper(input) {
        if (input.length <= 0) return;
        newArr.push(input[0].toUpperCase());
        helper(input.slice(1));
    }

    helper(arr);
    console.log(newArr);
    return newArr;
}

let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']