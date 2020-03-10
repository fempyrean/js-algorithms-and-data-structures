/**
 * Write a function called stringifyNumbers which takes in an object and finds
 * all of the values which are numbers and converts them to strings.
 */
function stringifyNumbers(obj)  {
    let newObj = {};
    Object.keys(obj).map(key => {
        if (typeof obj[key] === 'number') {
            newObj[key] = String(obj[key]);
        }
        if (typeof obj[key] === 'object') {
            if (Object.keys(obj[key]).length <= 0 ){
                newObj[key] = obj[key];
            }
            else {
                newObj[key] = stringifyNumbers(obj[key]);
            }
        }
        if (typeof obj[key] !== 'object' && typeof obj[key] !== 'number') {
            newObj[key] = obj[key];
        }
    });

    return newObj;
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

console.log(stringifyNumbers(obj));