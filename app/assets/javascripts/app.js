console.log('we got app');

var app = (function(){

	var api = {
		views			 : {},
		models		 : {},
		collections: {},
		content		 : null,
		router		 : null,
		todos			 : null,
		init			 : function() {
			this.content = $("content");
			this.todos = new api.collections.Todos();
			ViewsFactory.menu();
			return this;
		},
		changeContent: function(el) {
			this.content.empty().append(el);
			return this;
		},
		title: function(str) {
			$("hi").text(str);
			return this;
		}
	};

	var ViewsFactory = {
		menu: function() {
			if(!this.menuView) {
					this.menuView = new api.views.menu({
						el: $("#menu")
					}),
					return this.menuView;
			}
		}
	};
	var Router = Backbone.Router.extend({});
	api.router = new Router();

	return api;


})();