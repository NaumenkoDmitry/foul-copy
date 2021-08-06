"use strict";

// class MyArray {
//   constructor(num) {
//     this.num = num;
//   }
//   static isMyArray(stat) {
//     if (stat instanceof MyArray) {
//       return true;
//     }
//     throw new TypeError(false);
//   }
//   push(...lens) {
//     return lens.reduce((prev, num) => {
//       return prev + num;
//     });
//   }
//   pop() {
//     delete this.num;
//   }
// }
// class drow {}
// const arg = new MyArray(2);
// const qwe = new drow();

class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  get from() {
    return this._from;
  }
  set from(numberForm) {
    if (isNaN(numberForm) || typeof numberForm !== "number") {
      throw new TypeError("from must be number");
    }
    return (this._from = numberForm);
  }
  get to() {
    return this._to;
  }
  set to(numberTo) {
    if (isNaN(numberTo) || typeof numberTo !== "number") {
      throw new TypeError("to must be number");
    }
    return (this._to = numberTo);
  }

  get range() {}
}
