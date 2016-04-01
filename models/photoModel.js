
var Photo = Backbone.Model.extend({

  defaults: {
  	rating: 1
  },
  
  initialize: function(){},

  updateRating: function(newRating) {
  	this.set('rating', newRating);
  	this.trigger('ratingChange', this);
  }


});
