
var Photo = Backbone.Model.extend({


  initialize: function(){},

  setJumbo: function() {
  	this.trigger('changeJumbo', this); 
  }


});
