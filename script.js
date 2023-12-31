// bubble code
function bubblemaker() {
  var clutter = "";

  for (let i = 0; i <= 150; i++) {
    var rnumber = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rnumber}</div>`;
  }

  document.querySelector("#pab").innerHTML = clutter;
}

// timer code
var timer = 60;
function runtimer() {
  var time = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerbox").innerHTML = timer;
    } else {
      clearInterval(time);
      document.querySelector("#pab").innerHTML = `<h2>Game Over</h2>`;
    }
  }, 700);
}

//new hit function
var hitrn = 0;

function newhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

// score function
var score = 0;
function incscore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pab").addEventListener("click", function (details) {
  var clicknumber = Number(details.target.textContent);
  if (clicknumber === hitrn) {
    incscore();
    bubblemaker();
    newhit();
  }
});

// calling function
newhit();
runtimer();
bubblemaker();
