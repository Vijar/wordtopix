define([
	"marionette",
	"config/settings",
], function(Marionette){

	var App = new Marionette.Application();

	App.on("initialize:before", function() {
	});

	App.addRegions({
		headerRegion:"#header-region",
		mainRegion:"#main-region",
	});

	App.addInitializer(function(){	
		// require(["apps/header/header_app", "apps/nav/nav_app"], function(){
		// 	App.module("HeaderApp").start();
		// 	App.module("NavApp").start();
		// });
	});


	App.on('initialize:after', function() {
		if (Backbone.history) {
			require([
				// "apps/posts/posts_app",
				// "apps/sidebar/sidebar_app",
				// "apps/products/products_app",
				// // "apps/gurus/gurus_app",
				// // "apps/queens/queens_app",
				// "apps/users/users_app",
				// "apps/settings/settings_app",
				// "components/scroll/scroll_controller"
			], function(){
				Backbone.history.start({pushState: true});

				$(document).on('click', 'a:not([data-bypass])', function(e) {
					var href = $(this).attr('href');
					var protocol = this.protocol + '//';

					if (href.slice(protocol.length) !== protocol) {
						e.preventDefault();
						Backbone.history.navigate(href, true);
					}
				});
			});
		}
	});	

	return App;
});