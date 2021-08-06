"use strict";

//деструктуризация - особый способ создания переменной

const monitor = {
  matrix: "Ips",
  sizes: {
    width: {
      value: 50,
      unit: "cm",
    },
    heidth: {
      value: 20,
      unit: "cm",
    },
  },
  resolution: {
    horizontal: {
      value: 1920,
      unit: "px",
    },
    vertical: {
      value: 1080,
      unit: "px",
    },
  },
  color: "black",
  manufacturer: "Samsung",
  refreshRate: 60,
};
const {
  manufacturer,
  refreshRate,
  sizes: {
    heidth,
    heidth: strser,
    heidth: strser2,
    heidth: { value: heidthValue },
  },
  resolution: {
    vertical: { value: valueVertical, unit: unitVartical },
  },
  resolution,
} = monitor;
console.log(manufacturer, refreshRate, heidthValue);

console.log(valueVertical, unitVartical, resolution);

const arrs = [-999, 23, 4, 2];

const [first, ...restOfArray] = arrs;

const user1 = {
  name: "Test",
  lastname: "Testovich",
};
