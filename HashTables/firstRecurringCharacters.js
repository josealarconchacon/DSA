"strict";

/*
Given an array, find the first recurring character in the array

array = [2,5,1,2,3,5,1,2,4]
return 2

array = [2,1,1,2,3,5,1,2,4]
return 1

array = [2,3,4,5,6,7]
return undefined
 */

const firstRecurringElement = (array) => {
  let hashMap = {};
  // loop over the items
  for (let i = 0; i < array.length; i++) {
    // check if the key already exist, If exist, return the item
    if (hashMap[array[i]]) {
      return array[i];
    }
    // if doesn't exist, add the key to the hashMap
    hashMap[array[i]] = i;
  }
  return undefined;
};

console.log(firstRecurringElement([1, 2, 3, 4, 7, 9, 9, 1]));
