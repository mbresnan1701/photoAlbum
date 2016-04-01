
var Photo = Backbone.Model.extend({

  defaults: {
  	rating: 1
  },
  
  initialize: function(){},

  setJumbo: function() {
  	this.trigger('changeJumbo', this); 
  },
  updateRating: function(newRating) {
  	this.rating = newRating;
  	this.trigger('ratingChange', this);
  }


});
