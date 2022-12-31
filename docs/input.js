const button = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const gear = document.getElementById("gear");
const circle = document.getElementById("circle");
let countDownElement = document.getElementById("display");

let countDownMinute = 15;
let countDownSecond = 0;
let countDownIntervalmili = 1000;
let clickTimes = 0;
let secondClick = 0;

function countDownInterval(type) {
  countDownElement.innerHTML = countDownMinute + ":" + countDownSecond;
  let countdown = setInterval(() => {
    if (type == "second") {
      countDownSecond--;
      countDownElement.innerHTML = countDownSecond;

      if (countDownSecond == 0) {
        clearInterval(countdown);
        countDownElement.innerHTML = "done";
        circle.style.border = "8px solid #00aa51";
      }
    } else {
      if (countDownMinute == 0 && countDownSecond == 0) {
        console.log("log clear interval");
        clearInterval(countdown);
        countDownElement.innerHTML = "done";

        //change border radius to green
        circle.style.border = "8px solid #00aa51";
      } else if (countDownMinute > 0 && countDownSecond == 0) {
        countDownMinute--;
        countDownSecond = 59;
        countDownElement.innerHTML = countDownMinute + ":" + countDownSecond;
      } else {
        countDownSecond--;
        console.log();
        countDownElement.innerHTML = countDownMinute + ":" + countDownSecond;
      }
    }
  }, countDownIntervalmili);

  return countdown;
}

function stopInterval(countdown) {
  clearInterval(countdown);
}

button.addEventListener("click", function () {
  button.innerHTML = "STOP";
  clickTimes++;

  // interval for second
  if (countDownElement.textContent == 900) {
    let countdown = countDownInterval("second");
    if (clickTimes >= 2) {
      stopInterval(countdown);
    }

    button.addEventListener("click", function () {
      stopInterval(countdown);
      button.innerHTML = "START";
      countDownElement.innerHTML = "Stopped";
    });
  } else {
    //interval for minute and second

    let countdown = countDownInterval();
    if (clickTimes >= 2) {
      stopInterval(countdown);
    }

    button.addEventListener("click", function () {
      stopInterval(countdown);
      button.innerHTML = "START";
      countDownElement.innerHTML = "Stopped";
    });
  }
});

button.addEventListener("click", function () {
  if (clickTimes >= 3) {
    location.reload();
  }
});

//update second to 900 (15min)
gear.addEventListener("click", function () {
  countDownElement.innerHTML = 900;
  countDownSecond = 900;
});
