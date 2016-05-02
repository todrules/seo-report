angular.module('app.services', [])

.factory('menu', ['$location', '$rootScope', function ($location, $rootScope) {

	var sections = [{
		name: 'Dashboard',
		state: 'dashboard',
		type: 'link'
	}];
	sections.push({
		name: 'Charts',
		state: 'charts',
		type: 'link'
	});
	sections.push({
	      name: 'Content',
	      state: 'content',
	      type: 'link'
	  });
	sections.push({
	      name: 'Forms',
	      state: 'forms',
	      type: 'link'
	  });
	sections.push({
	      name: 'List',
	      state: 'list',
	      type: 'link'
	  });
	sections.push({
	      name: 'Table',
	      state: 'table',
	      type: 'link'
	  });



	var self;

	return self = {
		sections: sections,

		toggleSelectSection: function (section) {
			self.openedSection = (self.openedSection === section ? null : section);
		},
		isSectionSelected: function (section) {
			return self.openedSection === section;
		},

		selectPage: function (section, page) {
			page && page.url && $location.path(page.url);
			self.currentSection = section;
			self.currentPage = page;
		}
	};

	function sortByHumanName(a, b) {
		return (a.humanName < b.humanName) ? -1 :
			(a.humanName > b.humanName) ? 1 : 0;
	}

}]);