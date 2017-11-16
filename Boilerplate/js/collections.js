var Song = Backbone.Model.extend();

var Songs = Backbone.Collection.extend({
    model: Song
});

var songs = new Songs([
    new Song({ title: 'Song 1'}),
    new Song({ title: 'Song 2'}),
    new Song({ title: 'Song 3'})
]);

songs.add(new Song({ title: 'Song 4'}));

//songs.at(0)
//songs.get('c1')
//songs.remove(songs.at(0))
//songs.length

var firstsong = songs.at(0);

songs.add(new Song({ title: 'Song 1', genre: 'Jazz', downloads: 110}), { at: 0});
songs.push(new Song({ title: 'Song 2', genre: 'Jazz', downloads: 90}));

var jazzSongs = songs.where({ genre: 'Jazz'}); //Array
var firstJazzSong = songs.findWhere({ genre: 'Jazz'}); //One item in the array

console.log(jazzSongs);
console.log(firstJazzSong);

var topDownloads = songs.filter(function(song){
    return song.get('downloads') >100;
});

console.log('Top Downloads', topDownloads);

songs.each(function (song) {
    console.log(song);
});