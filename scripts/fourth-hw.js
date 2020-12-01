/* Запросить у пользователя год и проверить, високосный он или нет. 
Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100. */

"use strict";

let globalYear;

do {
  let year = prompt('Введите год', '');

  if (year != "" && year != null) {
    if (isFinite(year)) {
      if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0) {
        alert('Год высокосный');
      } else alert('Год невысокосный');
    } 
    else {
      alert('Введите число');
    }
  }
  
  globalYear = year;
} while (globalYear == "" || !isFinite(globalYear));
