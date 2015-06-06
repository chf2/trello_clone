TrelloClone.Views.BoardIndexItem = Backbone.CompositeView.extend({
  template: JST['boards/index_item'],

  tagName: 'li',
  className: 'board-index-item',

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    return this;
  }
})