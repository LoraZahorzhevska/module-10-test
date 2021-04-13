const refs = {
  startBtn: document.querySelector("button[data-action-start]"),
  stopBtn: document.querySelector("button[data-action-stop]"),
  clockFace: document.querySelector(".js-clockface"),
};

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isActive = false;
    this.onTick = onTick;
  }

  start() {
    if (this.isActive) {
      return;
    }
    const startTime = Date.now();
    this.isActive = true;
    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = currentTime - startTime;
      const time = getTimeComponents(deltaTime);

      this.onTick(time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.isActive = false;
  }
}

const timer = new Timer({
  onTick: updateClockface,
});

// const timer = {
//   intervalId: null,
//   isActive: false,
//   //нашему таймеру нужна точка отсчета
//   start() {
//     if (this.isActive) {
//       return;
//     }
//     const startTime = Date.now(); //когда вызываем метод start мы хотим сохранить стартовое время
//     this.isActive = true;
//     this.intervalId = setInterval(() => {
//       const currentTime = Date.now(); //текущее время
//       const deltaTime = currentTime - startTime;
//       //const { hours, mins, secs } = getTimeComponents(deltaTime); // деструктуризируем ф-ю getTimeComponents
//       const time = getTimeComponents(deltaTime);

//       updateClockface(time);
//       //console.log("start -> currentTime", currentTime);
//       //   console.log("start -> startTime", startTime); //startTime всегда будет одинаковым
//       //   console.log("qweqweqwqeqe");

//       //console.log(timeComponents); //разница между текущим с стартовым временем
//       //console.log(`${hours}::${mins}::${secs}`);
//     }, 1000);
//   },
//   //нужно остановить интервал
//   stop() {
//     clearInterval(this.intervalId);
//     this.isActive = false;
//   },
// };

//во время вызова этого метода создается переменная startTime, которая хранить стартовое время
//timer.start(); //начинает считать.

refs.startBtn.addEventListener("click", () => {
  // при клике на кнопку старт будет запускаться таймер
  timer.start();
});

refs.stopBtn.addEventListener("click", () => {
  timer.stop();
});

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Возвращает обьект со свойствами hours, mins, secs
 * - Адская копипаста со стека 💩
 */

function getTimeComponents(time) {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

  return { hours, mins, secs };
}

/*
 * - Принимает время в миллисекундах
 * - Высчитывает сколько в них вмещается часов/минут/секунд
 * - Рисует интерфейс
 */
function updateClockface({ hours, mins, secs }) {
  refs.clockFace.textContent = `${hours}:${mins}:${secs}`;
}

/*
 * Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
 */
function pad(value) {
  return String(value).padStart(2, "0"); //padStart - метод строки
}
