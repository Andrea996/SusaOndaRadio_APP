var smokeRoutes = angular.module('smokeRoutes', [])

// WP api endpoint
var api = 'http://susaondaradio.it/wp-json/wp/v2/posts?_embed'

// ROUTES
smokeRoutes.config(function($stateProvider, $urlRouterProvider){
  // Send us back to the home route if we get lost
  $urlRouterProvider.otherwise('/home');
  $stateProvider
    // Home route
    .state('home', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
	// Contatti route
    .state('contatti', {
      url: '/contatti',
      templateUrl: 'views/contatti.html',
      controller: 'scheduleController'
    })
	// Contatti route
    .state('news', {
      url: '/news',
      templateUrl: 'views/news.html',
      controller: 'scheduleController'
    })
    // Single article view
    .state('single', {
      url: '/post/:slug',
      templateUrl: 'views/single.html',
      controller: 'singleController',
      // Get the data before displaying the view
      resolve: {
        post: function($stateParams, wpData){
          return wpData.getSinglePost($stateParams.slug);
        }
      }
    })
    // Category view
    .state('category', {
      url: '/category/:id',
      templateUrl: 'views/category.html',
      controller: 'categoryController',
    })

    .state('schedule', {
      url: '/schedule',
      templateUrl: 'views/contact.html',
      controller: 'scheduleController',
      // Get the data before displaying the view
      resolve: {
        schedule: function(radioData){
          return radioData.getSchedule();
        }
      }
    })
    .state('schedule.day', {
      url: '/:day',
      templateUrl: 'views/schedule-day.html',
      controller: 'scheduleDayController'
    })
})
