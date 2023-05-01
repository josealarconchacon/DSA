"strict";
/*
Given two arrays that are sorted, Can you merge the two arrays into one array
 */

function mergeArray(arr1, arr2) {
  const merge = [];
  // grab the first item if each array
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  // check arrays input
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  // loop thought the items while the condition is meet
  while (arr1Item || arr2Item) {
    // console.log(arr1Item, arr2Item);
    // check if first item of arr1Item is < than first item of arr1Item
    // if is less, then push to the merge array
    if (!arr2Item || arr1Item < arr2Item) {
      merge.push(arr1Item);
      arr1Item = arr1Item[i];
      i++;
    } else {
      merge.push(arr2Item);
      arr2Item = arr2Item[j];
      j++;
    }
  }

  return merge;
}

console.log(mergeArray([0, 3, 4], [4, 6, 30]));
