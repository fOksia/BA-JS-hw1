/* Запросить у пользователя пятиразрядное число и определить,
является ли оно палиндромом.
 */

"use strict";

let globalNumber;

do {
  let number = prompt('Введите пятиразрядное число (00000)', '');
  if (number.length == 5) {
    if (number != "" && number != null && isFinite(number)) {
      if (number[0] == number[4] && number[1] == number[3]) {
        alert('Число палиндромом');
      } else {
        alert('Число непалиндромом');
      }
    }
  } 
  if (number.length != 5 && number != "" && isFinite(number)) {
    alert('Веденно не пятиразрядное число');
  }
  

  globalNumber = number;

} while (globalNumber == "" || !isFinite(globalNumber) || 
globalNumber.length > 5 || globalNumber.length < 5);