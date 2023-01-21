function clock() {
  const clockhtml = document.querySelector(".clock");
  const date = new Date();
  const month = String(date.getMonth()).padstart(2, "0");
  const hours = String(date.getHours()).padstart(2, "0");
  const minutes = String(date.getMinutes()).padstart(2, "0");
  const seconds = String(date.getSeconds()).padstart(2, "0");
  clockhtml.innerHTML = `${month}:${hours}:${minutes}:${seconds}:`;
}
function clockinit() {
  clock();
  setInterval(clock, 1000);
}
clockinit();
