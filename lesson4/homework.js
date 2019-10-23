// ex1
let str = "   kia  con    buom vang   ";
let arr = ["kia", "con", "buom", "vang"];

str = str.trim(); // space tab newline
while (str.includes("  ")) {
  str = str.replace("  ", " ");
}
console.log(":" + str + ":");

let arrStr = str.split(" ");

console.log(arrStr);
// for (let i = 0; i < arrStr.length; i++) {
//   setTimeout(() => {
//     console.log(arrStr[i]);
//   }, i * 1000);
// }

// ex3
let n = 10;
let answer = [];
while (answer.length < n) {
  let newValue = Number.parseInt(Math.random() * 100);
  if (answer.indexOf(newValue) == -1) {
    answer.push(newValue);
    // [1,2,3].push(4) // [1,2,3,4]
    // [1,1,2,3].pop() => 3 // [1,1,2]
  }
}
function indexOf(k) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) return i;
  }
  return -1;
}
answer.sort((a, b) => a > b);
console.log(typeof answer);

// ex2
function tong1(a, b) {
  return a + b;
}

let tong2 = function(a, b) {
  return a + b;
};

// ECMA Script 6
let tong3 = (a, b) => {
  // Arrow Function
  return a + b;
};

let tong4 = (a, b) => ({
  tenham: "tong",
  ketqua: a + b
});

let tanglen1 = e => e + 1;

let sinhTong = function(e) {
  return function(f) {
    return e + f;
  };
};
// e = 5

let tongvoi5 = sinhTong(5);
let tongvoi7 = sinhTong(7);

let ketqua1 = tongvoi5(6);
let ketqua2 = tongvoi7(6);

// let ketquax = sinhTong(5)(6)
// console.log(ketquax);
console.log(ketqua2);

let timkiem = function(tenMXH) {
  return function(tenNguoiDung) {
    return tenMXH + tenNguoiDung;
  };
};

const linkFB = "https://facebook.com/";
const linkINS = "https://instagram.com/";

let tkFBx = function(tenNguoiDung) {
  return "https://facebook.com/" + tenNguoiDung;
};

let tkFB = timkiem(linkFB); // function
let tkINS = timkiem(linkINS); // function

let nam = tkFB("namngu");
let thu = tkFB("thuThongMinh");

console.log(nam);
console.log(thu);

let str1 = " day la cai string 1 '''' ";
let str2 = ' day la cai string 2 """" ';
let str3 = ` day la cai string 3 " ' " `;

let x3 = 10;
let strx = "Day la x3: " + x3;
let strxx = `Day la tong 5 voi 8: ${tongvoi5(8)}`;
console.log(strx);
console.log(strxx);

let x1 = "100";
let x2 = "10";
console.log(x1 + x2);
console.log(x1 - x2);



