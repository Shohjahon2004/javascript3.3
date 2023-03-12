"use strict";

// let time = +prompt('Введите время')
// if(time>0 && time<6) {
//   console.log(time  + ' часа ночи');
// }else if(time>7 && time<10) {
//   console.log(time + ' часов утра');
// }else if(time>11 && time<17) {
//   console.log(time + ' часа дня');
// }else if(time>18 && time<24){
//   console.log(time + ' часов вечера');
// }else{
//   console.log('не ввели время');
// }
var time = +prompt('Введите время');

switch (time) {
  case 1:
    alert('1 часа ночи');
    break;

  case 2:
    alert('2 часа ночи');
    break;

  case 3:
    alert('3 часа ночи');
    break;

  case 4:
    alert('4 часа ночи');
    break;

  case 5:
    alert('5 часа ночи');
    break;

  case 6:
    alert('6 часа ночи');
    break;

  case 7:
    alert('7 часов утра');
    break;

  case 8:
    alert('8 часов утра');
    break;

  case 9:
    alert('9 часов утра');
    break;

  case 10:
    alert('10 часов утра');
    break;

  case 11:
    alert('11 часа дня');
    break;

  case 12:
    alert('12 часа дня');
    break;

  case 13:
    alert('13 часа дня');
    break;

  case 14:
    alert('14 часа дня');
    break;

  case 15:
    alert('15 часа дня');
    break;

  case 16:
    alert('16 часа дня');
    break;

  case 17:
    alert('17 часа дня');
    break;

  case 18:
    alert('18 часов вечера');
    break;

  case 19:
    alert('19 часов вечера');
    break;

  case 20:
    alert('20 часов вечера');
    break;

  case 21:
    alert('21  часов вечера');
    break;

  case 22:
    alert('22  часов вечера ');
    break;

  case 23:
    alert('23 часов вечера');
    break;

  case 24:
    alert('24 часов вечера');
    break;

  default:
    alert('неправильное время');
}

var x = +prompt('Введите число 1 ');
var y = +prompt('Введите число 2 ');
var z = +prompt('Введите число 3 ');

if (y < x && x < z || z < x && x < y) {
  alert('Среднее число ' + x);
} else if (x < y && y < z || z < y && y < x) {
  alert('Среднее число ' + y);
} else if (x < z && z < y || y < z && z < x) {
  alert('Среднее число ' + z);
} else {
  alert('неправильно');
}
//# sourceMappingURL=2.2.dev.js.map
