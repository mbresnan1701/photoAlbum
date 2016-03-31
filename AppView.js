var AppView = Backbone.View.extend({

  // var myPhotos = new Backbone.Collection(photoData, {model: Photo});
  // var albumView = new AlbumView({collection: myPhotos});
  // var jumboView = new JumbotronView({model: myPhotos.models[0]});
  // $('body').append(albumView.$el);
  // $('body').append(jumboView.$el);

  initialize: function(params) {
    console.log(this.params);
    this.albumView = new AlbumView({collection: myAlbum});
    this.jumboView = new JumbotronView({model: myAlbum.models[0]});

    // this.songQueueView = new SongQueueView({collection: this.model.get('songQueue')});

  

  },

  render: function() {
    return this.$el.html([
      this.albumView.$el,
      this.jumboView.$el,
    ]);
  }

});
