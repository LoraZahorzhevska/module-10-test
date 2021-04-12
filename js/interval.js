// метод setInterval(callback, delay, arg1, arg2, ...);

const logger = (time) => console.log(`лог каждые ${time}ms - ${Date.now()}`);

// console.log("до вызова setInterval");
// setInterval(logger, 2000, 2000);
// console.log("после вызова setInterval");

//очистка интервала clearInterval(id)

const intervalId = setInterval(logger, 2000, 2000);
const shouldCancelInterval = Math.random() > 0.3;
console.log(shouldCancelInterval);

if (shouldCancelInterval) {
  clearInterval(intervalId);
}
