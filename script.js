document.addEventListener('DOMContentLoaded', displayTime);

function displayTime() {
  var now = new Date();
  document.getElementById('current-time').innerHTML = now.toString();

}
