const GRID_WIDTH = 16;
const GRID_HEIGHT = 16;

function setSquareColor(e) {
    e.target.setAttribute('style', 'background-color: black;')
}

function gridDraw(gContainer){
    const squares = document.querySelectorAll('.grid-square');

    squares.forEach(function (sqr) {
        sqr.addEventListener('mousedown', setSquareColor);
    });

    gContainer.addEventListener('mousedown', function () {
        squares.forEach(function (sqr) {
            sqr.addEventListener('mouseover', setSquareColor);
        })
    });

    window.addEventListener('mouseup', function () {
        squares.forEach(function (sqr) {
            sqr.removeEventListener('mouseover', setSquareColor);
        });
    });
}

function createGrid() {
    const container = document.querySelector('.grid-container');
    for (let i = 0; i < GRID_WIDTH*GRID_HEIGHT; i++)
    {
        const sqr = document.createElement('div');
        sqr.classList.add('grid-square');
        container.appendChild(sqr);
    }
    gridDraw(container);
}

createGrid();