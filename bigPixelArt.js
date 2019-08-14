globalColour = null;
var main = document.querySelector('main')

var setColor = (event) => {
    event.preventDefault();
    globalColour = document.querySelector('.color-value').value;
    document.querySelector('.brush-box').style.backgroundColor = globalColour;
    emptyColourInput();
}

var emptyColourInput = () => {
    document.querySelector('.color-value').value = null;
}

var applyColor = (event) => {
    event.target.style.backgroundColor = globalColour;
}
var addSquares = () => {
    for(var i = 0; i < 3000; i++){
        var square = document.createElement('div')
        square.classList.add('square');
        main.appendChild(square);
        main.lastChild.addEventListener('mouseover',applyColor)
    }
}

addSquares();

var changeMainBackgroundToMovie = () => {
    movieTitle = document.querySelector('.movie-title').value.toString();
    $.ajax({
        method: 'get',
        url: 'http://www.omdbapi.com/?apikey=2f6435d9&t=' + movieTitle
    }).done(resp=>{
        console.log(resp.Poster);
        main.style.backgroundImage = `url(${resp.Poster})`;
    });
}

document.querySelector('.set-color').addEventListener('click',setColor);
document.querySelector('.omdb').addEventListener('click',changeMainBackgroundToMovie);