/**
 * const, let等の変数宣言
 */

// var val1 = "val1";
// console.log(val1);

// val1 = "val2";
// console.log(val1);

// var val1 = "val3";
// console.log(val1);

// let val2 = "let val";
// console.log(val2);

// val2 = "let val2";
// console.log(val2);

// const val3 = "const val";
// console.log(val3);

// val3 = "const valaa";

// const object
// const val4 = {
//   name: "lei",
//   age: 33,
// }
// val4.name = "leikash";
// val4.address = "Cebu";
// console.log(val4);

// const array
// const val5 = ['dog', 'cat'];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

/**
 * template strings
 */
// const name = "leikash";
// const age = 44;
// const message = "my name is " + name + ". age is " + age + ".";
// console.log(message);

// // template strings
// const message2 = `Template: my name is ${name}. age is ${age}.`;
// console.log(message2);

/**
 * アロー関数
 */
// old style
const func1 = function (str) {
  return str;
};
console.log(func1("It's func1"));

// アロー関数
const func2 = (str) => {
  return str;
};
console.log(func2("it's func2"));

const func3 = (num1, num2) => {
  return num1 + num2;
};
console.log(func3(1, 2));
