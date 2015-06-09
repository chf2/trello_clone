TrelloClone.Views.BoardIndexItem = Backbone.CompositeView.extend({
  template: JST['boards/index_item'],

  tagName: 'li',
  className: 'board-index-item',

  events: {
    'click .remove-board': 'destroyBoard',
  },

  destroyBoard: function () {
    var modal = new TrelloClone.Modal();
    modal.open({ content: "<p>Howdy</p>", width: "200px", height: "200px" });
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