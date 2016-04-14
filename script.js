document.addEventListener('DOMContentLoaded', displayTime);

function displayTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  var timeString = formatHour(h) + ":" + padZero(m) + ":" + padZero(s) + " " + getTimePeriod(h);

  document.getElementById('current-time').innerHTML = timeString;

}

function padZero(num) {
  if (num < 10) {
    return "0" + String(num);

  } else {
    return String(num);

  }

}

function formatHour(h) {
  var hour = h % 12;

  if (hour == 0) {
    hour = 12;

  }

  return String(hour)

}

function getTimePeriod(h) {
  return (h < 12) ? "AM" : "PM";

}
