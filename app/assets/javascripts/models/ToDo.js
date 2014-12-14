console.log('we got ToDo Model');

app.models.ToDo = Backbone.Model.extend({
    defaults: {
        title: "ToDo",
        archived: false,
        done: false
    }
});