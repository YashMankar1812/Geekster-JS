// You need to change the colour, background colour, margin, padding, font size, font weight, height, width of a div using DOM

function changeStyle() {
let a = document.getElementsByClassName("container");

for (let i = 0; i < a.length; i++) {
    a[i].style.backgroundColor = "yellow";
    a[i].style.color = "blue";
    a[i].style.margin = "20px";
    a[i].style.padding = "10px";
    a[i].style.fontSize = "18px";
    a[i].style.fontWeight = "bold";
    a[i].style.height = "200px";
    a[i].style.width = "300px";
}
}























