"use strict";

const str = "  secret   test    very   secret";
const strObj = new String(str);

const firstLetter = str.charAt(0);
const firstLetterUnicodeCode = str.charCodeAt(0);
const hasLetter = str.includes("t");

const trimmed = str.trim();

const newStr = str.replace("secret", "null");

function makeStringCaps(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result += str[i].toUpperCase();
  }
  return result;
}

function toRandomCase(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (Math.random() > 0.5) {
      result += str[i].toUpperCase();
    } else {
      result += str[i].toLowerCase();
    }
  }
  return result;
}
// console.log(trimmed);

function toJadenCase(str) {
  return str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.split(" "))
    .join(" ");
}

const result = Number.isInteger(33); //проверка на целосность числа
// charAt(2) - получаем букву из массива по номеру
const strsl = str.split(" "); // разделяет массив, где разделитель пробел
// join(" ") - соединяет массив (в скобках то что будет между строками)
// const strjoin = str.join(" ");

const strnes = str.replace("secret", "null");

/*
number
boolean
undefined
null
String
bigin

symbol

------
object
*/
// строка итерируема
// особый символ \/
const sum1 = Symbol("fgsg");

const user = {
  if: sum1,
  name: "feofen",
  lastname: "df",
  [sum1]: 300,
};
const arr = [1, 2, 44, 456, 44];
//декларативный способ написания кода
//          ключ
// for (const number of arr) {
//   console.log(number);
// }

// const arrayIterator
