var numSquares = 6;
var picked;
var colors = [];

picked = pickRandomColor();
colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var rgbDisplay = document.getElementById("rgbDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var modeButtons = document.getElementsByClassName("mode");
var resetButton = document.getElementById("reset");


init();

function init() {

    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");

            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();

        });
    }

    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].addEventListener("click", function () {
            var clickedColor = this.style.backgroundColor;

            if (clickedColor === picked) {
                messageDisplay.textContent = "Correct answer";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again?"
            }
            else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try again";
            }
        });
    }

    reset();

}

resetButton.addEventListener("click", function () {
    reset();
})



function reset() {
    colors = generateRandomColors(numSquares);
    picked = pickRandomColor();
    messageDisplay.textContent = "";
    this.textContent = "new colors"
    rgbDisplay.textContent = picked;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];

        } else {
            squares[i].style.display = "none";
        }
    }

    h1.style.backgroundColor = "steelblue";
}


function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(numbersOfColors) {

    var arrayColor = [];

    for (var i = 0; i < numbersOfColors; i++) {
        arrayColor.push(randomColors());
    }

    return arrayColor;

}

function randomColors() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}