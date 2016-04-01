var NewPhotoView = Backbone.View.extend({
  tagName: 'tr',

  newTemplate: _.template('<form id="newPhoto">New Photo Url: \
    <input type="text" name="url" value="Enter Url"><br><br>\
    <input type="submit" value="Submit"></form> '),

  

  initialize: function() {
    this.render();
  },

  
  
  render: function() {
    var myTemplate = this.newTemplate;
    this.$el.html(myTemplate());
    return this;
  },
  
});