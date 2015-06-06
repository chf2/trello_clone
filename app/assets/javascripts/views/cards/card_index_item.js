TrelloClone.Views.CardIndexItem = Backbone.View.extend({

  template: JST['cards/index_item'],

  tagName: 'li',

  className: 'card-index-item',

  render: function () {
    var content = this.template({ card: this.model });
    this.$el.html(content);
    return this;
  }

});
