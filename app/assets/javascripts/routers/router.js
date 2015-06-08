TrelloClone.Routers.Router = Backbone.Router.extend({
  
  initialize: function (options) {
    this._boardCollection = new TrelloClone.Collections.Boards();
    this.$rootEl = options.$el;
  },

  routes: {
    '': 'boardIndex',
    'boards/new': 'newBoard',
    'boards/:id': 'showBoard'
  },

  boardIndex: function () {
    var view = new TrelloClone.Views.BoardsIndex({ 
      collection: this.boardCollection()
    });
    this._swapView(view);
  },

  showBoard: function (id) {
    var board = this.boardCollection().getOrFetch(id); 
    var view = new TrelloClone.Views.BoardShow({
      model: board,
      collection: board.lists()
    });
    this._swapView(view);
  },

  newBoard: function () {
    var view = new TrelloClone.Views.BoardNew();
    this._swapView(view);
  },

  _swapView: function (newView) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = newView;
    this.$rootEl.html(this._currentView.render().$el)
  },

  boardCollection: function () {
    if (!this._boardCollection) {
      this._boardCollection = new TrelloClone.Collections.Boards();
    }
    this._boardCollection.fetch();
    return this._boardCollection;
  }

});
