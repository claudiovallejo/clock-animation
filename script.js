document.addEventListener('DOMContentLoaded', startTimer);

function startTimer() {
  setInterval(displayTime, 1000);
  displayTime();

}

function displayTime() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();

  // --- Analog clock ---//
  var canvas = document.querySelector("#clock");
  var context = canvas.getContext("2d");

  // You can change this to make the clock as big or small as you want.
  // Just remember to adjust the canvas size if necessary.
  var clockRadius = canvas.width / 2;

  // Make sure the clock is centered in the canvas
  var clockX = canvas.width / 2;
  var clockY = canvas.height / 2;

  // Make sure TAU is defined (it's not by default)
  Math.TAU = 2 * Math.PI;

  function drawArm(progress, armThickness, armLength, armColor) {
    var armRadians = (Math.TAU * progress) - (Math.TAU/4);
    var targetX = clockX + Math.cos(armRadians) * (armLength * clockRadius);
    var targetY = clockY + Math.sin(armRadians) * (armLength * clockRadius);

    context.lineWidth = armThickness;
    context.strokeStyle = armColor;

    context.beginPath();
    context.moveTo(clockX, clockY);
    context.lineTo(targetX, targetY);
    context.stroke();

  }

  context.clearRect(0, 0, canvas.width, canvas.height);

  drawArm(h/12, 2, 0.65, '#b3b3b3');
  drawArm(m/60, 2, 0.85, '#b3b3b3');

  // Create a circle at the center of the clock
  context.beginPath();
  context.arc(clockX, clockY, 2, 0, Math.PI*2);
  context.fillStyle = '#b3b3b3';
  context.fill();

}
