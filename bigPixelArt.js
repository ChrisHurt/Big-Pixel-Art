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