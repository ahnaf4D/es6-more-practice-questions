const mixedArray = [ 1, 3, 5, 7, 9,29];
const evens = []
const evenArrayConvert = mixedArray.map((n) => {
    if (n % 2 !== 0) {
        n += 1;
        evens.push(n)
    }
})
console.log(evens);