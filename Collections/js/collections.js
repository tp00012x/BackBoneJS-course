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

const Cars = Backbone.Collection.extend({
        model: Car
});

const cars = new Cars([
    new Car({ registrationNumber : "XLI887", color : "Blue" }),
    new Car({ registrationNumber : "ZNP123", color : "Blue" }),
    new Car({ registrationNumber : "XUV456", color : "Gray" })
]);

const blueCars = cars.where({color: "Blue"});
console.log(blueCars);

const car = cars.findWhere({registrationNumber: "XLI887"});
console.log(car);

cars.remove(car);

console.log(cars.toJSON());

cars.each(function(car) {
    console.log(car);
});