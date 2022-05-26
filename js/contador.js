// Contador

const fechaVencimiento = new Date('06/10/2022 0:01 AM');

const spanDias = document.querySelector('span#days');
const spanHoras = document.querySelector('span#hours');
const spanMinutos = document.querySelector('span#minutes');
const spanSegundos = document.querySelector('span#seconds');

const msSegundos = 1000;
const msMinuto = msSegundos * 60;
const msHora = msMinuto * 60;
const msDia = msHora * 24

function updateCountdown() {

  const ahora = new Date()
  const duracion = fechaVencimiento - ahora;
  const diasFaltantes = Math.floor(duracion / msDia);
  const horasFaltantes = Math.floor((duracion % msDia) / msHora);
  const minutosFaltantes = Math.floor((duracion % msHora) / msMinuto);
  const segundosFaltantes = Math.floor((duracion % msMinuto) / msSegundos);

  spanDias.textContent = diasFaltantes;
  spanHoras.textContent = horasFaltantes;
  spanMinutos.textContent = minutosFaltantes;
  spanSegundos.textContent = segundosFaltantes;
}

updateCountdown();

setInterval(updateCountdown, msSegundos);
