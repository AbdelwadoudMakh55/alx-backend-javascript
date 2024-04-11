import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    let car;
    if (this.cloneCar) {
      car = new Car();
    }
    return car;
  }
}
