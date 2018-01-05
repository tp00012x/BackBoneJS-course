const Song = Backbone.Model.extend({
    initialize: function () {
        console.log('A new song has been created.')
    }
});

const song = new Song();

//Javascript

const person = {};
person.name = 'Mosh';
console.log(person.name);

//Backbone, use set method
const Song = Backbone.Model.extend();
const song = new Song({
    title: 'Blue in Green',
    artist: 'Miles David',
    publisherYear: 1959
});

song.toJson(); //Converting to JSON
song.clear();
song.set('title', 'Blue in Green');
song.unset('title');

//Validation
const Song = Backbone.Model.extend({
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
const Animal = Backbone.model.extend({
    walk: function(){
        console.log('Animal walking')
    }
});

const Dog = Animal.extend({
    walk: function () {
        console.log('Dog Walking')
    }
});
const dog = new Dog();
dog.walk();

//Access walk from Animal and not from dog
const Dog = Animal.extend({
    walk: function () {
        Animal.prototype.walk.apply(this);
    }
});


const Song = Backbone.models.extend({
        defaults : {
            sexy: "me"
        }
    }
);

const crazySong = new Song({

});
