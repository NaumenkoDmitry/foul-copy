/*
class Human {
  constructor(name, lastName, age) {
    if (isNaN(age) || typeof age !== "number") {
      throw new TypeError("Age must be number");
    }
    if (age < 0) {
      throw new RangeError("Age must be positive number");
    }

    this.name = name;
    this.lastName = lastName;
    this._age = age;
  }
  get age() {
    return this._age;
  }
  set age(newAge) {
    if (isNaN(newAge) || typeof newAge !== "number") {
      throw new TypeError("Age must be number");
    }
    if (newAge < 0) {
      throw new RangeError("Age must be positive number");
    }
    this._age = newAge;
  }
}

const human1 = new Human("Test", "Testovich", 22);

class Car {
  constructor(weight, Speed, maxSpeed, name) {
    this.weight = weight;
    this.Speed = Speed;
    this.maxSpeed = maxSpeed;
    this.name = name;
  }
  get weight() {
    return this._weight;
  }
  set weight(newWeight) {
    if (isNaN(newWeight) || typeof newWeight !== "number") {
      throw new TypeError("Weight must be number");
    }
    if (newWeight < 0) {
      throw new RangeError("Weight must be positive number");
    }
    this._weight = newWeight;
  }
  /////////////
  get Speed() {
    return this._Speed;
  }
  set Speed(newSpeed) {
    if (isNaN(newSpeed) || typeof newSpeed !== "number") {
      throw new TypeError("Speed must be number");
    }
    if (newSpeed < 0) {
      throw new RangeError("Speed must be positive number");
    }
    this._Speed = newSpeed;
  }
  ///////////////
  get maxSpeed() {
    return this._maxSpeed;
  }
  set maxSpeed(newMaxSpeed) {
    if (isNaN(newMaxSpeed) || typeof newMaxSpeed !== "number") {
      throw new TypeError("MaxSpeed must be number");
    }
    if (newMaxSpeed < 0) {
      throw new RangeError("MaxSpeed must be positive number");
    }
    this._maxSpeed = newMaxSpeed;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    if (newName.trim() === "" || typeof newName !== "string") {
      throw new TypeError("Invilid type Name");
    }

    return (this._name = newName.trim());
  }
}
const cars = new Car(25, 150, 100, "lexus");

const cars2 = new Car(55, 330, 122, "mers");
const cars3 = new Car(11, 220, 33, "      ff dsd      ");*/


const thread = [];

class User {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
    this.isBanned = false;
  }
  getFullName() {
    return `${this.name} ${this.lastName}`;
  }
  createMessage(message) {
    thread.push(message);
    return message;
  }
}
class Moderator extends User {
  constructor(name,lastName,age,permissions){
    super(name,lastName,age);
    this.permissions = permissions;
  }
  deleteMessage(messageId) {
    thread.pop();
  }
  betterDeleteMessage(messageId) {
    thread = thread.filter((message, i) => {
      return messageId !== i;
    });
  }
}
class Admin extends Moderator {
  constructor(name, lastName, age, email,permissions) {
    super(name,lastName,age,permissions);
    this.email = email;
  }
  ban(user) {
    user.isBanned = true;
  }
}

const u1 = new User("Test", "tsts", 33);
const moder = new Moderator("oleg", "pavel", 22,{});
const admin = new Moderator("Feofam", "Semenovich", 25,
{canDeleteUsers:true,canDeleteMessage: true}, "semen456@gmail.com");