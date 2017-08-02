function Chart(config) {
  const canvas = document.getElementById(config.name); // eslint-disable-line
  canvas.width = config.width;
  canvas.height = config.height;
  const BB = canvas.getBoundingClientRect();
  this.offsetX = BB.left;
  this.offsetY = BB.top;

  this.context = canvas.getContext('2d');

  // Canvas border
  // this.context.strokeRect(0, 0, canvas.width, canvas.height)

  this.radius = config.circleRadius;
  this.limit = config.limit;
  this.circleBackground = config.circleBackground;

  const handleMouseHover = (e) => {
    // tell the browser we're handling this event
    e.preventDefault();
    e.stopPropagation();

    const mx = parseInt(e.clientX - this.offsetX, 10);
    const my = parseInt(e.clientY - this.offsetY, 10);

    // @TODO: Implement onMouseOut event
    if (mx >= this.circleX && mx <= this.circleX + (config.circleRadius * 2) &&
      my >= this.circleY && my <= this.circleY + (config.circleRadius * 2)) {
      this.circle(this.circleX, config.hoverBackground);
    } else {
      this.circle(this.circleX, config.circleBackground);
    }

    console.log(mx, my, this.circleX, this.circleY);
  };

  canvas.addEventListener('mousemove', handleMouseHover);
}

Chart.prototype.equation = function (x) {
  return (x * x) / 600;
};

Chart.prototype.drawChart = function () {
  this.context.beginPath();
  let x = 0;
  const limit = this.limit;
  this.context.moveTo(x, 0);
  while (x < limit) {
    const y = this.equation(x);
    this.context.lineTo(x, y);
    x += 10;
  }
  this.context.stroke();
};

Chart.prototype.circle = function (x, background) {
  const context = this.context;
  const radius = this.radius;
  const y = this.equation(x);
  context.clearRect(x, y, radius * 2, radius * 2);
  context.beginPath();
  context.arc(x + radius, y + radius, radius, 0, 2 * Math.PI, false);
  context.fillStyle = background;

  context.fill();
  this.circleX = x;
  this.circleY = y;
  this.context.setTransform(1, 0, 0, 1, 0, 0);

  return this;
};

export default Chart;
