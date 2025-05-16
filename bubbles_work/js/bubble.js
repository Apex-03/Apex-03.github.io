var canvas = document.querySelector('canvas');
// var canvas = document.getElementById('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*
// c.fillRect(x ,y ,height ,width);

c.fillStyle = 'rgba(255, 0, 0, 0.78)'; // color of the rectangle
c.fillRect(100, 100, 100, 100);
c.fillStyle = '#afafaf'; 
c.fillRect(400, 100, 100, 100);
c.fillStyle = '#a8dfca'; 
c.fillRect(300, 300, 100, 100);
c.fillStyle = '#e8dfca';
c.fillRect(500, 500, 100, 100);
//console.log(canvas);  // to check if the canvas is working

// Line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "#babadc";  // color of the line
c.stroke();
*/
// Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = '#edbeadb';
// c.stroke();

// for (var i = 0; i < 3; i++) {
//     var x = Math.random() * window.innerWidth; // to get random circle position
//     var y = Math.random() * window.innerHeight;

//     c.beginPath();
//    // c.arc(300, 300, 30, 0, Math.PI * 2, false);
//     c.arc(x, y, 30, 0, Math.PI * 2, false);
//     c.strokeStyle = '#decade';
//     c.stroke();
// }



// c.beginPath();
// c.arc(200, 200, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();

function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false); // to draw a circle
        c.strokeStyle = 'gold';
        c.stroke();
        // c.fill();
    }

    this.update = function () {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for (var i = 0; i < 1000; i++) {
    var radius = 1;

    // var circle = new Circle(200, 200, 3, 3, 30);
    var x = Math.random() * (innerWidth - radius * 2) + radius;         // to get random circle position
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = (Math.random() - 0.1) * 4;   // to get random speed
    var dy = (Math.random() - 0.1) * 4;   // to get random speed
    circleArray.push(new Circle(x, y, dx, dy, radius));

}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);             // to clear the canvas

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();