// Dani Vicario - images experiment (canvas)- Wed 18 May 2022 00:21:27 CEST

/** @type HTMLCanvasElement */
const canvasDOMEl = document.getElementById("canvas");

/** @type CanvasRenderingContext2D */
const ctx = canvasDOMEl.getContext("2d");

const w = window.innerWidth;
const h = window.innerHeight;
// eslint-disable-next-line no-unused-vars
const w2 = w / 2;
// eslint-disable-next-line no-unused-vars
const h2 = h / 2;

// eslint-disable-next-line no-unused-vars
const { PI } = Math;
// eslint-disable-next-line no-unused-vars
const PI_DOUBLE = 2 * Math.PI;
// eslint-disable-next-line no-unused-vars
const PI_HALF = Math.PI / 2;

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

canvasDOMEl.setAttribute("height", window.innerHeight);
canvasDOMEl.setAttribute("width", window.innerWidth);

ctx.save();

const catImage = new Image();
catImage.src = "img/cat.jpg";

catImage.onload = () => {
  ctx.drawImage(catImage, 0, 0);

  const imageData = ctx.getImageData(0, 0, catImage.width, catImage.height);
  const { data } = imageData;

  console.log(data);

  for (let i = 0; i < data.length - 1; i += 4) {
    // r data[i]
    // g data[i+1]
    // b data[i+2]
    // alpha (opacity) data[i+3]
    const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
    data[i] = avg;
    data[i + 1] = avg;
    data[i + 2] = avg;
    // data[i] = ///////slide;
  }

  ctx.putImageData(imageData, 0, 0);
};
