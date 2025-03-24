class Vehicle {
    constructor() {
        this.brand = "";
        this.model = "";
        this.year = null;
        this.speed = 0; 
    }

    accelerate() {
        console.log(`скорость ${this.brand} ${this.model} до: `, this.speed);
        this.speed += 10; // 
        console.log(`скорость ${this.brand} ${this.model} после: `, this.speed);
    }

    brake() {
        console.log(`скорость ${this.brand} ${this.model} до: `, this.speed);
        this.speed -= 10; 
        console.log(`скорость ${this.brand} ${this.model} после: `, this.speed);
    }

    info() {
        console.log("марка:", this.brand);
        console.log("модель:", this.model);
        console.log("год выпуска:", this.year);
        console.log(`текущая скорость ${this.brand} ${this.model}: ${this.speed}км/ч`);
    }
}

class Car extends Vehicle {
    constructor() {
        super(); 
        this.fuelType = ""; 
    }

    refuel() {
        console.log(`Заправка автомобиля ${this.brand} ${this.model} топливом типа ${this.fuelType}.`);
    }
}

class ElectricCar extends Car {
    constructor() {
        super(); 
        this.batteryLevel = 0; 
    }

    charge() {
        this.batteryLevel += 20; 
        if (this.batteryLevel > 100) {
            this.batteryLevel = 100; 
        }
        console.log(`Заряд батареи увеличен. Текущий уровень: ${this.batteryLevel}%.`);
    }

    refuel() {
        console.log(`Электромобиль ${this.brand} ${this.model} заряжается. Текущий уровень заряда: ${this.batteryLevel}%.`);
    }
}

// Пример использования
const myCar = new Car();
myCar.brand = "Toyota";
myCar.model = "Corolla";
myCar.year = 2020;
myCar.speed = 110;
myCar.fuelType = "Бензин";
myCar.accelerate();
myCar.accelerate();
myCar.brake();
myCar.info();
myCar.refuel(); 

const myElectricCar = new ElectricCar();
myElectricCar.brand = "Tesla";
myElectricCar.model = "Model S";
myElectricCar.year = 2022;
myElectricCar.speed = 130;
myElectricCar.accelerate();
myElectricCar.accelerate();
myElectricCar.brake();
myElectricCar.info();
myElectricCar.refuel();
myElectricCar.charge(); 
myElectricCar.refuel(); 