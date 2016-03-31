var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    console.log(params);
    // this.set('currentSong', null);
    
    // this.get('songQueue').on('loaded', function(song){
    //   this.set('currentSong', this.get('songQueue').at(0));
    // }, this);

    this.selected = myAlbum.models[0];
    params.album.on('changeJumbo', function(photo){
      this.selected = photo;
    });
    
  }

});
