
var myAlbum = new Album(photoData);
var app = new AppModel({album: myAlbum});

var appView = new AppView({model: app});

$('body').append(appView.render());

$('.changeRating').on('submit', function(data) {

  console.log(data);
});