const PROMPT_DELAY = 1000;
const MAX_PROMPT_ATTEMPTS = 3;

let promptCounter = 0; //счетчик - сколько раз мы уже попросили человека подписаться
let hasSubscribed = false;

const intervalId = setInterval(() => {
  if (promptCounter === MAX_PROMPT_ATTEMPTS) {
    console.log("нужно остановить интервал");
    clearInterval(intervalId);
    return; // return - чтобы не выполнился код ниже
  }

  console.log("подпишись на рассылку - " + Date.now());
  promptCounter += 1; //каждый раз когда вызывается отложенный интервал ф-и + 1
}, PROMPT_DELAY);
