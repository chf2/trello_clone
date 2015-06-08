TrelloClone.Views.BoardsIndex = Backbone.CompositeView.extend({

  template: JST['boards/index'],

  initialize: function () {
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addIndexItem);
    this.collection.each(this.addIndexItem.bind(this));
  },

  render: function () {
    var content = this.template({ collection: this.collection });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addIndexItem: function (board) {
    var subview = new TrelloClone.Views.BoardIndexItem({ model: board });
    this.addSubview('ul.board-list', subview);
  }

});
