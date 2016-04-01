var AppView = Backbone.View.extend({


  initialize: function(params) {
    this.albumView = new AlbumView({collection: myAlbum});
    this.jumboView = new JumbotronView({model: this.model.selected});
    // this.jumboView = new JumbotronView({model: this.model.get('selected')});
    this.newPhotoView = new NewPhotoView({collection: myAlbum});

  },


  render: function() {
    return this.$el.html([
      this.albumView.$el,
      this.jumboView.$el,
      this.newPhotoView.$el
    ]);
  },

});
