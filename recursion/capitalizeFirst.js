/**
 * Write a recursive function called capitalizeFirst. Given an array of strings, capitalize
 * the first letter of each string in the array.
 */
function capitalizeFirst(arr) {
    const newArr = [];

    function helper(input) {
        if (input.length <= 0) return;
        let capitalized = input[0].charAt(0).toUpperCase() + input[0].slice(1);
        newArr.push(capitalized);
        helper(input.slice(1));
    }

    helper(arr);
    
    console.log(newArr);
}

capitalizeFirst(['car','taco','banana']); // ['Car','Taco','Banana']