// Интерфейс Drivable
interface Drivable {
  accelerate(): void;
  brake(): void;
}

// Класс Vehicle
class Vehicle implements Drivable {
  constructor(
    public _brand: string,
    public _model: string,
    public _year: number | null,
    protected _speed: number
  ) {}

  accelerate() {
    console.log(`скорость ${this._brand} ${this._model} до: `, this._speed);
    this._speed += 10;
    console.log(`скорость ${this._brand} ${this._model} после: `, this._speed);
  }

  brake() {
    console.log(`скорость ${this._brand} ${this._model} до: `, this._speed);
    this._speed -= 10;
    console.log(`скорость ${this._brand} ${this._model} после: `, this._speed);
  }

  info() {
    console.log("марка:", this._brand);
    console.log("модель:", this._model);
    console.log("год выпуска:", this._year);
    console.log(
      `текущая скорость ${this._brand} ${this._model}: ${this._speed}км/ч`
    );
  }

  static compareByYear(a: Vehicle, b: Vehicle): number {
    if (a._year === null && b._year === null) return 0;
    if (a._year === null) return 1;
    if (b._year === null) return -1;
    return a._year - b._year;
  }
}

// Класс Car
class Car extends Vehicle {
  constructor(
    _brand: string,
    _model: string,
    _year: number | null,
    _speed: number,
    protected _fuelType: string
  ) {
    super(_brand, _model, _year, _speed);
  }

  refuel() {
    console.log(
      `Заправка автомобиля ${this._brand} ${this._model} топливом типа ${this._fuelType}.`
    );
  }
}

// Класс ElectricCar
class ElectricCar extends Car {
  constructor(
    _brand: string,
    _model: string,
    _year: number | null,
    _speed: number,
    _fuelType: string,
    protected _batteryLevel: number
  ) {
    super(_brand, _model, _year, _speed, _fuelType);
  }

  set batteryLevel(newBatteryLevel: number) {
    if (newBatteryLevel > 0 && newBatteryLevel <= 100) {
      this._batteryLevel = newBatteryLevel;
    } else {
      if (newBatteryLevel > 100) {
        this._batteryLevel = 100;
      } else {
        console.log("ошибка");
      }
    }
  }

  charge() {
    console.log(`Заряд батареи до зарядки: ${this._batteryLevel}%.`);
    this.batteryLevel = this._batteryLevel + 10;
    this.refuel();
    this.batteryLevel = this._batteryLevel + 10;
    console.log(
      `Заряд батареи прерван. Текущий уровень: ${this._batteryLevel}%.`
    );
  }

  refuel() {
    console.log(
      `Электромобиль ${this._brand} ${this._model} заряжается. Текущий уровень заряда: ${this._batteryLevel}%.`
    );
  }
}

// Функция testDrive
function testDrive(vehicle: Drivable) {
  console.log("Тест-драйв начат:");
  vehicle.accelerate();
  vehicle.brake();
  console.log("Тест-драйв завершен.");
}

// Создание массива транспортных средств
const vehicles: Vehicle[] = [
  new Car("Toyota", "Corolla", 2020, 110, "diesel"),
  new ElectricCar("Tesla", "Model S", 2022, 130, "", 50),
  new Car("Ford", "Mustang", 2018, 120, "petrol"),
  new ElectricCar("Nissan", "Leaf", 2021, 100, "", 70),
];



const myCar = new Car("Toyota", "Corolla", 2020, 110, "diesel");
myCar.accelerate();
myCar.brake();
myCar.info();
myCar.refuel();

const myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 130, "", 50);
myElectricCar.accelerate();
myElectricCar.brake();
myElectricCar.info();
myElectricCar.charge();

console.log("Транспортные средства,неотсортированные по году выпуска:");
vehicles.forEach((vehicle) => {
    console.log(`${vehicle._brand} ${vehicle._model} (${vehicle._year})`);
  });
vehicles.sort(Vehicle.compareByYear);
console.log("Транспортные средства, отсортированные по году выпуска:");
vehicles.forEach((vehicle) => {
    console.log(`${vehicle._brand} ${vehicle._model} (${vehicle._year})`);
  });
testDrive(vehicles[0]);
testDrive(vehicles[1]);
