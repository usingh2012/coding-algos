
const validAnagram = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }
    let freqencyCounterOfStr1 = {};
    let freqencyCounterOfStr2 = {};
    for (let chars of str1) {
        freqencyCounterOfStr1[chars] = ( freqencyCounterOfStr1[chars] || 0) + 1;
    }
    for (let chars of str2) {
        freqencyCounterOfStr2[chars] = (freqencyCounterOfStr2[chars] || 0) + 1;
    }

    for (let charKeys in freqencyCounterOfStr1) {
        // if (typeof freqencyCounterOfStr2[charKeys] === 'undefined') {
        //     return false;
        // }
        if (freqencyCounterOfStr1[charKeys] !== freqencyCounterOfStr2[charKeys]) {
            return false;
        }
    }
    return true;
}

console.log(validAnagram('', '')) // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false) // false
console.log(validAnagram('awesome', 'awesom')) // false
console.log(validAnagram('qwerty', 'qeywrt')) // true
console.log(validAnagram('texttwisttime', 'timetwisttext')) // true
