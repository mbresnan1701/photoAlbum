
var PhotoView = Backbone.View.extend({
  tagName: 'tr',

  photoTemplate: _.template('<td class="phototitle"><%=title%></td>'),

  

  initialize: function() {
    this.render();
  },

  events: {
    'click' : function(){
      this.model.setJumbo();
    }

  },
  
  render: function() {
    var myTemplate = this.photoTemplate;
    this.$el.html(myTemplate(this.model.attributes));
    return this;
  },
  
});