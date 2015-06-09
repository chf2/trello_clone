TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: 'api/lists',

  comparator: function (list) {
    return list.escape('ord');
  },

  initialize: function (models, options) {
    this.board = options.board;
  },

  model: TrelloClone.Models.List

});
