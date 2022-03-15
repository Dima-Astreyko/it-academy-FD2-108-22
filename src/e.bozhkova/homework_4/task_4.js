class Figure {
	static count = 0;
	constructor(left, top, color, element){
		this.left = left;
		this.top = top;
		this.color = color;
		this.element = element;
	}

	styles(className, count){

		let figure = document.createElement('div');

		figure.classList.add(`${className}`);
	    figure.style.top = `${this.top}px`;
	    figure.style.left = `${this.left}px`;
	    figure.style.color = (this.color === '#000000') ? '#ffffff' : '#000000';
	    figure.textContent = count;

	    return figure;
	}
}

class Square extends Figure {
	constructor(left, top, color, element){
		super(left, top, color, element);
    	Square.count++;
	}

	createElement(){
		console.log('draw square')
		let square = super.styles('square', Square.count);
		square.style.backgroundColor = `${this.color}`;
	    this.element.append(square);
	}
}

class Triangle extends Figure {
	constructor(left, top, color, element){
		super(left, top, color, element);
		Triangle.count++;
	}

	createElement(){
		console.log('draw triangle');
		let triangle = super.styles('triangle', Triangle.count);
		triangle.style.borderBottom = `30px solid ${this.color}`;
	    this.element.append(triangle);
	    
	}
}

class Circle extends Figure {
	constructor(left, top, color, element){
		super(left, top, color, element);
		Circle.count++;
	}

	createElement(){
		console.log('draw circle');
		let circle = super.styles('circle', Circle.count);
		circle.style.backgroundColor = `${this.color}`;
	    this.element.append(circle);
	}
}