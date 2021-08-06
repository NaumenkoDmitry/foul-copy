"use strict";

class Figure {
  constructor(name) {
    this.name = name;
  }
  getArea() {
    return `Здесь была бы площадь если бы мы знали формулу`;
  }
}
class Triangle extends Figure {
  constructor(a, h) {
    super("Треугольник");
    this.a = a;
    this.h = h;
  }

  getArea() {
    return this.a * this.h * 0.5;
  }
}
class Square extends Figure {
  constructor(a) {
    super("Квадрат");
    this.a = a;
  }
  getArea() {
    return this.a * this.a;
  }
}

function getFigureArea(figure) {
  if (figure instanceof Figure) {
    return figure.getArea();
  }
  throw new TypeError("Это не фигура");
}

const testFigure = new Figure("Тестовая фигура");
const triagle = new Triangle(2, 5);
const t1 = new Triangle(10, 8);
const square = new Square(5);
