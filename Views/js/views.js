const Song = Backbone.Model.extend();

// const Songs = Backbone.Collection.extend({
//     model: Song
// });

const SongView = Backbone.View.extend({

    // tagName: "li",
    // events: {
    //     "click": "onClick",
    //     "click .bookmark": "onClickBookmark"
    // },
    //
    // onClick: function(){
    //     console.log("Listen Clicked")
    // },
    // onClickBookmark: function (e) {
    //     e.stopPropagation();
    //     console.log("Bookmark Clicked")
    // },
    //
    // initialize: function(){
    //   this.model.on("change", this.render, this);
    // },
    //
    // onModelChange: function(){
    //     this.$el.addClass("SomeClass");
    // },

    render: function () {
        // this.$el.html(this.model.get("title") + " <button>Listen</button>");
        // this.$el.html(this.model.get("title") + " - Listeners: " + this.model.get("listeners"));
        //
        // this.$el.html(this.model.get("title"));
        // this.$el.attr("id", this.model.id);

        const template = _.template($("#songTemplate").html());
        const html = template(this.model.toJSON());
        this.$el.html(html);

        return this;
    }
});

// const SongsView = Backbone.View.extend({
//
//     tagName: "ul",
//
//     initialize: function (){
//         this.model.on("add", this.onSongAdded, this);
//         this.model.on("remove", this.onSongRemoved, this);
//
//     },
//
//     onSongAdded: function(song) {
//         const songView = new SongView({ model: song });
//
//         this.$el.append(songView.render().$el);
//     },
//
//     onSongRemoved: function(song) {
//         // this.$el.find("li#" + song.id).remove();
//         this.$("li#" + song.id).remove();
//     },
//
//     render: function () {
//         const self = this;
//
//         this.model.each(function(song) {
//             const songView = new SongView({ model: song });
//             self.$el.append(songView.render().$el);
//         });
//     }
// });

// const songs = new Songs([
//     new Song({ id: 1, title: "Blue in Green" }),
//     new Song({ id: 2, title: "So What" }),
//     new Song({ id: 3, title: "All Blues" })
// ]);

const song = new Song({ title: "Blue in Green", plays: 1100 });

const songView = new SongView({ el: "#container", model: song});
songView.render();

// const songsView = new SongsView({el: "#songs", model: songs});
// songsView.render();