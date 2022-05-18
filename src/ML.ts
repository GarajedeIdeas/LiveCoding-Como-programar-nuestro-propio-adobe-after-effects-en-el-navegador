// Dani Vicario - test experiment (canvas)- Sun 15 May 2022 22:02:48 CEST

// Note: Require the cpu and webgl backend and add them to package.json as peer dependencies.
require("@tensorflow/tfjs-backend-cpu");
require("@tensorflow/tfjs-backend-webgl");
const cocoSsd = require("@tensorflow-models/coco-ssd");

const canvasDOMEl: HTMLCanvasElement | null = document.getElementById(
  "canvas"
) as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D | null = canvasDOMEl.getContext("2d");

const w = window.innerWidth;
const h = window.innerHeight;
const w2 = w / 2;
const h2 = h / 2;

const { PI } = Math;
const PI_DOUBLE = 2 * Math.PI;
const PI_HALF = Math.PI / 2;

function randomFloat(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function shuffle(array: number[]) {
  return array.sort(() => Math.random() - 0.5);
}

(async function ML() {
  const ratio = 6;

  const video = document.querySelector("video");

  video?.setAttribute("width", (2160 / ratio).toString());
  video?.setAttribute("height", (4096 / ratio).toString());

  canvasDOMEl?.setAttribute("width", (2160 / ratio).toString());
  canvasDOMEl?.setAttribute("height", (4096 / ratio).toString());

  if (video === null) return;

  // Load the model.
  const model = await cocoSsd.load();

  // video.onplay = async () => {
  //   async function videoPlay() {
  //     if (ctx === null) return;
  //     ctx.clearRect(0, 0, w, h);

  //     ctx.drawImage(video as CanvasImageSource, 0, 0, 2160 / ratio, 4096 / ratio);

  //     // Classify the image.
  //     const predictions = await model.detect(video);

  //     predictions.forEach((p: any) => {
  //       ctx.beginPath();
  //       ctx.rect(p.bbox[0] / ratio, p.bbox[1] / ratio, p.bbox[2] / ratio, p.bbox[3] / ratio);
  //       ctx.strokeStyle = `rgba(0, 100, 0, 1)`;
  //       ctx.stroke();
  //       ctx.closePath();
  //     });

  //     requestAnimationFrame(videoPlay);
  //   }

  //   videoPlay();
  // };
})();
