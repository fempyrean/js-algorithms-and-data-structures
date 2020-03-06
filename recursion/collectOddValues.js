const arrSize = Number(process.argv[2]) || 10;

function getArr(arrSize) {
    const arr = [];

    function helper(n) {
        if (n <= 0) return;
        arr.push(Math.round(Math.random() * 9999));
        n--;
        helper(n);
    }

    helper(arrSize);
    return arr;
}

function collectOddValues(arr) {
    let result = [];

    function helper(helperInput) {
        if (helperInput.length === 0) return;

        if (helperInput[0] % 2 !== 0) {
            result.push(helperInput[0]);
        }
        helper(helperInput.slice(1))
    }

    helper(arr);

    return result;
}

/** Rewriting collecOddValues using pure recursion */
function collectOddValuesPure(arr) {
    let newArr = [];
    if (arr.length == 0) return newArr;

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
    return newArr;

}

console.table(collectOddValuesPure(getArr(arrSize)));