const GRID_SIZE = 512;

function sliceBg(atr) {
    if (atr.includes('background-color:'))
        atr = atr.slice(atr.indexOf(';')+1, atr.length+1).trim();
    return atr;
}

function setSquareColor(e) {
    e.target.setAttribute('style', `background-color: black; ${sliceBg(e.target.getAttribute('style'))}`);
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
    const glButton = document.querySelector('#grid-lines');
    const clearButton = document.querySelector('#clear');
    const sqrsize = GRID_SIZE / gridWH;

    container.innerHTML = "";

    for (let i = 0; i < gridWH*gridWH; i++)
    {
        const sqr = document.createElement('div');
        sqr.setAttribute('style', `width: ${sqrsize}px; height: ${sqrsize}px;`);
        sqr.classList.add('grid-square');
        sqr.classList.add('grid-square-border');
        container.appendChild(sqr);
        glButton.addEventListener('click', () => sqr.classList.toggle('grid-square-border'));
        clearButton.addEventListener('click',() =>
        sqr.setAttribute('style', `background-color: white; ${sliceBg(sqr.getAttribute('style'))}`));
    }
    gridDraw(container);
}

const slider = document.querySelector('.slider');
const sliderTxt = document.querySelector('#slider-value');
slider.addEventListener('input', function () {
    sliderTxt.textContent = `Grid size: ${2**slider.value}x${2**slider.value}`;
    createGrid(2**slider.value);
});

createGrid(2**slider.value);