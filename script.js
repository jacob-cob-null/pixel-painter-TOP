const gridSize = 600;
const canvas = document.getElementById('grid-container');
const sizeInput = document.getElementById('cell-size');
let textSize = document.getElementById('text-size');

// buttons
const resetButton = document.getElementById('reset');
const randomButton = document.getElementById('random');
const colorButton = document.getElementById('color-picker');
const eraserButton = document.getElementById('eraser');
const blackButton = document.getElementById('black');

// options
let mode = 2;

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
<<<<<<< HEAD

        cell.addEventListener('click',Paint);
=======
        
        cell.addEventListener('mousedown',Paint);
        cell.addEventListener('mouseover',Paint);
>>>>>>> 46f5442 (Make event listener draggable)
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
randomButton.addEventListener('click', () => {mode = 1;});
blackButton.addEventListener('click', () => {mode = 2;});
eraserButton.addEventListener('click', () => {mode = 3;});
colorButton.addEventListener('click', () => {mode = 4;});
resetButton.addEventListener('click', () => {   
     document.querySelectorAll('.cell').forEach(cell => {
    cell.style.backgroundColor = 'rgb(216, 216, 216)';
    });
});