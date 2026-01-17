//II parte, refactorizar para hacer toggle, nos basaremos en lo que hicimos en el archivo partOne.js

function changeColor(){
    //Escribe tu código aquí
    const background = document.getElementById("background");
    const current = background.style.backgroundColor;

    if (current === "darkblue") {
        background.style.backgroundColor = "red";
    } else {
        background.style.backgroundColor = "darkblue";
    }
};

function changeText(){
    //Escribe tu código aquí
    const text = document.getElementById("text");
    const current = text.innerHTML;

    if (current === "darkblue") {
        text.innerHTML = "red";
    } else {
        text.innerHTML = "darkblue";
    }
};

function changeStyles(){
    //Escribe tu código aquí
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}
