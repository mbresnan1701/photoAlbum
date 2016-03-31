var JumbotronView = Backbone.View.extend({
  className:'jumbotron',
  jumboTemplate: _.template('<p class="jumbotitle"><%=title%></p><p class="rating">Rating: <%=rating%>\n</p><img src="<%=image%>">'),
  
  render: function() {
    var jumboTemplate = this.jumboTemplate;

    this.$el.html(jumboTemplate(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
  }

});