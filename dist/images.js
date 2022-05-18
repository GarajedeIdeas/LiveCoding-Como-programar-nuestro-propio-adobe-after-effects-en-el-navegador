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

// const image = new Image();
// image.src = "img/cat.jpg";

// image.onload = () => {
//   canvasDOMEl.setAttribute("height", image.height);
//   canvasDOMEl.setAttribute("width", image.width);

//   // ctx.drawImage(image, 0, 0);

//   // const blur = new Blur({
//   //   radius: 5,
//   //   gaussian: true
//   // });

//   // blur.init();
//   // const xx = blur.blurRGBA(canvasDOMEl, null, true);
//   // ctx.drawImage(xx, 0, 0);
//   // const imageData = ctx.getImageData(0, 0, image.width, image.height);

//   // const { data } = imageData;

//   // for (let i = 0; i < data.length - 1; i += 4) {
//   //   const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
//   //   data[i] = avg;
//   //   data[i + 1] = avg;
//   //   data[i + 2] = avg;
//   // }

//   // ctx.putImageData(imageData, 0, 0);
// };
