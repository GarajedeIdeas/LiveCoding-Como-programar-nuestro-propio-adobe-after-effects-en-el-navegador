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

ctx.save();

const videoDOMEl = document.querySelector("video");

videoDOMEl.setAttribute("width", 1920 / 1.25);
videoDOMEl.setAttribute("height", 1080 / 1.25);

function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

videoDOMEl.onplay = () => {
  canvasDOMEl.style.display = "block";
  videoDOMEl.className = "enabled";

  canvasDOMEl.setAttribute("width", 1920 / 1.25);
  canvasDOMEl.setAttribute("height", 1080 / 1.25);

  function playback() {
    ctx.drawImage(videoDOMEl, 0, 0);
    const imageData = ctx.getImageData(0, 0, canvasDOMEl.width, canvasDOMEl.height);
    const { data } = imageData;

    for (let i = 0; i < data.length - 1; i += 4) {
      // r data[i]
      // g data[i+1]
      // b data[i+2]
      // alpha (opacity) data[i+3]
      // const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      // data[i] = avg;
      // data[i + 1] = avg;
      // data[i + 2] = avg;
      // data[i] = ///////slide;
      data[i] = randomInt(0, 255);
      data[i + 2] = 0;
    }

    ctx.putImageData(imageData, 0, 0);
    requestAnimationFrame(playback);
  }

  playback();
};
