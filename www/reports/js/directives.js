angular.module('app.directives', [])

.directive('menuLink', function () {
	return {
		scope: {
			section: '='
		},
		templateUrl: 'templates/menu-link.html',
		link: function ($scope, $element) {
			var controller = $element.parent().controller();

			$scope.focusSection = function () {
				// set flag to be used later when
				// $locationChangeSuccess calls openPage()
				controller.autoFocusContent = true;
			};
		}
	};
})
	
.directive('menuToggle', [ '$timeout', function($timeout){
	return {
		scope: {
			section: '='
		},
		templateUrl: 'templates/sidemenu.html',
		link: function($scope, $element) {
			var controller = $element.parent().controller();

			$scope.isOpen = function() {
				return controller.isOpen($scope.section);
			};
			$scope.toggle = function() {
				controller.toggleOpen($scope.section);
			};

			var parentNode = element[0].parentNode.parentNode.parentNode;
			if (parentNode.classList.contains('parent-list-item')) {
				var heading = parentNode.querySelector('h2');
				element[0].firstChild.setAttribute('aria-describedby', heading.id);
			}
		}
	};
}]);