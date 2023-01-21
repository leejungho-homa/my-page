const clockhtml = document.querySelector(".clock");
const datehtml = document.querySelector(".dateclock");

function dateclock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const months = String(date.getMonth() + 1).padStart(2, "0");
  const days = String(date.getDate()).padStart(2, "0");
  datehtml.innerHTML = `${years}/${months}/${days}`;
}
function clock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clockhtml.innerHTML = `${hours}:${minutes}:${seconds}`;
}

function clockinit() {
  dateclock();
  clock();
  setInterval(clock, 1000);
}
clockinit();
