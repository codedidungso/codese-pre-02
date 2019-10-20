var a = 10
console.log(typeof(a))
a = "thien"
console.log(typeof(a))
a = true
console.log(typeof(a))
a = {}
console.log(typeof(a))
a = a=>1
console.log(typeof(a))
a = undefined
console.log(typeof(a))
a = null
console.log(typeof(a))

// var aFunction = function(x,y){
//     return x+y
// }
// function anotherFunction(x,y){
//     return x+y
// }

// // var xinchao = function () {
// //     console.log("xinchao")
// // }

// // setTimeout(xinchao,5000)
// // xinchao()
// // setTimeout(function(){
// //     console.log("Hello")
// // },200)

// var i
// for (/*var*/ i = 0; i < 4; i++) {
//     console.log(i)
//     setTimeout(function(){
//         console.log("Xin chao",i)
//     },i*1000)
// }

// for (let i = 0; i < 4; i++) {
//     //let i = 0
//     console.log(i)
//     setTimeout(function(){
//         console.log("Xin chao",i)
//     },i*1000)
// }

var phanso = {
  tuso: 5,
  mauso: 7
};
// phanso.tuso // 5
// phanso.mauso // 7
var mang = {
  0: "a",
  1: "b",
  2: "c"
};
var sinhvien = {
    ten: "thien",
    tuoi: 21,
}
// mang[0] // "a"
// phanso["tuso"] // 5

// var t1 = true // Boolean
// var t2 = 1    // Number
// console.log(t1===t2)

var F = function() {
  var i;
  for (i = 0; i < 6; i++) {
    console.log(i);
  }
  console.log(i, " day la i sau cung");
};
// self - invoke
(function() {
  console.log("no name");
})();

const tong = link => user => link + user;

var server = tong("database/");

var y = server("thien");
console.log(y);

var obj = {
  key1: "value1",
  keykeyS2: "value2",
  keyn: "valuen"
};
var reverseObject = function(input) {
  var keys = Object.keys(input);
  var values = Object.values(input)
  console.log(keys);
  console.log(values);

  var returnValue = {};
  for (let i = 0; i < keys.length; i++) {
      let v = values[i]
      let k = keys[i]
      returnValue[v] = k
      
  }
//   for (let i = 0; i < keys.length; i++) {
//     returnValue[input[keys[i]]] = keys[i];
//   }
  return returnValue;
};
var obj2 = reverseObject(obj);
console.log(obj2);
