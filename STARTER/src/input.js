const button = document.getElementById("start");
const stopBtn = document.getElementById("stop");

let countDownMinute = 15;
let countDownSecond = 59;
let countDownInterval = 1000;
let clickTimes = 0;
let countDownElement = document.getElementById("display");

button.addEventListener("click", function () {
  button.innerHTML = "STOP";
  clickTimes++;

  let countdown = setInterval(() => {
    countDownSecond--;

    if (countDownSecond == 0 || countDownMinute == 15) {
      countDownMinute--;
      countDownSecond = 59;
    }

    countDownElement.innerHTML = countDownMinute + ":" + countDownSecond;

    if (countDownMinute == 0) {
      clearInterval(countdown);
      countDownElement.innerHTML = "done";
    }
  }, countDownInterval);

  if (clickTimes >= 2) {
    clearInterval(countdown);
  }

  button.addEventListener("click", function () {
    clearInterval(countdown);
    button.innerHTML = "START";
    countDownElement.innerHTML = "Stopped";
  });
});

button.addEventListener("click", function () {
  if (clickTimes >= 3) {
    location.reload();
  }
});
