TrelloClone.Views.BoardIndexItem = Backbone.CompositeView.extend({
  template: JST['boards/index_item'],

  tagName: 'li',
  className: 'board-index-item',

  events: {
    'click .remove-board': 'destroyBoard'
  },

  destroyBoard: function () {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
})