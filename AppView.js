var AppView = Backbone.View.extend({


  initialize: function(params) {
    this.albumView = new AlbumView({collection: myAlbum});
    this.jumboView = new JumbotronView({model: this.model.selected});
    this.model.on('change', function() {
      console.log('heard chamnged');
    })
  },


  render: function() {
    return this.$el.html([
      this.albumView.$el,
      this.jumboView.$el,
    ]);
  },

});
