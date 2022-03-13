//
const container = document.getElementById("container__for-figures");

//
class Figure {
  constructor(top, left, color, number) {
    this.top = top;
    this.left = left;
    this.color = color;
    this.number = number;
  }

  createElement() {
    const div = document.createElement("div");
    div.classList.add("figure");
    div.style.top = `${this.top}px`;
    div.style.left = `${this.left}px`;
    div.style.backgroundColor = `${this.color}`;
    div.innerHTML = `<span class="centre">${this.number + 1}</span>`;
    if (this.left > 1025 || this.left < 0 || this.top > 425 || this.top < 0) {
      notificationNoFigure();
      return null;
    }
    return div;
  }
}

//
class Square extends Figure {
  createElement() {
    const squareDiv = super.createElement();
    squareDiv.classList.add("square");
    return squareDiv;
  }
}
class Triangle extends Figure {
  createElement() {
    const triangleDiv = super.createElement();
    triangleDiv.classList.add("triangle");
    return triangleDiv;
  }
}
class Circle extends Figure {
  createElement() {
    const circleDiv = super.createElement();
    circleDiv.classList.add("circle");
    return circleDiv;
  }
}

//
const squaresArray = [];
const trianglesArray = [];
const circlesArray = [];

//
function setParametrs() {
  topValue = document.getElementById("top").value;
  leftValue = document.getElementById("left").value;
  colorValue = document.getElementById("color").value;
}

//
function createSquare() {
  setParametrs();
  const square = new Square(
    topValue,
    leftValue,
    colorValue,
    squaresArray.length
  );
  const element = square.createElement();
  container.append(element);
  squaresArray.push(square);
}
function createTriangle() {
  setParametrs();
  const triangle = new Triangle(
    topValue,
    leftValue,
    colorValue,
    trianglesArray.length
  );
  const element = triangle.createElement();
  if (element.classList.contains("triangle")) {
    element.style.borderBottom = `75px solid ${colorValue}`;
    element.style.backgroundColor = `rgba(255, 255, 128, 0)`;
  }
  container.append(element);
  trianglesArray.push(triangle);
}
function createCircle() {
  setParametrs();
  const circle = new Circle(
    topValue,
    leftValue,
    colorValue,
    circlesArray.length
  );
  const element = circle.createElement();
  container.append(element);
  circlesArray.push(circle);
}

//additional
const buttons = document.querySelectorAll("button");
function notificationNoFigure() {
  Array.from(buttons).map((button) => button.setAttribute("disabled", false));
  const notification = document.getElementById("notification");
  notification.textContent =
    "Фигура не была создана, т.к. выходит за рамки допустимой области... Прости...";
  setTimeout(
    () =>
      (notification.textContent = "")(
        Array.from(buttons).map((item) => item.removeAttribute("disabled"))
      ),
    5000
  );
}
function cleanArea() {
  container.innerHTML = "";
  squaresArray.splice(0, squaresArray.length);
  trianglesArray.splice(0, trianglesArray.length);
  circlesArray.splice(0, circlesArray.length);
}
