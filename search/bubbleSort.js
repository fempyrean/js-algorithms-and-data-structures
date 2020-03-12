/**
 * Start looping with a variable called i from the end of the array towards the beginning.
 * Start an inner loop with a variable called j from the beggining until i - 1;
 * If arr[j] is greater than arr[j+1], swap those two values
 * Return the sorted array
 */


/** OLD IMPLEMENTATION */
function bubbleSortOld(arr) {
    console.log(arr);
    for(let i = arr.length - 1; i >= 0; i--) {
        for(let j = 0; j <= i - 1; j++) {
            if (arr[j] > arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    console.log(arr);
}

function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--) {
        let noSwaps = true;
        for(let j = 0; j < i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    console.log(arr);
    return arr;
}

let arr = [];
for(let i = 0; i < 100; i++) {
    arr.push(Math.round((Math.random() * 100) + 1));
}

console.log(bubbleSort(arr));

[18,26, 29, 29, 29, 41, 39, 55, 57, 73]
//j i