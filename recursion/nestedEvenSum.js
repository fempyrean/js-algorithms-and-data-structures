/**
 * Write a recursive function called nestedEvenSum.
 * Return the sum of all even numbers in an object
 * which may contain nested objects.
 */
function nestedEvenSum(obj) {
    let sum = 0;

    function helper(input) {
        Object.keys(input).map(key => {
            const current = input[key];
            if (typeof current === 'number' && current % 2 == 0) {
                sum += input[key];
            }
            if (typeof current === 'object') {
                helper(current);
            }
        })
    }

    helper(obj);
    console.log(sum);
    return num;
}

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  
//   nestedEvenSum(obj1); // 6
  nestedEvenSum(obj2); // 10