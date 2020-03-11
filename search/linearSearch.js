function linearSearch(arr, index) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i] === index) return i;
    }
    return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(linearSearch(arr, 11));