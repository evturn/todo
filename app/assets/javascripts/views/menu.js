app.views.menu = Backbone.View.extend({
	initialize: function(){
		template: _.template($("tpl-menu").html()),
	},
	render: function(){
		this.$el.html(this.template({
			
		}));
	}
});