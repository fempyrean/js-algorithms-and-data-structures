let arr = [];
for (let i = 1; i <= 500; i++) {
    arr.push(i);
}

let val = Math.round((Math.random() * 1000) + 1);

function binarySearch(arr, val) {
    console.log(val);
    let l = 0;
    let r = arr.length - 1;
    let mid = Math.round(r / 2);

    while (l < r) {
        if (arr[mid] == val) return mid;
        if (arr[mid] < val) {
            l = mid;
        }
        if (arr[mid] > val) {
            r = mid;
        }
        mid = Math.round(l + ((r - l) / 2));
    }
    return -1;
};