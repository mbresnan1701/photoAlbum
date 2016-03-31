var Album = Backbone.Collection.extend({

  model: Photo,
  initialize: function() {
  	this.selected = this.models[0];
  	this.on('changeJumbo', this.setSelected, this);
  },

  setSelected: function(photo){

  	this.selected = photo;
  }
    

});
