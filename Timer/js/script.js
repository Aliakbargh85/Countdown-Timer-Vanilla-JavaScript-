var minute = +prompt("Enter Minutes Digits : ");
var second = +prompt("Enter Seconds Digits : ");

var timerDisplay = document.getElementById("timer");

var timer = setInterval (function () {
  if (second === -1) {
    minute--;
    second = 59;
  }

  let displayMinute = minute;
  let displaySecond = second;

  if (minute < 10) {
    displayMinute = "0" + minute;
  }
  if (second < 10) {
    displaySecond = "0" + second;
  }

  timerDisplay.textContent = displayMinute + " : " + displaySecond;

  if (minute == 0 && second == 0) {
    clearInterval(timer);
    timerDisplay.textContent = "⏰ Time's Up!";
  }

  second--;
}, 1000);
