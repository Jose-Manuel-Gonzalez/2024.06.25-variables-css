// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

//const rootStyles = document.documentElement.style;

//rootStyles.setProperty('--primary-color', 'blue');
/*
inputElement.addEventListener('input', event => {
  rootStyles.setProperty('--primary-color', event.target.value);
});
*/
/*
# Ejercicios

## VARIABLES CSS

- Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

- Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

- Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

- Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.
*/

//Ejercicio 1:
/* una manera de hacerlo
window.addEventListener('scroll', function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop;
  var clientHeight = document.documentElement.clientHeight;
  var scrollPercent = scrollTop / (scrollHeight - clientHeight);
  var scrollDiv = document.getElementById('scrollDiv');
  scrollDiv.style.width = scrollPercent * 100 + '%';
});

*/
// OTRA MANERA DE HACERLO
window.addEventListener('scroll', function () {
  var scrollDiv = document.getElementById('scrollDiv');
  scrollDiv.style.width = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100 + '%';
});

//CLASE MIRAR EL EJERCICIO 2 EN CLASE
var scrollCountElement = document.getElementById('scroll-count');
const rootStyles = document.documentElement.style;
const setBoxScroll = event => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  const userScroll = window.scrollY;
  scrollCountElement.textContent = Math.round(userScroll);
  const boxWidth = (userScroll * 100) / totalHeight;
  rootStyles.setProperty('--box-width', boxWidth + '%');
  console.log(boxWidth);
  //console.log(userScroll);
  //console.log(totalHeight);
  //console.log(event);
};
window.addEventListener('scroll', setBoxScroll);
//Ejercicio 2
//CLASE
// solo hay que poner esto en el ejercicio 2scrollCountElement.textContent = Math.round(userScroll);

// Ejercicio 3
/*
let scrollDiv = document.getElementById('btn');

const changeColor = event => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const rootStyles = document.documentElement.style;

  rootStyles.setProperty('--primary-color', randomColor);
};

scrollDiv.addEventListener('click', changeColor);
*/

const buttonrgbElement = document.getElementById('button-rgb');
const buttonHexaElement = document.getElementById('button-hexa');

const generateRGBColor = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue} )`;
  rootStyles.setProperty('--bg-color', color);
};

const generateHexacolor = () => {
  const hexaValues = '0123456789ABCDEFG';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * hexaValues.length - 1); //para que la útima posicion exista
    const randomCharacter = hexaValues.charAt(randomPosition);
    color += randomCharacter;
  }
  rootStyles.setProperty('--bg-color', color);
};
buttonrgbElement.addEventListener('click', generateRGBColor);

buttonHexaElement.addEventListener('click', generateHexacolor);

// Ejercicio 4
/* 
let squareSmall = document.getElementById('twenty');

const moveMousse = event => {
  squareSmall.style.left = event.clientX + 'px';
  squareSmall.style.top = event.clientY + 'px';
};

document.addEventListener('mousemove', moveMousse);
*/
const setBoxPosition = event => {
  rootStyles.setProperty('--top', event.y + 'px');
  rootStyles.setProperty('--left', event.x + 'px');
  console.log(event);
};

window.addEventListener('mousemove', setBoxPosition);
