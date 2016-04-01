var JumbotronView = Backbone.View.extend({
  className:'jumbotron',
  jumboTemplate: _.template('<p class="jumbotitle"><%=title%></p><p class="rating">Rating: <%=rating%>\n</p><img src="<%=image%>">\
    <form class="changeRating">Change Rating: <select>\
  <option value="1">1</option>\
  <option value="2">2</option>\
  <option value="3">3</option>\
  <option value="4">4</option>\
  <option value="5">5</option>\
</select> </form> '),
  
  initialize: function(params) {

    this.render();
    console.log(this.model);
    this.model.on('change', this.render, this);

  },

  render: function() {
    console.log(this.model);
    var jumboTemplate = this.jumboTemplate;

    // this.$el.html(jumboTemplate(this.model.selected.attributes));
    this.$el.html(jumboTemplate(this.model.attributes));

    return this;
  }

});
