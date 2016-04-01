var NewPhotoView = Backbone.View.extend({
  

  newTemplate: _.template('<form id="newPhoto">New Photo Title: \
    <input type="text" id="newTitle" name="url" placeholder="Enter Title"><br><br> New Photo Url:\
    <input type="text" id="newUrl" name="url" placeholder="Enter Url"><br><br> \
    <input type="submit" value="Submit"></form> '),

  

  initialize: function() {
    this.render();


  },
  events: {
    'submit #newPhoto' : function(e) {
      e.preventDefault();
      var newPhoto = new Photo({title: $('#newTitle')['0'].value, image: $('#newUrl')['0'].value });
  
      this.collection.add(newPhoto);
  
    }

  },
  
  
  render: function() {
    var myTemplate = this.newTemplate;
    this.$el.html(myTemplate());
    return this;
  },
  
});