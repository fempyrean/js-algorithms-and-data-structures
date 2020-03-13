/**
 * Store the first element as the smallest value you've seen so far.
 * Compare this item to the next item in the array until you find a smaller number
 * If a smaller number is found, designate that smaller number to be the new minimum
 * and continue until the end of the array.
 * If the minimum is not the value (index) you initially began with, swap the two values
 * Repeat this with the next element until the array is sorted.
 */
function selectionSort(arr) {
    console.log('Original array:', arr);
    let comparisons = 0;
    for(let i = 0; i < arr.length; i++) {
        /** Defining min */
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++) {
            comparisons ++;
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            let tmp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = tmp;
        }
    }
    console.log('Number of comparisons:', comparisons);
    return arr;
}

let arr = [];
for(let i = 0; i < 50; i++) {
    arr.push(Math.round((Math.random() * 100) + 1));
}

console.log(selectionSort(arr));