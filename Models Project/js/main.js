
var Vehicle = Backbone.Model.extend({
	idAttribute: 'registrationNumber',
	urlRoot: 'api/vehicles',
	start: function() {
		console.log('Vehicle Started')
	},
	validate: function (attrs) {
		if (!attrs.registrationNumber)
			return 'Vehicle is not valid';
    }
});

var Vehicles = Backbone.Collection.extend({
	model: Vehicle
});


//Project 1
var Car = Vehicle.extend({
    start: function() {
        console.log("Car with registration number " + this.get('registrationNumber') + ' started.')
    }
});

var car = new Car({registrationNumber: 'XLI887', color: 'Blue'});

car.unset('registrationNumber');

if (!car.isValid())
	console.log(car.validationError);

car.set('registrationNumber', 'XLI887');

if (!car.isValid())
    console.log(car.validationError);

car.start();

//Project 2

var vehicles = new Vehicles();

var car1 = new Car({
    registrationNumber: 'XLI887',
	color: 'Blue'
});

var car2 = new Car({
    registrationNumber: 'ZNP123',
    color: 'Blue'
});

var car3 = new Car({
    registrationNumber: 'XUV456',
    color: 'Gray'
});

vehicles.add(car1);
vehicles.add(car2);
vehicles.add(car3);

var blueVehicles = vehicles.where({ color: 'Blue'});
var vehicle = vehicles.findWhere({ registrationNumber: 'XLI887'});
console.log(vehicles);
console.log(blueVehicles);
console.log(vehicle);

vehicles.each(function (vehicle) {
    console.log(vehicle);
});

console.log(vehicles.toJSON());