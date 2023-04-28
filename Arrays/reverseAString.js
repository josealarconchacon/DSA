"strict";

/*Create a function that reverse a string
String:
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
 */

function reverse(st) {
  // check input
  if (!st || st.length < 3 || typeof st !== "string") return "Not a good input";

  // convert string into an array
  const reverseSt = [];
  // get the length of the string
  const stLength = st.length - 1;

  for (let i = stLength; i >= 0; i--) {
    reverseSt.push(st[i]);
  }
  //   console.log(reverseSt);
  return reverseSt.join("");
}

console.log(
  reverse(
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
  )
);

/*
    function reverseSt(s) {
    return s.split("").reverse().join("");
    }
    console.log(reverseSt("Reverse tis"));

    // using destructuring
    const reverseStr1 = (str) => [...str].reverse().join("");
    console.log(reverseStr1("My dog Jesse"));
 */
