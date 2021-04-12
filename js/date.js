/*
 - Создание
 - Unix-время
 - Методы
 - Разница времени
 - Date.now()
*/

// const date = new Date(600000000);

// console.log(date);
// console.log(date.getTime());

//можно запомнить предыдущее время и получить текущее время
//времена можно отнимать друг от друга
// const date1 = new Date.now(); // создает целый объект
const date1 = Date.now(); // статический метод, чтобы получить значение времени как число. он не создает экземпляр.
console.log("date1", date1);

setTimeout(() => {
  // const date2 = new Date.now();
  const date2 = Date.now();

  console.log("date1", date1);
  console.log("date2", date2);

  console.log(date2 - date1); //всегда будет погрешность в тысячных милисекунды
}, 3000);
