const GRID_SIZE = 512;

function setSquareColor(e) {
    e.target.setAttribute('style', `background-color: black; ${e.target.getAttribute('style')}`)
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

function createGrid(gridWH) {
    const container = document.querySelector('.grid-container');
    const sqrsize = GRID_SIZE / gridWH;

    container.innerHTML = "";

    for (let i = 0; i < gridWH*gridWH; i++)
    {
        const sqr = document.createElement('div');
        sqr.setAttribute('style', `width: ${sqrsize}px; height: ${sqrsize}px;`);
        sqr.classList.add('grid-square');
        container.appendChild(sqr);
    }
    gridDraw(container);
}

const slider = document.querySelector('.slider');
const sliderTxt = document.querySelector('#slider-value');
slider.addEventListener('input', function () {
    sliderTxt.textContent = `Grid size: ${slider.value}x${slider.value}`;
    createGrid(slider.value);
});

createGrid(slider.value);