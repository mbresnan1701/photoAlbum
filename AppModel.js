var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.selected = myAlbum.models[0];
    params.album.on('changeJumbo', function(photo){
      console.log(this);
      this.selected = photo;
      console.log(this);
    });
    
  }

});
