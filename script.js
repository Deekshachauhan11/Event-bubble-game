let timer = 60;
let score = 0;
let hitrn = 0;

function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 160; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".bottom-panel").innerHTML = clutter;
}

function getHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
  let timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearTimeout(timerint);
      document.querySelector(".bottom-panel").innerHTML = `<h1>Game over</h1>`;
    }
  }, 1000);
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}


function game(){
  document
  .querySelector(".bottom-panel")
  .addEventListener("click", function (dets) {
    let clicked = Number(dets.target.textContent);
    if (clicked === hitrn) {
      increaseScore();
      getHit();
      makeBubble();
    }
  });
}


getHit();
makeBubble();
runTimer();
game();
