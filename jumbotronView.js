var JumbotronView = Backbone.View.extend({
  className:'jumbotron',
  jumboTemplate: _.template('<p class="jumbotitle"><%=title%></p><p class="rating">Rating: <%=rating%>\n</p><img src="<%=image%>">'),
  
  initialize: function(params) {

    this.render();
    this.model.on('change', this.render, this);

  },

  render: function() {
    console.log(this.model);
    var jumboTemplate = this.jumboTemplate;

    this.$el.html(jumboTemplate(this.model.attributes));
    return this;
  }

});