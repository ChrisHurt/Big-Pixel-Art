globalColour = null;

var setColor = (event) => {
    event.preventDefault();
    globalColour = document.querySelector('.color-value').value;
    document.querySelector('.brush-box').style.backgroundColor = globalColour;
    emptyColourInput();
}

var emptyColourInput = () => {
    globalColour = document.querySelector('.color-value').value = null;
}

document.querySelector('.set-color').addEventListener('click',setColor);

var addSquares = () => {
    var main = document.querySelector('main')
    for(var i = 0; i < 3000; i++){
        var square = document.createElement('div')
        square.classList.add('square');
        main.appendChild(square);
    }
}

addSquares();