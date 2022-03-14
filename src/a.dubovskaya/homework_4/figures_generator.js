const squareGenerate = document.querySelector(".square_generate");
const triangleGenerate = document.querySelector(".triangle_generate");
const circleGenerate = document.querySelector(".circle_generate");
const cleanField = document.querySelector(".clean_field");
//const colorOfFigure = document.querySelector("#color_of_figure");

class Figure {
    constructor(placeForFigures, top, left, color, classForFigures, number) {
        this.placeForFigures = document.querySelector(placeForFigures);
        this.top = document.querySelector(top);
        this.left = document.querySelector(left);
        this.color = document.querySelector(color);
        this.number = number;
        this.classForFigures = classForFigures;
    }
}
class Square extends Figure {
    constructor(placeForFigures, top, left, color, classForFigures, number) {
      super(placeForFigures, top, left, color, classForFigures, number);
    }
    generate() {
      let squareEl = document.createElement("div");
  
      squareEl.classList.add(`${this.classForFigures}`);
      squareEl.style.backgroundColor = `${this.color.value}`;
      squareEl.style.top = `${this.top.value}px`;
      squareEl.style.left = `${this.left.value}px`;
      squareEl.textContent = this.number;
  
      this.placeForFigures.append(squareEl);
    }
}
let square = new Square(
    ".field_for_figures",
    "#top_position",
    "#left_position",
    "#color_of_figure",
    "figure",
    1
);

class Triangle extends Figure {
    constructor(placeForFigures, top, left, color, classForFigures, number, triangleClass) {
      super(placeForFigures, top, left, color, classForFigures, number);
      this.triangleClass = triangleClass;
    }
    generate() {
      let squareEl = document.createElement("div");

      squareEl.classList.add(`${this.classForFigures}`);
      squareEl.style.top = `${this.top.value}px`;
      squareEl.style.left = `${this.left.value}px`;
      squareEl.textContent = this.number;
  
      let triangle = document.createElement("div");
      triangle.classList.add(`${this.triangleClass}`);
      triangle.style.borderBottom = `35px solid ${this.color.value}`;
  
      squareEl.append(triangle);
  
      this.placeForFigures.append(squareEl);
    }
}
let triangle = new Triangle(
    ".field_for_figures",
    "#top_position",
    "#left_position",
    "#color_of_figure",
    "figure",
    2,
    "triangle-up"
);
class Circle extends Figure {
    constructor(placeForFigures, top, left, color, classForFigures, number) {
      super(placeForFigures, top, left, color, classForFigures, number);
    }
    generate() {
      let el = document.createElement("div");
  
      el.classList.add(`${this.classForFigures}`);
      el.style.backgroundColor = `${this.color.value}`;
      el.style.top = `${this.top.value}px`;
      el.style.left = `${this.left.value}px`;
      el.textContent = this.number;
  
      this.placeForFigures.append(el);
    }
  }
  let circle = new Circle(
    ".field_for_figures",
    "#top_position",
    "#left_position",
    "#color_of_figure",
    "circle",
    3
);

function clean() {
    const container = document.querySelector(".field_for_figures");
    container.innerHTML = "";
}

squareGenerate.addEventListener("click", () => square.generate());
triangleGenerate.addEventListener("click", () => triangle.generate());
circleGenerate.addEventListener("click", () => circle.generate());
cleanField.addEventListener("click", () => clean());