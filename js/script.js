const board = document.querySelector(".board");
let pixel = document.createElement('div');
pixel.classList.add('pixel');
let height = parseInt(getComputedStyle(board).height.slice(0, this.length - 2));
let width = parseInt(getComputedStyle(board).width.slice(0, this.length - 2));
let color;
for (let i = 0; i < ((height / 10) * (width / 10)); i++) {
    pixel = document.createElement('div');
    pixel.classList.add('pixel');
    board.append(pixel);
}
function draw(){
    this.style.backgroundColor = "blue";
}
let pixels = document.querySelectorAll('.pixel');

pixels.forEach(item => item.addEventListener("click",draw));
