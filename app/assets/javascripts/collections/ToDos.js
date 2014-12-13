console.log('we got ToDo Collection');

app.collections.ToDos = Backbone.Collection.extend({
	initialize: function(){
		this.add({ title: "Take notes" });
		this.add({ title: "Code along" });
		this.add({ title: "Try to make sense of this" });
	},
	model: app.models.ToDo
	up: function(index){
		if(index > o) {
			var tmp = this.models[index-1];
			this.models[index] = tmp;
			this.trigger("change");
		}
	},
	down: function(index) {
		if(index < this.models.length-1) {
			var tmp = this.models[index+1];
			this.models[index] = tmp;
			this.trigger("change");
		}
	},
	archive: function(archived, index){
		this.models[index].set("done", done);
	}
});