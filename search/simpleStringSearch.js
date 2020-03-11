/**
 * Loop over the longer string
 * Loop over the shorter string
 * If the characters don't match, break out of the inner loop
 * If the characters do match, keep going
 * If you complete the inner loop and find a match, increment the count of matches
 * Return the count
 */
function simpleStringSearch(str1, str2) {
    let matches = 0;
    for(let i = 0; i < str1.length; i++) {
        let tmp = i;
        for(let j = 0; j < str2.length; j++) {
            // Breaking if different
            if ( str2[j] !== str1[tmp] ) {
                console.log(`${str2[j]} is different from ${str1[tmp]}`);
                break;
            }
            // Incrementing tmp when equal
            if (str2[j] === str1[tmp]) {
                console.log(`${str2[j]} is equal to ${str1[tmp]}`);
                tmp++;
            }
        }
        if (tmp - i === 3) matches++;
    }
    return matches;
}

console.log(simpleStringSearch('ihfoiuawhefiuawhef', 'whe'));