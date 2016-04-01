var Album = Backbone.Collection.extend({

  model: Photo,
  initialize: function() {
  	this.index = 0;
   
  },

  changeIndex: function(photomodel) {
  	this.index = this.models.indexOf(photomodel);

  },
  
});
