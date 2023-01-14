const arrSum = (nums) => {
  if(Array.isArray(nums)) {
    return nums.reduce((accumulate,  currentValue)=> {
      return accumulate + currentValue;
    }, 0);
  }
  return 0;
};
module.exports = arrSum;
