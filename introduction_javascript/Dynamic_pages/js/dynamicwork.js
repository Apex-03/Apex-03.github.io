const body = document.body;

const panel = document.createElement("div");
panel.setAttribute("class", "msgBox");
body.appendChild(panel);

// const msg = document.createElement("p");
// msg.textContent = "welcome to my website. this is a message box";
// panel.appendChild(msg);


// const closeBtn = document.createElement("button");
// closeBtn.textContent = "x";
// panel.appendChild(closeBtn);

const canvas = document.createElement("canvas");
// closeBtn.textContent = "x";
canvas.style.background = "lightblue";
canvas.width = 700;
canvas.height =700;
// canvas.style.border = "2px solid black";
// canvasfillText("hello", 100, 10);
// canvas.fillText("working with canvas", 100, 50);
panel.appendChild(canvas);

const ctx = canvas.getContext("2d");
ctx.fillStyle = "white";
ctx.font = "30px Arial";
ctx.fillText("hello, You good", 100, 50);


//adding an image
const img = new Image();
img.src = "images/peaky.jpg"; // Make sure the path is correct!
img.onload = function() {
  ctx.drawImage(img, 0, 0, 500, 500);
};





closeBtn.addEventListener("click", () => panel.parentNode.removeChild(panel),);

//adding text
// const text = document.createElement("p");
// text.textContent = "this will be gone soon!";
// panel.appendChild(text);


// //add another button for canceling the action
// const cancelBtn = document.createElement("button");
// cancelBtn.textContent = "cancel";
// panel.appendChild(cancelBtn);

// cancelBtn.addEventListener("click", () => panel.parentNode.removeChild(panel),);



