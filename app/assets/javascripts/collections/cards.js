TrelloClone.Collections.Cards = Backbone.Collection.extend({
  url: 'api/cards',

  comparator: function (card) {
    return card.escape('ord');
  },

  initialize: function (models, options) {
    this.list = options.list;
  },

  model: TrelloClone.Models.Card

});
