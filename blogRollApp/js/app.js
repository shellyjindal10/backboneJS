
//Backbone Model
var Blog = Backbone.Model.extend({
	defaults:{
		author:'',
		title:'',
		url:''
	}
})

//Backbone Collections 
var Blogs = Backbone.Collection.extend({

})

//instantiate the 2 blogs 
var blogOne = new Blog({
	author:"shelly",
	title:"Explore Me Fully",
	url:"www.google.com"
})

var blogTwo = new Blog({
	author:"sudip",
	title:"Extraordinary things ",
	url:"www.yahoo.com"
})

//instantiate the collections 
var blogs = new Blogs([blogOne,blogTwo]);

//Blog Views 

