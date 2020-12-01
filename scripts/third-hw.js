// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

"use strict";

let num;

do {
  let number = prompt("Введите трехзначное число", '');
  if (number.length == 3) {
    number = +number;
    if (isFinite(number)) {
      number = String(number);
      if (number[0] == number[1] || number[1] == number[2] || number[0] == number[2]) {
        alert('Есть одинаковые цифры');
      } else {
        alert('Нет одинаковых цифр');
      }
    } else {
      number = +number;
    }
  }
  
  num = number;

} while (num.length > 3 || num.length < 3 || !isFinite(num));