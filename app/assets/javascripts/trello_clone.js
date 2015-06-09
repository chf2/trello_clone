window.TrelloClone = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    $el = $('div#main');
    new TrelloClone.Routers.Router({ $el: $el });
    Backbone.history.start();    
  },

  Modal: function () {
    this.$overlay = $('div#overlay');
    this.$modal = $('div#modal');
    this.$content = $('div#modal-content');
    this.$close = $('a#close').text("X");
    this.$modal.append(this.$content, this.$close);

    this.initialize = function () {
      this.$close.on('click', function (event) {
        event.preventDefault();
        this.close();
      }.bind(this));
    };
    
    this.center = function () {
      this.$modal.css({
        top: Math.max($(window).height() - this.$modal.outerHeight(), 0) / 2 + $(window).scrollTop(),
        left: Math.max($(window).width() - this.$modal.outerWidth(), 0) / 2 + $(window).scrollLeft()
      });
    };

    this.open = function (settings) {
      this.$content.empty()
      this.$content.html(settings.content);

      this.$modal.css({
        width: settings.width || 'auto',
        height: settings.height || 'auto'
      });

      this.center.call(this);

      $(window).bind('resize.modal', this.center);

      this.$modal.show();
      this.$overlay.show();
    }

    this.close = function () {
      this.$modal.hide();
      this.$overlay.hide();
      this.$content.empty();
      $(window).unbind('resize.modal');
    };
  }
};

$(document).ready(function(){
  TrelloClone.initialize();
});
