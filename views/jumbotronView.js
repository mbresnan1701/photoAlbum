var JumbotronView = Backbone.View.extend({
  className:'jumbotron',
  jumboTemplate: _.template('<p class="jumbotitle"><%=title%></p><p class="rating">Rating: <%=rating%>\n \
    </p><img src="<%=image%>">\
    <form id="changeRating">Change Rating: \
    <select id="ratingselect"form="changeRating" name="ratings">\
  <option value="1">1</option>\
  <option value="2">2</option>\
  <option value="3">3</option>\
  <option value="4">4</option>\
  <option value="5">5</option>\
</select> <input type="submit" value="Submit"></form> '),
  
  initialize: function(params) {
    this.render();
    // this.collection.on('change', this.render, this);

  },
  events: {
    'submit #changeRating' : function(e) {
      e.preventDefault();
      var newRating = parseInt($('#ratingselect')['0'].value);
      
      this.collection.models[this.collection.index].updateRating(newRating);
 
      //update model with data
    }

  },

  render: function() {
    var jumboTemplate = this.jumboTemplate;

    // this.$el.html(jumboTemplate(this.model.selected.attributes));
    this.$el.html(jumboTemplate(this.collection.models[this.collection.index].attributes));

    return this;
  }

});
