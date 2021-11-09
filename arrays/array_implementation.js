// declaring an array
var zero = 0;

// creating a postive number array
var postiveNumbers = [1, 2, 3];
// creating a negative number array
var negativeNumbers = [-1, -2, -3];
// now concatinating the arrays
var numbers = negativeNumbers.concat(zero, postiveNumbers);
console.log(numbers);

var isEven = function (x) {
  console.log(x);
  return x % 2 == 0 ? true : false;
};
var numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers1.every(isEven)); //The Array.every() method returns true if all elements in an array pass a test (provided as a function).
var numbers2 = [2, 1, 4, 3, 7, 5];
console.log(numbers2.sort()); // sorting the array in ascending order
numbers2.forEach(function (x) {
  if (x % 2 == 0) console.log("even");
  else console.log("odd");
});
