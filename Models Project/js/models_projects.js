const Vehicle = Backbone.Model.extend({
    idAttribute: "registrationNumber",
    urlRoot: "api/vehicles",

    validate: attrs => {
    if (!attrs.registrationNumber)
        return "Registration is required.";
},

start: () => {
    console.log("Vehicle started")
}
});

const Car = Vehicle.extend({
    start: function () {
        console.log(`Car with registration number ${this.get("registrationNumber")} started`)
    }
});

const car = new Car({
    registrationNumber: "XLI887",
    color: "Blue"
});

car.unset("registrationNumber");

if (!car.isValid()) {
    console.log(car.validationError)
}

car.set("registrationNumber","XLI887")

if (car.isValid()) {
    console.log("The car is valid")
}

car.start();