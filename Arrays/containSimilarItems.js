"strict";
/*
Given two array, return true is the array contain similar items
 */
const contains_similar_items = (arr1, arr2) => {
  // loop over arr1
  // and create object where properties equals item in the array
  let hashMap = {};
  for (let i = 0; i < arr1.length; i++) {
    if (hashMap[arr1[i]]) {
      const item = arr1[i];
      hashMap[item] = true;
    }
  }

  // loop over arr2
  // check if item in arr2 exist on create object
  for (let j = 0; j < arr2.length; j++) {
    if (hashMap[arr2[j]]) {
      return true;
    }
    return false;
  }
};
const a1 = ["a", "x", "b", "c"];
const a2 = ["x", "f", "e", "i"];

console.log(contains_similar_items(a1, a2));
