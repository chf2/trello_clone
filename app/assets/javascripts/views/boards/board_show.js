TrelloClone.Views.BoardShow = Backbone.CompositeView.extend({
  template: JST['boards/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.collection, 'add', this.addList);
    this.collection.each(this.addList.bind(this));
  },

  render: function () {
    var content = this.template({ board: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addList: function (list) {
    var subview = new TrelloClone.Views.ListIndexItem({ 
      model: list
    });
    this.addSubview('div.list-container', subview);
    x = this;
  }
});