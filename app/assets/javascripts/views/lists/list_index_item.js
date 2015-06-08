TrelloClone.Views.ListIndexItem = Backbone.CompositeView.extend({

  template: JST['lists/index_item'],

  className: 'list',

  events: {
    'click .delete-list': 'destroyList',
    'click .create-card': 'createCard'
  },

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model.cards(), 'add', this.addCard);
    this.model.cards().each(this.addCard.bind(this));
  },

  addCard: function (card) {
    var subview = new TrelloClone.Views.CardIndexItem({ model: card });
    this.addSubview('.list-cards', subview);
  },

  createCard: function (event) {
    event.preventDefault;
    if (this.$('form input[type=text]').eq(0).val() === "") {
      return;
    }
    var params = this.$('form').serializeJSON();
    this.$('input[type=text]').val('');
    params.card.list_id = this.model.id;
    var card = new TrelloClone.Models.Card(params);
    card.save({}, {
      success: function () {
        this.model.cards().add(card);
      }.bind(this)
    });
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
  }

});
