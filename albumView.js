var AlbumView = Backbone.View.extend({
  tagName: 'table',
  className: 'photoAlbum',
  
  render: function() {
    this.$el.html('');
    this.collection.each(function(photoModel) {
      this.$el.append(new PhotoView({model: photoModel}).$el);
    }, this);

    return this;
  },
  
  initialize: function() {
    this.render();
  }
  
});
