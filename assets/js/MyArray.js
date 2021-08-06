class MyArray {
  constructor(...startingValues) {
    this.length = 0;

    //spread
    this.push(...startingValues);
  }

  // ... - рест оператор
  push(...incomingValues) {
    for (const value of incomingValues) {
      this[this.length++] = value;
    }
    return this.length;
  }

  unshift(...incomingValues) {
    for (let i = this.length - 1; i >= 0; i--) {
      this[i + incomingValues.length] = this[i];
    }
    for (let i = 0; i < incomingValues.length; i++) {
      this[i] = incomingValues[i];
    }
    this.length += incomingValues.length;
    return this.length;
  }
  [Symbol.iterator]() {
    let i = 0;
    const context = this;
    return {
      next() {
        return {
          value: context[i++],
          done: i < context.length,
        };
      },
    };
  }
}

const myArr1 = new MyArray(1, 2, 3, 4);

for (const value of myArr1) {
  console.log(value);
}
