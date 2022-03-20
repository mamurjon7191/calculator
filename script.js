"use strict";
//1
// let x = document.querySelector(".btn"); //faqat bittasini tanlaydi agar ular bir nechta bolsa
// let html = document.documentElement; //butun html elementlarni olib kelish
// let body = document.body; //butun body elementlarini olib kelish
// let fullSelectors = document.querySelectorAll(".btn"); //barcha selectorlarni tanlab olish
// let id = document.getElementById("btn11"); //id orqali tanlab olish
// let clas1s = document.getElementsByClassName("btn"); //klass orqali tanlab olish
// let tag = document.getElementsByTagName("ul"); //elementlarni tag orqali chaqirish

// //2
// let full = document.createElement("ul"); //element yaratadi
// full.classList.add("heading1"); //klass nomini qoshadi
// full.classList.remove("heading1"); //klass nomini ochiradi
// full.classList.toggle("heading1"); //bor bosa ochiradi yoq bolsa qoshadi
// full.classList.contains("heading1"); //bor bolsa true yoq bolsa false

// //3

// let section = document.querySelector(".sec1");

// full.innerHTML = `<li>one</li>
// <li>two</li>`; //yaratilgan element ichiga elementlar qoshish uchun
// section.before(full); //oldidan qoshadi
// section.after(full.cloneNode(true)); //orqasidan qoshadi
// full.remove(); //shu ishlamadi sorash kerak-------------------

// //4
// document.documentElement.style.setProperty("--color", "red");

// let s = document.querySelector("img"); //shotga getElementByTagName qsam oxshamadi --------------\

// console.log(getComputedStyle(s).height);

/// T-a-k-r-o-r-l-as-h-l-a-s-h tugadi

let answer = document.querySelector(".answer");

let number9 = document.querySelector(".kv9");
let number8 = document.querySelector(".kv8");
let number7 = document.querySelector(".kv7");
let number6 = document.querySelector(".kv6");
let number5 = document.querySelector(".kv5");
let number4 = document.querySelector(".kv4");
let number3 = document.querySelector(".kv3");
let number2 = document.querySelector(".kv2");
let number1 = document.querySelector(".kv1");
let number0 = document.querySelector(".kv0");
let numberV = document.querySelector(".kvV");

let ayiruv = document.querySelector(".ayiruv");
let qoshu = document.querySelector(".qoshu");
let bolu = document.querySelector(".bolu");
let kopay = document.querySelector(".kopay");
let tenglik = document.querySelector(".tenglik");

let clearAll = document.querySelector(".clearAll");
let clearOne = document.querySelector(".clearOne");

let numberFirst = [];
let numberFirst1 = [];
let numberSecond = [];

// let str1 = numberFirst1.join("");
// let str2 = numberSecond.join("");

// let arr = [1, 2, 3, 4, 5, 6, 7, 7, 8, "-", 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < numberFirst.length; i++) {
//   numberFirst1.push(numberFirst[i]);
//   if (numberFirst[i + 1] == "*") {
//     break;
//   } else if (numberFirst[i + 1] == "-") {
//     break;
//   } else if (numberFirst[i + 1] == "+") {
//     break;
//   } else if (numberFirst[i + 1] == "÷") {
//     break;
//   }
// }
// console.log(typeof numberFirst1.join(""));

// let operator = function (arrCurrent, arrNew) {
//   for (let i = 0; i < arrCurrent.length; i++) {
//     if (arrCurrent[i] == "÷") {
//       for (let j = i; j < arrCurrent.length; j++) {
//         arrNew.push(arrCurrent[j + 1]);
//       }
//     } else if (arrCurrent[i] == "*") {
//       for (let j = i; j < arrCurrent.length; j++) {
//         arrNew.push(arrCurrent[j + 1]);
//       }
//     } else if (arrCurrent[i] == "-") {
//       for (let j = i; j < arrCurrent.length; j++) {
//         arrNew.push(arrCurrent[j + 1]);
//       }
//     } else if (arrCurrent[i] == "+") {
//       for (let j = i; j < arrCurrent.length; j++) {
//         arrNew.push(arrCurrent[j + 1]);
//       }
//     }
//   }
//   arrNew.pop();
//   return arrNew;
// };

// console.log(numberSecond.join(""));

ayiruv.addEventListener("click", function () {
  numberFirst.push("-");
  answer.value = numberFirst.join("");
});
qoshu.addEventListener("click", function () {
  numberFirst.push("+");
  answer.value = numberFirst.join("");
});
bolu.addEventListener("click", function () {
  numberFirst.push("÷");
  answer.value = numberFirst.join("");
});
kopay.addEventListener("click", function () {
  numberFirst.push("*");
  answer.value = numberFirst.join("");
});
// tenglik.addEventListener("click", function () {
//   operator(numberFirst, numberSecond);
//   console.log(numberFirst);
//   for (let i = 0; i < numberFirst.length; i++) {
//     if (numberFirst[i] == "÷") {
//       answer.value =
//         Number(numberFirst1.join("")) / Number(numberSecond.join(""));
//       console.log(numberFirst1);
//       console.log(numberSecond);
//     } else if (numberFirst[i] == "-") {
//       answer.value =
//         Number(numberFirst1.join("")) - Number(numberSecond.join(""));
//     } else if (numberFirst[i] == "+") {
//       answer.value =
//         Number(numberFirst1.join("")) + Number(numberSecond.join(""));
//     } else if (numberFirst[i] == "*") {
//       answer.value =
//         Number(numberFirst1.join("")) * Number(numberSecond.join(""));
//     }
//   }
// });

number1.addEventListener("click", function () {
  numberFirst.push(1);
  answer.value = numberFirst.join("");
});
number2.addEventListener("click", function () {
  numberFirst.push(2);
  answer.value = numberFirst.join("");
});
number3.addEventListener("click", function () {
  numberFirst.push(3);
  answer.value = numberFirst.join("");
});
number4.addEventListener("click", function () {
  numberFirst.push(4);
  answer.value = numberFirst.join("");
});
number5.addEventListener("click", function () {
  numberFirst.push(5);
  answer.value = numberFirst.join("");
});
number6.addEventListener("click", function () {
  numberFirst.push(6);
  answer.value = numberFirst.join("");
});
number7.addEventListener("click", function () {
  numberFirst.push(7);
  answer.value = numberFirst.join("");
});
number8.addEventListener("click", function () {
  numberFirst.push(8);
  answer.value = numberFirst.join("");
});
number9.addEventListener("click", function () {
  numberFirst.push(9);
  answer.value = numberFirst.join("");
});
number0.addEventListener("click", function () {
  numberFirst.push(0);
  answer.value = numberFirst.join("");
});
numberV.addEventListener("click", function () {
  numberFirst.push(","); //vergul ishlamadi
  answer.value = numberFirst.join("");
});

clearAll.addEventListener("click", function () {
  answer.value = 0;
  numberFirst = [];
});

clearOne.addEventListener("click", function () {
  numberFirst.pop();
  answer.value = numberFirst.join("");
});

// console.log(operator(one, numberSecond));
