let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let allSpan = document.querySelectorAll(".clock span");

let digHours = document.getElementById("d-hh");
let digMinutes = document.getElementById("d-mm");
let digSeconds = document.getElementById("d-ss");
let ampm = document.getElementById("ampm");

setInterval(() => {
  clock();
  digClock();
}, 1000);

function clock() {
  let currentTime = new Date();
  let hh = currentTime.getHours()  * 30;
  let mm = currentTime.getMinutes() * 6;
  let ss = currentTime.getSeconds() * 6;
  let activeTime = currentTime.getHours();
  hours.style.transform = `rotate(${hh+(mm/12)}deg)`;
  minutes.style.transform = `rotate(${mm}deg)`;
  seconds.style.transform = `rotate(${ss}deg)`;
  
  allSpan.forEach(span=>{
    span.classList.remove("active");
    if(span.dataset.num == activeTime ){
      span.classList.add("active");
    }
    
  })

}

function digClock() {
  let cT = new Date();
  let h = cT.getHours();
  let m = cT.getMinutes();
  let s = cT.getSeconds();
  let am = h >= 12 ? "PM" : "AM";
  if (h > 12) {
    h = h - 12;
  }
  h = h < 10 ? `0${h}` : h;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;

  digHours.textContent = h;
  digMinutes.textContent = m;
  digSeconds.textContent = s;
  ampm.textContent = am;
}
