
class Figure{
  
  constructor(number){
    this.number = number;
    this.element = document.createElement('div');
    this.display = document.getElementById('display');
    this.color  = document.querySelector(".color").value
    this.top = document.querySelector('.inputTop').value;
    this.left = document.querySelector('.inputLeft').value;
  }

  colorSelection(){
    if(this.color == '#000000'){
      this.element.innerHTML = `<span style="color:white">${this.number}</span>`;
    }else{
      this.element.innerHTML = `<span style="color:#000">${this.number}</span>`;
    }
  }

  maxValue(){
    if(this.top > 360){ 
      this.element.style.top = '360px';
      alert('max значение top = 360px');
    }
    if(this.left  > 750){ 
      this.element.style.left = '750px';
      alert('max значение left = 750px');
    }
  }
  
  generate(){
      this.element.style.top = `${this.top}px`;
      this.element.style.left = `${this.left}px`;
      this.element.style.background =  this.color;
      this.maxValue()
      this.colorSelection()
      this.display.append(this.element);
  }  
}

class Square extends Figure{
  static number = 1;
  constructor(){
    super(Square.number++)  
  }
  createElement(){
    this.element.classList.add("square");
    this.generate();
  }
}

class Triangle extends Figure{
  static number = 1;
  constructor(){
    super(Triangle.number++)  
  }
  createElement(){
    this.element.classList.add("triangle");
    this.element.style.borderBottom=`40px solid ${this.color}`;
    this.generate();
    }
}

class Circle extends Figure{
  static number = 1;
  constructor(){
    super(Circle.number++)  
  }
  createElement(){
    this.element.classList.add("circle");
    this.generate();
  }
}

function addSquare(){
  const square = new Square();
  square.createElement();
}

function addTriangle(){
  const triangle = new Triangle()
  triangle.createElement();
}

function addCircle(){
  const circle = new Circle()
  circle.createElement();
}