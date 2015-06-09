TrelloClone.Views.ListNew = Backbone.View.extend({
  template: JST['lists/new'],

  className: 'new-list-form',

  events: {
    'submit form.new-list': 'newList'
   },

  newList: function (event) {
    event.preventDefault();

    var inputBox = this.$('form input[type=text]').eq(0)
    if (inputBox.val() === "") {
      inputBox.toggle('highlight');
      window.setTimeout(function () {
        inputBox.toggle('highlight');
      }, 0);
      return;
    }

    var params = $(event.currentTarget).serializeJSON();
    this.$('input[type=text]').val('');
    params.list.board_id = this.model.id;
    var list = new TrelloClone.Models.List(params);
    list.save({}, {
      success: function () {
        this.collection.add(list);
      }.bind(this)
    });
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this; 
  }
})