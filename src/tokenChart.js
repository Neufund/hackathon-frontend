function Chart(config) {
  const canvas = document.getElementById(config.name); // eslint-disable-line
  canvas.width = config.width;
  canvas.height = config.height;
  this.options = {
    width: canvas.width,
    height: canvas.height,
  };
  this.context = canvas.getContext('2d');
  this.context.webkitImageSmoothingEnabled = true;

  // Canvas border
  this.context.strokeRect(0, 0, canvas.width, canvas.height);

  this.limit = config.limit;
  this.circleBackground = config.circleBackground;


  const handleMouseHover = (e) => {
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    const canvasBounding = canvas.getBoundingClientRect();

    const offsetX = canvasBounding.left;
    const offsetY = canvasBounding.top;

    const mx = parseInt(e.clientX - offsetX, 10) + (config.radius / 2);
    const my = parseInt(e.clientY - offsetY, 10) + (config.radius / 2);
    this.context.clearRect(0, 0, canvas.width, canvas.height); // for demo
    this.drawChart();

    // @TODO: Implement onMouseOut event
    if (mx >= this.circleX && mx <= this.circleX + (config.radius * 2) &&
      my >= this.circleY && my <= this.circleY + (config.radius * 2)) {
      this.circle(this.circleX, config.radius * 2, config.hoverBackground, true);
    } else {
      this.circle(this.circleX, config.radius, config.circleBackground, false);
    }
  };

  this.circle(config.initX, config.radius, config.circleBackground, true);
  canvas.addEventListener('mousemove', handleMouseHover);
}

function equation(x) {
  return (x * x) / 600;
}

Chart.prototype.drawChart = function () {
  this.context.beginPath();
  let x = 0;
  const limit = this.limit;
  this.context.setLineDash([2, 7]);
  this.context.moveTo(x, 0);
  while (x < limit) {
    const y = equation(x);
    this.context.lineTo(x, y);
    x += 10;
  }
  this.context.stroke();
};

let radius = 10;
let requestId;
function update(context, x, maxRadius, width, height, background, animate) {
  context.beginPath();
  // context.clearRect(x, y, radius , radius );
  const y = equation(x);
  radius = animate ? radius : maxRadius;
  context.clearRect(x, y, radius, radius);
  context.arc(x, y, radius, 0, 2 * Math.PI, false);
  context.fillStyle = background;// eslint-disable-line

  context.fill();
  radius += 1;


  requestId = requestAnimationFrame(() => { // eslint-disable-line
    if (animate) { update(context, x, radius, width, height, background); }

    if (radius > maxRadius) {
      radius = 10;
      cancelAnimationFrame(requestId);// eslint-disable-line
    }
  });
}


Chart.prototype.circle = function (x, maxRadius, background, animate) {
  this.circleX = x;
  this.circleY = equation(x);

  update(this.context, x, maxRadius, this.options.width, this.options.height, background, animate);
};


export default Chart;
