/* Запросить у пользователя его возраст и определить, кем он является:
 ребенком (0–2), подростком (12–18), взрослым (18_60) или пенсионером (60– ...). */

"use strict";

let age;

do {
  let userAge = prompt('Введите ваш возраст', '');

  age = +userAge;

  (userAge >= 0 && userAge <= 2) ? alert('Вы ребенок') :
  (userAge >= 12 && userAge < 18) ? alert('Вы подросток') :
  (userAge >= 18 && userAge < 60) ? alert('Вы взрослый') :
  (userAge >= 60) ? alert('Вы пенсионер') :
  alert('Такого промежутка нет в условии')
  
} while (age === "" || isNaN(age));


