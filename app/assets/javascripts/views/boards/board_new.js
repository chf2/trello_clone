TrelloClone.Views.BoardNew = Backbone.CompositeView.extend({
  template: JST['boards/new'],

  events: {
    'submit form.create-board': 'createBoard'
  },

  render: function () {
    this.$el.html(this.template());
    return this;
  },

  createBoard: function (event) {
    event.preventDefault();
    var params = $(event.currentTarget).serializeJSON();
    var board = new TrelloClone.Models.Board(params);
    board.save();
    Backbone.history.navigate('', { trigger: true })
  }
});