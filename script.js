// complete the given function

function palindrome(str){
let arr1 = str.split(" ");

let arr2 = arr1.join("");
let arr3 = arr2.split("");
// console.log(arr3);
// let arr2 = arr1.reverse();
let arr4 = arr3.reverse();

// console.log(arr4);
if (arr3 == arr4) {
  return true;
} else {
  return false;
}
}
module.exports = palindrome
