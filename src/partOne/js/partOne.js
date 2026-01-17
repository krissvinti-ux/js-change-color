//I parte, cambiar color y texto a darkblue

function changeColor(){
   
    const background = document.getElementById("background");
    background.style.backgroundColor = "darkblue";
};

function changeText(){
   
    const text = document.getElementById("text");
    text.innerHTML = "darkblue";
}; 

function changeStyles(){
   
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}
