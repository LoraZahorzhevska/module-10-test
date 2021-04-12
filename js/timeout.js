//пример работы планировщика setTimeout

// console.log("до вызова setTimeout");

// setTimeout(() => {
//   console.log("внутри callback для setTimeout");
// }, 2000);

// console.log("после вызова setTimeout");

// for (let index = 0; index < 1000; index++) {
//   console.log(index);
// }

//очистка таймаута с clearTimeout

const logger = (time) => {
  console.log(`лог через ${time}ms, потому что не отменили таймаут`);
};

const timerId = setTimeout(logger, 2000, 2000);

const shouldCancelTimer = Math.random() > 0.3;
console.log(shouldCancelTimer);

if (shouldCancelTimer) {
  clearTimeout(timerId);
}
