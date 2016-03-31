

var myPhotos = new Backbone.Collection(photoData, {model: Photo});
var albumView = new AlbumView({collection: myPhotos});
$('body').append(albumView.$el);