

var myPhotos = new Backbone.Collection(photoData, {model: Photo});
console.log(myPhotos);
var albumView = new AlbumView({collection: myPhotos});
var jumboView = new JumbotronView({model: myPhotos.models[0]});
$('body').append(albumView.$el);
$('body').append(jumboView.$el);