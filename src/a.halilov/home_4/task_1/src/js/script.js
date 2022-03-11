"use strict";

let addColor = document.getElementById("addColor");
let topLocation = document.getElementById("top");
let leftLocation = document.getElementById("left");


function circle(){
    
    let container = document.getElementById("container");
    let circle = document.createElement('div');
    container.append(circle);
    circle.classList.add("circle");
    circle.style.backgroundColor = addColor.value;
    circle.style.top = topLocation.value + "px";
    circle.style.left = leftLocation.value + "px";
    let clickCircle = 0;
    clickCircle++;
    circle.innerHTML = clickCircle;
    
}

function quadrate(){
    let container = document.getElementById("container");
    let quadrate = document.createElement('div');
    container.append(quadrate);
    quadrate.classList.add("quadrate");
    quadrate.style.backgroundColor = addColor.value;
    quadrate.style.top = topLocation.value + "px";
    quadrate.style.left = leftLocation.value + "px";
}

function triangle(){
    let container = document.getElementById("container");
    let triangle = document.createElement('div');
    container.append(triangle);
    triangle.classList.add("triangle");
    triangle.style.borderBottomColor = addColor.value;
    triangle.style.top = topLocation.value + "px";
    triangle.style.left = leftLocation.value + "px";
}















