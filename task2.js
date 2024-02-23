const nums = [33,50,79,78,90,101,30];
// console.log(nums);
const filteredArr = [];
const filterArray = nums.filter((n) => {
    if(n % 10 === 0){
        filteredArr.push(n);
    }
})
console.log(filteredArr);