/* Запросить у пользователя его возраст и определить, кем он является:
 ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...). */

"use strict";

let globalUserAge;

 do {
  let userAge = prompt('Введите ваш возраст', '');

  if (userAge != "" && userAge != null && isFinite(userAge)) {
    (userAge >= 0 && userAge <= 2) ? alert('Вы ребенок') :
    (userAge >= 12 && userAge < 18) ? alert('Вы подросток') :
    (userAge >= 18 && userAge < 60) ? alert('Вы взрослый') :
    (userAge >= 60) ? alert('Вы пенсионер') :
    alert('Такого промежутка нет в условии');
  }
  if (isNaN(userAge)) {
    alert('Не правильное значение');
  }

  globalUserAge = userAge;

 } while (globalUserAge == "" || isNaN(globalUserAge));

