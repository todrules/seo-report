
(function() {
	'use strict';
	angular.module('angular-blu', ['ionic']);
})();
(function() {
	'use strict';
	angular.module('angular-blu').factory('BluUtil', [ '$ionicLoading', '$ionicPopup', function($ionicLoading, $ionicPopup) {
		
		return {
			showProgress: function () {
				var progress = $ionicLoading.show({
					template: '<p>Working...</p><ion-spinner></ion-spinner>',
					duration: 15000
				});
				return progress;
			},
			hideProgress: function () {
				var progress = $ionicLoading.hide();
				return progress;
			},
			showAlert: function() {
				var alertPopup = $ionicPopup.alert({
					title: 'Uh-oh...',
					subTitle: 'Something went wrong.',
					cssClass: 'alertStyle',
					okText: 'OK',
					okType: 'button-assertive'
				});
				return alertPopup;
			},
			showSuccess: function() {
				var alertPopup = $ionicPopup.alert({
					title: 'Successfully Saved',
					subTitle: 'Woo-hoo!',
					cssClass: 'successStyle',
					okText: 'OK',
					okType: 'button-royal'
				});
				return alertPopup;
			},
			showConfirm: function() {
				var confirmPopup = $ionicPopup.confirm({
					title: 'Confirmation',
					subTitle: 'Are you sure?',
					cssClass: 'confirmStyle',
					cancelText: 'No',
					cancelType: 'button-clear-favorite button-outline',
					okText: 'Yes',
					okType: 'button-primary'
				});
				return confirmPopup;
			},
			customConfirm: function(obj) {
				var template = {
					title: 'Confirmation',
					subTitle: 'Are you sure?',
					cssClass: 'confirmStyle',
					cancelText: 'No',
					cancelType: 'button-clear-favorite button-outline',
					okText: 'Yes',
					okType: 'button-primary'
				};
				var data = obj;
				if(typeof data === 'undefined') {
					return error;
				} else {
					if(data.title.length > 0) {
						template.title = data.title;
					}
					if(data.subTitle.length > 0) {
						template.subTitle = data.subTitle;
					}
					if(data.cssClass.length > 0) {
						template.cssClass = data.cssClass;
					}
					if(data.cancelText.length > 0) {
						template.cancelText = data.cancelText;
					}
					if(data.okText.length > 0) {
						template.okText = data.okText;
					}
					if(data.okType.length > 0) {
						template.okType = data.okType;
					}
					
					
				}
				
				return $ionicPopup.confirm(template);
			}
		}
		
	}]);
})();
