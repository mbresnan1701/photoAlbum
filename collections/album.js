var Album = Backbone.Collection.extend({

  model: Photo,
  initialize: function() {
    this.index = 0;
    this.on('ratingChange', this.ratingChanged);
  },

  changeIndex: function(photomodel) {
  	this.index = this.models.indexOf(photomodel);
    this.trigger('indexChange', this);
  },

  ratingChanged: function(){
  	this.trigger('ratingChanged', this);
  }
  
});
