const sun = new Image();
const moon = new Image();
const earth = new Image();
const ctx = document.getElementById("canvas").getContext("2d");


function init()  {
sun.src = "images.2/canvas_sun.png";
moon.src = "images.2/canvas_moon.png";
earth.src = "images.2/canvas_earth.png";
window.requestAnimationFrame(draw);
}

function draw() {
    ctx.globalCompositeOperation = "destination-over"; // this line is important
    ctx.clearRect(0, 0, 300, 300); // clear canvas

    ctx.fillStyle = "rbg(0 0 0 /40%)";
    ctx.strokeStyle = "rbg(0 153 255 /40%)";
    ctx.save();
    ctx.translate(150, 150);


    //Earth
    const time = new Date();
    ctx.rotate(
        ((2 * Math.PI) / 60) * time.getSeconds() + ((2 * Math.PI) / 60000) * time.getMilliseconds());
    ctx.translate(105, 0);
    ctx.fillRect(0, -12, 40, 24); // Shadow
    ctx.drawImage(earth, -12, -12);

    //Moon
    ctx.save();
    ctx.rotate(
        ((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds());
    ctx.translate(0, 28.5);
    ctx.drawImage(moon, -3.5, 3.5);
    ctx.restore();

    ctx.restore();


    ctx.beginPath();
    ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
    ctx.stroke();


    ctx.drawImage(sun, 0, 0, 300, 300);

    window.requestAnimationFrame(draw);

}

init();