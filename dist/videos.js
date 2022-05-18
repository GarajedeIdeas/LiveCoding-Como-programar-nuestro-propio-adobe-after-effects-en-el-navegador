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

videoDOMEl.setAttribute("width", 1920 / 5);
videoDOMEl.setAttribute("height", 1080 / 5);

videoDOMEl.onplay = () => {
  videoDOMEl.className = "enabled";

  canvasDOMEl.setAttribute("width", videoDOMEl.width);
  canvasDOMEl.setAttribute("height", videoDOMEl.height);
  canvasDOMEl.style.display = "block";

  function videoPlayback() {
    ctx.drawImage(videoDOMEl, 0, 0, videoDOMEl.width, videoDOMEl.height);

    const imageData = ctx.getImageData(0, 0, videoDOMEl.width, videoDOMEl.height);

    const { data } = imageData;

    for (let i = 0; i < data.length - 1; i += 4) {
      data[i] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

    requestAnimationFrame(videoPlayback);
  }

  videoPlayback();
};
