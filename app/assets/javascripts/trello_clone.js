window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $el = $('div#main');
    new TrelloClone.Routers.Router({ $el: $el });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
