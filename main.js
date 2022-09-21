const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const amtopm = document.querySelector(".amtopm");

function updateTime() {
  let hourNow = new Date().getHours();
  let minuteNow = new Date().getMinutes();
  let secondNow = new Date().getSeconds();
  let ampm = "AM";

  if (hourNow > 12) {
    hourNow -= 12;
    ampm = "PM";
  }

  hourEl.textContent = hourNow;
  minutesEl.textContent = minuteNow;
  secondEl.textContent = secondNow;
  amtopm.textContent = ampm;

  setTimeout(() => {
    updateTime(), 1000;
  });
}
updateTime();
