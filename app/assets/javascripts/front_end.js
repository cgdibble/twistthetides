(function() {
  var app = angular.module('twistthetides', []);

  app.controller("BlogController", ["$scope", "$http", "$routeParams", "$location","ngDialog"], function() {
  	// ping Rails endpoint to get blogs and display them approprietly
  		// have a button/spot they can click that will open up the comments on the blog post if there are any.
  });
})();

// The controller has a this.blog_posts
	// each blog_post has attributes (stored in the DB and retrieved):
		// -title
		// - date + time posted
		// - link to post/content in the directory
		// - [array, of, comments]
				// - Name(Default 'Anonymous')	
				// - title ??? (currently in the migration)
				// - Body
				// - date + time posted

