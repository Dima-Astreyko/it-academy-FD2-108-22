let buttonElem = document.querySelector(".circle_button");
let buttonElem2 = document.querySelector(".square_button");
let buttonElem3 = document.querySelector(".triangle_button");
let color = document.querySelector("#color");

class Figure {

    constructor(divElement) {
        this.divElement = document.querySelector(divElement);
        this.resultCircle = 1;
        this.resultSquare = 1;
        this.resultTriangle = 1;
    }

    generate() {
        this.creatElement = document.createElement("div");
        this.divElement.append(this.creatElement); 
    }

    countTriangle() {
        this.colorElements()
        if (this.color == "#000000") {
            let number = this.creatElement.innerHTML = `<span class="color spanPosition">${this.resultTriangle++}<span>`
        } else {
            let number = this.creatElement.innerHTML = `<span class="spanPosition">${this.resultTriangle++}<span>`
        }
    }

    countCircle() {
        this.colorElements()
        if (this.color == "#000000") {
            let number = this.creatElement.innerHTML = `<span class="color spanPosition">${this.resultCircle++}<span>`
        } else {
            let number = this.creatElement.innerHTML = `<span class="spanPosition">${this.resultCircle++}<span>`
        }
    }

    countSquare() {
        this.colorElements()
        if (this.color == "#000000") {
            let number = this.creatElement.innerHTML = `<span class="color spanPosition">${this.resultSquare++}<span>`
        } else {
            let number = this.creatElement.innerHTML = `<span class="spanPosition">${this.resultSquare++}<span>`
        }
    }

    createCircle() {
        this.generate()
        this.colorElements()
        this.moveTop()
        this.moveLeft()
        this.countCircle()
        this.creatElement.classList.add("circle")
        this.creatElement.style.zIndex = 1
    }

    createSquare() {
        this.generate()
        this.colorElements()
        this.moveTop()
        this.moveLeft()
        this.countSquare()
        this.creatElement.classList.add("square")
        this.creatElement.style.zIndex = 1
    }

    createTriangle() {
        this.generate()
        this.countTriangle()
        this.colorElements()
        this.moveTop()
        this.moveLeft()
        this.creatElement.classList.add("triangle")
        this.creatElement.style.borderTopColor = "white"
        this.creatElement.style.borderLeftColor = "white"
        this.creatElement.style.borderRightColor = "white"
        this.creatElement.style.borderBottomColor = color.value
        this.creatElement.style.zIndex = 0
    }

    colorElements() {
        this.color = document.querySelector("#color").value
        this.creatElement.style.background = this.color
    }

    moveTop() {
        this.top = document.querySelector("#top").value
        this.creatElement.style.top = `${this.top}px`
    }

    moveLeft() {
        this.left = document.querySelector("#left").value
        this.creatElement.style.left = `${this.left}px`
    }
}

let figure = new Figure(".div")
buttonElem.addEventListener("click", () => figure.createCircle())
buttonElem2.addEventListener("click", () => figure.createSquare())
buttonElem3.addEventListener("click", () => figure.createTriangle())