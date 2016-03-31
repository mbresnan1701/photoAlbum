

// var myPhotos = new Backbone.Collection(photoData, {model: Photo});
// var albumView = new AlbumView({collection: myPhotos});
// var jumboView = new JumbotronView({model: myPhotos.models[0]});
// $('body').append(albumView.$el);
// $('body').append(jumboView.$el);

var myAlbum = new Album(photoData);
var app = new AppModel({album: myAlbum});

// // build a view for the top level of the whole app
var appView = new AppView({model: app});

// put the view onto the screen
$('body').append(appView.render());

