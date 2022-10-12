const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

function createGrid() {
    const container = document.querySelector('.grid-container');
    for (let i = 0; i < GRID_WIDTH*GRID_HEIGHT; i++)
    {
        const sqr = document.createElement('div');
        sqr.classList.add('grid-square');
        container.appendChild(sqr);
    }
}

createGrid();