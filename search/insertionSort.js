/**
 * Start by picking the second element in the array.
 * Now compare the second element with the one before it and swap if necessary
 * Continue to the next element and if it is in the incorrect order, iterate through the sorted portion
 * to place the element in the correct place.
 * Repeat until the array is sorted.
 */

 /**
  * OLD IMPLEMENTATION
  * PRETTY MUCH A REVERSE BUBBLE SORT
  */
function insertionSortOld(arr) {
    console.log('Original array:', arr);
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if (arr[i] < arr[j]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}

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
for(let i = 0; i < 50; i++) {
    arr.push(Math.round((Math.random() * 100) + 1));
}

console.log(insertionSort(arr));