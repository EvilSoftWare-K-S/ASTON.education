var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Класс Vehicle
var Vehicle = /** @class */ (function () {
    function Vehicle(_brand, _model, _year, _speed) {
        this._brand = _brand;
        this._model = _model;
        this._year = _year;
        this._speed = _speed;
    }
    Vehicle.prototype.accelerate = function () {
        console.log("\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(this._brand, " ").concat(this._model, " \u0434\u043E: "), this._speed);
        this._speed += 10;
        console.log("\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(this._brand, " ").concat(this._model, " \u043F\u043E\u0441\u043B\u0435: "), this._speed);
    };
    Vehicle.prototype.brake = function () {
        console.log("\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(this._brand, " ").concat(this._model, " \u0434\u043E: "), this._speed);
        this._speed -= 10;
        console.log("\u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(this._brand, " ").concat(this._model, " \u043F\u043E\u0441\u043B\u0435: "), this._speed);
    };
    Vehicle.prototype.info = function () {
        console.log("марка:", this._brand);
        console.log("модель:", this._model);
        console.log("год выпуска:", this._year);
        console.log("\u0442\u0435\u043A\u0443\u0449\u0430\u044F \u0441\u043A\u043E\u0440\u043E\u0441\u0442\u044C ".concat(this._brand, " ").concat(this._model, ": ").concat(this._speed, "\u043A\u043C/\u0447"));
    };
    Vehicle.compareByYear = function (a, b) {
        if (a._year === null && b._year === null)
            return 0;
        if (a._year === null)
            return 1;
        if (b._year === null)
            return -1;
        return a._year - b._year;
    };
    return Vehicle;
}());
// Класс Car
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(_brand, _model, _year, _speed, _fuelType) {
        var _this = _super.call(this, _brand, _model, _year, _speed) || this;
        _this._fuelType = _fuelType;
        return _this;
    }
    Car.prototype.refuel = function () {
        console.log("\u0417\u0430\u043F\u0440\u0430\u0432\u043A\u0430 \u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044F ".concat(this._brand, " ").concat(this._model, " \u0442\u043E\u043F\u043B\u0438\u0432\u043E\u043C \u0442\u0438\u043F\u0430 ").concat(this._fuelType, "."));
    };
    return Car;
}(Vehicle));
// Класс ElectricCar
var ElectricCar = /** @class */ (function (_super) {
    __extends(ElectricCar, _super);
    function ElectricCar(_brand, _model, _year, _speed, _fuelType, _batteryLevel) {
        var _this = _super.call(this, _brand, _model, _year, _speed, _fuelType) || this;
        _this._batteryLevel = _batteryLevel;
        return _this;
    }
    Object.defineProperty(ElectricCar.prototype, "batteryLevel", {
        set: function (newBatteryLevel) {
            if (newBatteryLevel > 0 && newBatteryLevel <= 100) {
                this._batteryLevel = newBatteryLevel;
            }
            else {
                if (newBatteryLevel > 100) {
                    this._batteryLevel = 100;
                }
                else {
                    console.log("ошибка");
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    ElectricCar.prototype.charge = function () {
        console.log("\u0417\u0430\u0440\u044F\u0434 \u0431\u0430\u0442\u0430\u0440\u0435\u0438 \u0434\u043E \u0437\u0430\u0440\u044F\u0434\u043A\u0438: ".concat(this._batteryLevel, "%."));
        this.batteryLevel = this._batteryLevel + 10;
        this.refuel();
        this.batteryLevel = this._batteryLevel + 10;
        console.log("\u0417\u0430\u0440\u044F\u0434 \u0431\u0430\u0442\u0430\u0440\u0435\u0438 \u043F\u0440\u0435\u0440\u0432\u0430\u043D. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C: ".concat(this._batteryLevel, "%."));
    };
    ElectricCar.prototype.refuel = function () {
        console.log("\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043C\u043E\u0431\u0438\u043B\u044C ".concat(this._brand, " ").concat(this._model, " \u0437\u0430\u0440\u044F\u0436\u0430\u0435\u0442\u0441\u044F. \u0422\u0435\u043A\u0443\u0449\u0438\u0439 \u0443\u0440\u043E\u0432\u0435\u043D\u044C \u0437\u0430\u0440\u044F\u0434\u0430: ").concat(this._batteryLevel, "%."));
    };
    return ElectricCar;
}(Car));
// Функция testDrive
function testDrive(vehicle) {
    console.log("Тест-драйв начат:");
    vehicle.accelerate();
    vehicle.brake();
    console.log("Тест-драйв завершен.");
}
// Создание массива транспортных средств
var vehicles = [
    new Car("Toyota", "Corolla", 2020, 110, "diesel"),
    new ElectricCar("Tesla", "Model S", 2022, 130, "", 50),
    new Car("Ford", "Mustang", 2018, 120, "petrol"),
    new ElectricCar("Nissan", "Leaf", 2021, 100, "", 70),
];
var myCar = new Car("Toyota", "Corolla", 2020, 110, "diesel");
myCar.accelerate();
myCar.brake();
myCar.info();
myCar.refuel();
var myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 130, "", 50);
myElectricCar.accelerate();
myElectricCar.brake();
myElectricCar.info();
myElectricCar.charge();
console.log("Транспортные средства,неотсортированные по году выпуска:");
vehicles.forEach(function (vehicle) {
    console.log("".concat(vehicle._brand, " ").concat(vehicle._model, " (").concat(vehicle._year, ")"));
});
vehicles.sort(Vehicle.compareByYear);
console.log("Транспортные средства, отсортированные по году выпуска:");
vehicles.forEach(function (vehicle) {
    console.log("".concat(vehicle._brand, " ").concat(vehicle._model, " (").concat(vehicle._year, ")"));
});
testDrive(vehicles[0]);
testDrive(vehicles[1]);
