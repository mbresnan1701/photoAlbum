var JumbotronView = Backbone.View.extend({

  jumboTemplate: _.template('<p class="jumbotitle"><p class="rating"><%=rating%><%=title%><img src="<%=image%>">'),
  
  render: function() {
    var jumboTemplate = this.jumboTemplate;

    this.$el.html(jumboTemplate(this.model.attributes));
    return this;
  },
  
  initialize: function() {
    this.render();
  }

});