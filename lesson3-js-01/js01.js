var password = "Codesasde23#";
var demThuong = 0;
var demHoa = 0;
var demSo = 0;
var demDacbiet = 0;
const dacbiet = "!@#$%^&*()";
for (var i = 0; i < password.length; i++) {
  if (password[i] >= "a" && password[i] <= "z") {
    demThuong = demThuong + 1;
  }
  if (password[i] >= "A" && password[i] <= "Z") {
    demHoa = demHoa + 1;
  }
  if (dacbiet.includes(password[i])) demDacbiet = demDacbiet + 1;
}

console.log(demThuong);
console.log(demHoa);
// Ctrl + ~ || Ctrl Shift P

var sotien = "12345678";
var reverse = "";
for (let i = sotien.length - 1; i >= 0; i--) {
  reverse = reverse + sotien[i];
}
console.log(reverse);
var reverseAgain = "";
for (let i = 0; i < reverse.length; i++) {
  if (i % 3 == 0) {
    reverseAgain = "," + reverseAgain;
  }
  reverseAgain = reverse[i] + reverseAgain;
}
console.log(reverseAgain);
