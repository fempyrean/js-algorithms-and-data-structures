const n = Number(process.argv[2]) || 10;

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let currentVal = arr[i];
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
            if (arr[j] > currentVal) {
                arr[j + 1] = arr[j];
            }
        }
        arr[j + 1] = currentVal
    }

    return arr;
};

let arr = [];
for(let i = 0; i < n; i++) {
    arr.push(Math.round((Math.random() * 500) + 1));
}
// arr = insertionSort(arr);

// let arr2 = [];
// for(let i = 0; i < n / 2; i++) {
//     arr2.push(Math.round((Math.random() * 500) + 1));
// }
// arr2 = insertionSort(arr2);

/**
 * Merging Arrays Pseudocode
 * Create an empty array, take a look at the smallest values in each input array
 * While there are still values we haven't looked at
 *  If the value in the first array is smaller than the value in the second array,
 *  push the value in the first array into our results and move on to the next value in the first array
 * 
 *  If the value in the first array is larger than the value in the second array,
 *  push the value in the second array into our results and move on to the next value
 *  in the second array
 * 
 *  Once we exhaust one array, push in all remaining values from the other array
 */
function merge(arr1, arr2) {
    let sorted = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length) {
        if (arr1[i] > arr2[j]) {
            sorted.push(arr2[j]);
            j++;
        } else {
            sorted.push(arr1[i]);
            i++;
        }
    }

    // while (arr1.length !== 0 && arr2.length !== 0) {
    //     if (arr1[0] > arr2[0]) {
    //         sorted.push(arr2.shift());
    //     }
    //     else {
    //         sorted.push(arr1.shift())
    //     }
    // }

    while(i < arr1.length) {
        sorted.push(arr1[i]);
        i++;
    }
    while(j < arr2.length) {
        sorted.push(arr2[j]);
        j++;
    }

    return sorted;
}

// console.log('Array 1:', arr);
// console.log('Array 2:', arr2);
// merge(arr, arr2);

function mergeSort(arr) {
    // Base case
    if (arr.length <= 1) return arr;
    const left = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    const right = mergeSort(arr.slice(Math.floor(arr.length/2)));
    return merge(left, right);
}

console.log(arr);
console.log(mergeSort(arr));
