const gridSize = 600;
const canvas = document.getElementById('grid-container');
const sizeInput = document.getElementById('cell-size');
let textSize = document.getElementById('text-size');
let textMode = document.getElementById('current-mode');

// buttons
const resetButton = document.getElementById('reset');
const randomButton = document.getElementById('random');
const colorButton = document.getElementById('color-picker');
const eraserButton = document.getElementById('eraser');
const blackButton = document.getElementById('black');
const outlineToggle = document.getElementById('outline');
// options
let mode = 2;
textMode.textContent = 'Current Mode: Black';
let outline = true;
//create grid
function createGrid() {
    canvas.innerHTML = '';
    let cellSize = parseInt(sizeInput.value, 10);
    for(let i = 0; i < cellSize*cellSize; i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.width = `${gridSize/cellSize}px`;
        cell.style.height = `${gridSize/cellSize}px`;
        cell.style.border = '1px solid black';
        canvas.appendChild(cell);
        textSize.textContent = `Grid Size: ${cellSize}x${cellSize}`;

        cell.addEventListener('click',Paint);

    }
}

createGrid();

// options
function Paint() {
    switch(mode){
        case 1: //RANDOM
            this.style.backgroundColor = randomColors();
            break;
        case 2: //BLACK
            this.style.backgroundColor = 'black';
            break;
        case 3: // ERASER
            this.style.backgroundColor = 'rgb(216, 216, 216)';
            break;
        case 4: // COLOR
            this.style.backgroundColor = `${colorButton.value}`;
            break;
    }

}
// RANDOM
function randomColors() {

    let colors= new Set();
        while(colors.size < 3) {
            let randomColor = Math.floor(Math.random() * 256);
            colors.add(randomColor);
        }
        let colorsArray = [...colors];
        return `rgb(${colorsArray[0]}, ${colorsArray[1]}, ${colorsArray[2]})`;

}

//input event listener
sizeInput.addEventListener('input', createGrid);

//button event listeners
randomButton.addEventListener('click', () => {mode = 1; textMode.textContent = 'Current Mode: Random';});
blackButton.addEventListener('click', () => {mode = 2;  textMode.textContent = 'Current Mode: Black';});
eraserButton.addEventListener('click', () => {mode = 3; textMode.textContent = 'Current Mode: Eraser';});
colorButton.addEventListener('click', () => {mode = 4;});
resetButton.addEventListener('click', () => {   
     document.querySelectorAll('.cell').forEach(cell => {
    cell.style.backgroundColor = 'rgb(216, 216, 216)';
    });
});
outlineToggle.addEventListener('click', () => {
    document.querySelectorAll('.cell').forEach(cell => {
        if(outline == true) {
            cell.style.border = '1px solid black';
        } else {
            cell.style.border = 'none';
        }
    });
    outline = !outline;
});
       