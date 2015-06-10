(function() {
  var app = angular.module('twistthetides', []);

  app.controller("BlogController", ["$scope", "$http", "$routeParams", "$location","ngDialog"], function() {

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