var AppModel = Backbone.Model.extend({

  initialize: function(params) {

    this.selected = myAlbum.models[0];
    params.album.on('changeJumbo', function(photo){
      this.selected = photo;
      this.trigger('selChanged', this);
    });
    // this.set('selected', myAlbum.models[0]);
    // params.album.on('changeJumbo', function(photo){
    //   // console.log(this.get('selected'));
    //   this.set('selected', photo);
    //   // console.log(this.get('selected'));

    //   // this.trigger('selChanged', this);
    //   // console.log(photo);
    // });
  }

});
