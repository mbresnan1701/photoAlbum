var JumbotronView = Backbone.View.extend({
  className:'jumbotron',
  jumboTemplate: _.template('<p class="jumbotitle"><%=title%></p><p class="rating">Rating: <%=rating%>\n \
    </p><img src="<%=image%>">\
    <form id="changeRating">Change Rating: \
    <select form="#changeRating" name="ratings">\
  <option value="1">1</option>\
  <option value="2">2</option>\
  <option value="3">3</option>\
  <option value="4">4</option>\
  <option value="5">5</option>\
</select> <input type="submit" value="Submit"></form> '),
  
  initialize: function(params) {

    this.render();
    console.log(this.model);
    this.model.on('change', this.render, this);

  },
  events: {
    'submit #changeRating' : function(e) {
      e.preventDefault();
      console.log(e);

      //update model with data
    }

  },

  render: function() {
    console.log(this.model);
    var jumboTemplate = this.jumboTemplate;

    // this.$el.html(jumboTemplate(this.model.selected.attributes));
    this.$el.html(jumboTemplate(this.model.attributes));

    return this;
  }

});
