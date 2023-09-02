const board = document.querySelector(".board");
let pixel = document.querySelector(".pixel");
let height = parseInt(getComputedStyle(board).height.slice(0, this.length - 2));
let width = parseInt(getComputedStyle(board).width.slice(0, this.length - 2));
let pixelSize = 30;
let color = "black";
const clearBtn = document.querySelector(".clear");
const eraserBtn = document.querySelector(".eraser");
const rainbowBtn = document.querySelector(".rainbow");
const colorPicker = document.querySelector(".color-picker");
const slider = document.querySelector(".slider");
let activeColor = "black";
let mouseDown = false;
let eraserOn = false;
let rainbowOn = false;
let rainbowCount = 0;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);
function createGrid(size) {
    for (let i = 0; i < ((height / size) * (width / size)); i++) {
        pixel = document.createElement('div');
        pixel.classList.add('pixel');
        pixel.style.cssText = `width: ${size}px; height:${size}px`;
        pixel.addEventListener("mousedown", draw);
        pixel.addEventListener("mouseover", draw);
        board.append(pixel);
    }
}

function resetGrid(size = pixelSize) {
    board.innerHTML = "";
    createGrid(size);
}

function draw(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    let colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink"];
    if (rainbowOn) {
        color = colors[rainbowCount];
        rainbowCount = (rainbowCount + 1) % 7;
    }
    this.style.backgroundColor = color;
}


function disableRainbow() {
    if (rainbowOn) {
        rainbowOn = false;
        rainbowBtn.classList.remove("clicked");
    }
}
function disableEraser() {
    if (eraserOn) {
        eraserOn = false;
        eraserBtn.classList.remove("clicked");
    }

}

function pickColor(e) {
    activeColor = e.target.value;
    color = activeColor;
    disableEraser();
    disableRainbow();
}

function toggleEraser() {
    if (eraserOn) {
        color = activeColor;
        eraserOn = false;
        eraserBtn.classList.remove("clicked");
    } else {
        color = "white";
        eraserOn = true;
        disableRainbow();
        eraserBtn.classList.add("clicked");
    }
}


function toggleRainbow() {
    if (rainbowOn) {
        color = activeColor;
        rainbowOn = false;
        rainbowBtn.classList.remove("clicked");
    } else {
        rainbowOn = true;
        disableEraser();
        rainbowBtn.classList.add("clicked");
    }
}
function sliderAction(){
    pixelSize = slider.value;
    resetGrid();
}
clearBtn.addEventListener("click", resetGrid);
eraserBtn.addEventListener("click", toggleEraser);
rainbowBtn.addEventListener("click", toggleRainbow);
slider.addEventListener("change", sliderAction);
document.body.onload = createGrid(pixelSize);













