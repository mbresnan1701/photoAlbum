
var PhotoView = Backbone.View.extend({
  tagName: 'tr',

  photoTemplate: _.template('<td class="phototitle"><%=title%></td>'),

  

  initialize: function() {
    this.render();
  },

  events: {
    'click' : function(){
      // console.log(this.model.collection);
      this.model.collection.changeIndex(this.model);
    }

  },
  
  render: function() {
    var myTemplate = this.photoTemplate;
    this.$el.html(myTemplate(this.model.attributes));
    return this;
  },
  
});