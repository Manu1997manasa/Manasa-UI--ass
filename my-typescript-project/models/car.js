var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.getFormattedString = function () {
        return "".concat(this.make, " ").concat(this.model, " (").concat(this.year, ")");
    };
    return Car;
}());
var myCar = new Car('Toyota', 'Camry', 2023);
console.log(myCar.getFormattedString()); // Should output: "Toyota Camry (2023)"
