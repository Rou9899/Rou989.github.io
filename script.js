let colors = ["#0fa2fc", "#b4a1fb", "#d5cefd", "#f4e4f1", "#ffc1f9", "#ffa8fd"];

let n;
let apple, emoji;
let g;
let r;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CORNER);

  mouseX = width / 2;
  mouseY = height / 2;

  n = int(random(4, 16));

  g = int(random(16, 32));

  r = [];

  for (let x = 0; x < width; x += width / g) {
    for (let y = 0; y < height; y += width / g) {
      r.push({
        t: random(16, 64),
        c: random(colors),
        offR: random(0.01, 0.2),
        offS: random(0.6, 6)
      });
    }
  }
}

function draw() {
  clear();
  setGradient(color("#70e4fd"), color("#fcb9de"), 0, 0, width, height);

  let i = 0;
  for (let x = 0; x < width; x += width / g) {
    for (let y = 0; y < height; y += width / g) {
      push();
      translate(x, y);
      const w = color(r[i].c);
      w.setAlpha(255 * sin(radians(frameCount * r[i].t * 0.1)));
      fill(w);
      rect(0, 0, width / g, width / g);
      pop();
      i++;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function setGradient(c1, c2, x, y_, w, h, strkW = 1) {
  noFill();
  for (let y = y_; y < h; y++) {
    var inter = map(y, 0, h, 0, 1);
    var c = lerpColor(c1, c2, inter);
    strokeWeight(strkW);
    stroke(c);
    line(x, y, x + w, y);
  }
}

function invertColor(colorStr) {
  const c = color(colorStr);
  return color(255 - red(c), 255 - green(c), 255 - blue(c));
}

