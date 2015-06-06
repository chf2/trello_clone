TrelloClone.Collections.Lists = Backbone.Collection.extend({
  url: 'api/lists',

  // parse: function (resp, options) {
  //   debugger;
  //   return resp;
  // },

  initialize: function (models, options) {
    this.board = options.board;
  },

  model: TrelloClone.Models.List

});
