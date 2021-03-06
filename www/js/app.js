// Define the app and get module dependencies
var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngSanitize', 'smokeControllers', 'smokeRoutes', 'smokeProviders']);


// NON-ANGULAR HELPER FUNCTIONS
// For the menu
function openMenu(){
  document.querySelector('nav').classList.add('visible');
}
function closeMenu(){
  document.querySelector('nav').classList.remove('visible');
}
// For the back button on every view
function goBack() {
  window.history.back();
}
// Tiles respond on touch
function explodeLi(element){
  element.style.opacity = "1 !important";
  element.style.animation = "explode 0.5s";
  element.style.animation = "explode 0.5s";
};
function refresh(){
  location.reload();
}

// Fastclick
if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}
