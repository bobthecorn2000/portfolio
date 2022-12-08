var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;
var c = canvas.getContext('2d');

//c.fillStyle = 'rgba(255,0,0,0.5)';
//c.fillRect(100,100,100,100);
//c.fillStyle = 'rgba(0,0,255,0.5)';
//c.fillRect(400,100,100,100);
//c.fillStyle = 'rgba(0,255,0,0.5)';
//c.fillRect(300,300,100,100);
// 
//console.log(canvas);
//
//c.beginPath();
//c.moveTo(50,300);
//c.lineTo(300,100);
//c.lineTo(400,300);
//c.strokeStyle = "#fa34a3"
//c.stroke();

//c.beginPath();
//
//c.arc(300,300,30,0, Math.PI * 2,false);
//c.strokeStyle = 'blue'; 
//c.stroke();

//for (var i = 0; i < 100; i++) {
//    var x = Math.random() * canvas.width;
//    var y = Math.random() * canvas.height;
//c.beginPath();
//
//c.arc(x,y,30,0, Math.PI * 2,false);
//c.strokeStyle = 'blue'; 
//c.stroke();
//}
function Circle(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function () {
        c.beginPath();
        c.strokeStyle = 'blue';
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        c.stroke();
    }

    this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.width || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;
        this.draw();
    }
}

var circleArray = [];
for (var i = 0; i < 100; i++) {
    var radius = 30;
    var x = Math.random() * (canvas.width - radius * 2) + radius;
    var y = Math.random() * (canvas.height - radius * 2) + radius;
    var dx = (Math.random() - 0.5) * 5;
    var dy = (Math.random() - 0.5) * 5;
    var circle = new Circle(200, 200, dx, dy, radius);
    circleArray.push(new Circle(x, y, dx, dy, radius));
}


console.log(circleArray);
//var circle = new Circle(200,200,3,3,30)

//var x = Math.random() * canvas.width;
//var y = Math.random() * canvas.height;
//var dx = (Math.random() - 0.5) * 8;
//var dy = (Math.random() - 0.5) * 8;

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

animate();
