
let shape = document.querySelector("#star");
let btn = document.querySelectorAll("button");
let round = document.querySelector(".circle");
let arr=["star", "round", "diamond", "triangle", "arrow", "frame", "square","cross", "left-point", "right-point", "parallal", "cheg"];


btn[0].addEventListener("click", changeColor);
btn[1].addEventListener("click", changeShape);

//   For Change Color

function genarateColor(){
    let color = Math.floor(Math.random() * 255);
    return color;
}

function changeColor(){
    let newColor = `rgb(${genarateColor()}, ${genarateColor()}, ${genarateColor()})`;
    round.style.backgroundColor = newColor;
}
   

//   For Change Color 

function randomShape(){
    let idx = Math.floor(Math.random() * arr.length);
    return arr[idx];
}

function changeShape(){
    let idname = randomShape();
    shape.id = idname;
}



