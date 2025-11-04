let timer = 60;
let score = 0;


function makeBubble() {
  let clutter = "";

  for (let i = 1; i <= 160; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector(".bottom-panel").innerHTML = clutter;
}

function getHit() {
    let rn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = rn;
}


function runTimer() {
  let timerint = setTimeout(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearTimeout(timerint);
    }
  }, 1000);
}


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}


document.querySelector(".bottom-panel").addEventListener("click", function(dets){
     console.log(Number(dets.target.textContent))
});

getHit();
makeBubble();
runTimer();

