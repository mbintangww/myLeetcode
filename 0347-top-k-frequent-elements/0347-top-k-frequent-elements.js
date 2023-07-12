/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let obj = {};
  let result = [];
  for (n of nums) {
    if (obj[n]) {
      obj[n]++;
    } else {
      obj[n] = 1;
    }
  }
  let arr = Object.entries(obj);
  arr.sort((a, b) => {
    return b[1] - a[1]; 
  });

  // get the k most frequent ones , and push it to the final result
  arr.slice(0, k).forEach((element) => result.push(element[0]));

  return result;
};