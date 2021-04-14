const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  bodySwitch: document.querySelector("body"),
  startBtn: document.querySelector("button[data-action=start]"),
  stopBtn: document.querySelector("button[data-action=stop]"),
};

let switchId = null;

refs.startBtn.addEventListener("click", startBgColor);
refs.stopBtn.addEventListener("click", stopBgColor);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function startBgColor() {
  refs.startBtn.disabled = true;

  switchId = setInterval(() => {
    const randomBgColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
    refs.bodySwitch.style.backgroundColor = randomBgColor;
  }, 1000);
}

console.log(startBgColor);

function stopBgColor() {
  clearInterval(switchId);
  refs.startBtn.disabled = false;
}
