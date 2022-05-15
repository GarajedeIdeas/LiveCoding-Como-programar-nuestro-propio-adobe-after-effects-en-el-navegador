class Processor {
  constructor() {
    this.video = document.getElementById("video");
    this.canvas = document.getElementById("canvas");
    this.context = this.canvas.getContext("2d");

    this.video.addEventListener(
      "play",
      () => {
        requestAnimationFrame(this.updateCanvas.bind(this));
      },
      false
    );
  }

  updateCanvas() {
    if (this.video.ended || this.video.paused) {
      return;
    }

    this.context.drawImage(this.video, 0, 0, this.video.width, this.video.height);

    const imageData = this.context.getImageData(0, 0, this.canvas.width, this.canvas.height);
    const data = imageData.data;

    for (var i = 0; i < data.length; i += 4) {
      // var avg = (data[i] + data[i + 1] + data[i + 2]) / 1;
      data[i] = 255; // red
      data[i + 1] = data[i + 1]; // green
      data[i + 2] = data[i + 2]; // blue
    }

    this.context.putImageData(imageData, 0, 0, 0, 0, this.video.width, this.video.height);

    requestAnimationFrame(this.updateCanvas.bind(this));
  }
}

new Processor();
