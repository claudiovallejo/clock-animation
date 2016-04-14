document.addEventListener('DOMContentLoaded', displayTime);

function displayTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  var timeString = String(h) + ":" + String(m) + ":" + String(s);

  document.getElementById('current-time').innerHTML = timeString;

}
