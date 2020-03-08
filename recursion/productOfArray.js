const arrSize = Number(process.argv[2]) || 10;

function getArr(arrSize) {
    const arr = [];

    function helper(n) {
        if (n <= 0) return;
        arr.push(Math.round(Math.random() * 10) + 1);
        n--;
        helper(n);
    }

    helper(arrSize);
    console.log(arr);
    return arr;
}

/** Write a function called productofArray which takes in an array of numbers and returns the product of them all. */
function productOfArray(arr) {
    if (arr.length === 1) return arr[0];
    return arr[0] * productOfArray(arr.slice(1));
}

console.log(productOfArray(getArr(arrSize)));