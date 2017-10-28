var Song = Backbone.Model.extend({
    initialize: function () {
        console.log('A new song has been created.')
    }
});

var song = new Song();

//Javascript

var person = {};
person.name = 'Mosh';
console.log(person.name);

//Backbone, use set method
var Song = Backbone.Model.extend();
var song = new Song({
    title: 'Blue in Green',
    artist: 'Miles David',
    publisherYear: 1959
});

song.toJson(); //Converting to JSON
song.clear();
song.set('title', 'Blue in Green');
song.unset('title');

//Validation
var Song = Backbone.Model.extend({
    validate: function (attrs) {
        if (!attrs.title)
            return 'Title is required'
    }
});

//To see if a method is valid
song.isValid()

//To see the validation error
song.validationError

//Inheritance
var Animal = Backbone.model.extend({
    walk: function(){
        console.log('Animal walking')
    }
});

var Dog = Animal.extend({
    walk: function () {
        console.log('Dog Walking')
    }
});
var dog = new Dog();
dog.walk();

//Access walk from Animal and not from dog
var Dog = Animal.extend({
    walk: function () {
        Animal.prototype.walk.apply(this);
    }
});