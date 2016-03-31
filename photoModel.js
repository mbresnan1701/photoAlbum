
var Photo = Backbone.Model.extend({


  initialize: function(){},

  setJumbo: function() {
  	console.log('model hit');
  	this.trigger('changeJumbo', this); 
  }


});
