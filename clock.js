//query selector
const $hour = document.querySelector(".hour");
const $minute = document.querySelector(".minute");
const $second = document.querySelector(".second");
const $time = document.querySelector(".time");

const $fecha = document.querySelector(".fecha");

const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
const dias = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

function checkDigitos(num) {
  return num < 10 ? "0" + num : num;
}

function setDate() {
  const today = new Date();

  const seconds = today.getSeconds();
  const seconDeg = (seconds / 60) * 360 + 360;
  $second.style.transform = `rotate(${seconDeg}deg)`;

  const minutes = today.getMinutes();
  const minutesDig = (minutes / 60) * 360;
  $minute.style.transform = `rotate(${minutesDig}deg)`;

  const hours = today.getHours();
  const hourDig = (hours / 12) * 360;
  $hour.style.transform = `rotate(${hourDig}deg)`;

  //innerhtml sumar texto al html
  $time.innerHTML = `
  <span>
  <strong>${checkDigitos(hours)}</strong>
  :
  ${checkDigitos(minutes)}
  :
  <small>
  ${checkDigitos(seconds)}
  </small>
  </span>
  `;

  // indexDay = [today.getDay];
  // indexMes = [today.getMonth];

  // const day = dias[indexDay];
  // const mes = meses[indexMes];

  $fecha.innerHTML = `
  ${dias[today.getDay()]} ${today.getDate()},${meses[today.getMonth()]}
  `;
}
setDate();
setInterval(setDate, 1000); //recibe un callback y lo ejecuta cada cierto tiempo

const $check = document.querySelector(".switch");
$check.addEventListener("click", Click);

function Click(e) {
  console.log("Se cambio el checkbox");

  const html = document.querySelector("html");
  console.log(html);

  if (e.target.checked) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
}
