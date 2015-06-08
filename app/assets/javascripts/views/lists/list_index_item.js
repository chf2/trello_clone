TrelloClone.Views.ListIndexItem = Backbone.CompositeView.extend({

  template: JST['lists/index_item'],

  className: 'list',

  events: {
    'click .delete-list': 'destroyList',
    'click .add-card': 'addCard'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
    this.model.cards().each(this.addCard.bind(this));
  },

  destroyList: function (event) {
    event.preventDefault();
    this.model.destroy();
    this.remove();
  },

  render: function () {
    var content = this.template({ list: this.model });
    this.$el.html(content);
    this.attachSubviews();
    return this;
  },

  addCard: function (card) {
    var subview = new TrelloClone.Views.CardIndexItem({ model: card });
    this.addSubview('.list-cards', subview);
  }

});
