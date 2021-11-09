var twod = [];
var rows = 5;
var total = 0;
var avarage = 0.0;
for (let i = 0; i < rows; i++) {
  twod[i] = [1];
}
console.log(twod);

var grades = [
  [2, 3, 4],
  [1, 2, 3],
  [4, 5, 6],
];
for (let row = 0; row < grades.length; row++) {
  for (let col = 0; col < grades[row].length; col++) {
    total += grades[row][col];
    console.log(total);
  }
  avarage = total / grades[row].length;
  console.log(row + "th" + ":" + " " + "avarage" + " " + avarage.toFixed(2));
  total = 0;
}
