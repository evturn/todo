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

	var ViewsFactory = {};
	var Router = Backbone.Router.extend({});
	api.router = new Router();

	return api;


})();