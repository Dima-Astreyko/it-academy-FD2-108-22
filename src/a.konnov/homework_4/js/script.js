class Figure {
    static result = 0;
    constructor(top, left, color,result) {
        this.top = top;
        this.left = left;
        this.color = color;
        this.container = document.getElementById('container');
        this.result = result;
    }
    generateFigure() {
        this.creatElement = document.createElement("div");
        this.container.append(this.creatElement);
        this.marginTop()
        this.marginLeft()
        this.addColor()
        this.countFigure()
    }
    addColor() {
        this.creatElement.style.background = this.color;
    }
    marginTop() {
        this.creatElement.style.top = `${this.top}px`;
    }
    marginLeft() {
        this.creatElement.style.left = `${this.left}px`;
    }
    reset() {
        this.container.innerHTML = '';
    }
    countFigure(){
        if (this.color === '#000000') {
            this.creatElement.innerHTML = `<span class="white">${this.result}</span>`;
        } else {
            this.creatElement.innerHTML = `<span class="black">${this.result}</span>`;
        }
    }
}
let figure = new Figure(); // без этого не работает reset


class Square extends Figure {
    static count = 1;
    constructor(top, left, color) {
        super(top, left, color, Square.count++);
    }
    addFigure(){
        this.generateFigure();
        this.creatElement.classList.add(`square`);
    }
}

class Сircle extends Figure {
    static count = 1;
    constructor(top, left, color) {
        super(top, left, color, Square.count++);
    }
    addFigure(){
        this.generateFigure();
        this.creatElement.classList.add(`circle`);
    }
}

class Triangle extends Figure {
    static count = 1;
    constructor(top, left, color) {
        super(top, left, color, Square.count++);
    }
    addColor() {
        this.creatElement.style.borderBottomColor = this.color;
    }
    addFigure(){
        this.generateFigure();
        this.creatElement.classList.add(`triangle`);
    }
}

function createFigure(figure) {
    let top = document.getElementById('top').value;
    let left = document.getElementById('left').value;
    let color = document.getElementById('color').value;
    if (figure === 'square') {
    square = new Square(top, left, color);
    square.addFigure();
    console.log('start - square')
    }
    if (figure === 'circle') {
    circle = new Сircle(top, left, color);
    circle.addFigure();
    console.log('start - circle')
    }
    if (figure === 'triangle') {
    triangle = new Triangle(top, left, color);
    triangle.addFigure();
    console.log('start - triangle')
    }
}