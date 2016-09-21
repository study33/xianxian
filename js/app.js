var freshfresh = angular.module('xianxian',['ionic','fresh-service']);

freshfresh.config(['$stateProvider', '$urlRouterProvider', '$ionicConfigProvider', 'globalProvider', function($stateProvider, $urlRouterProvider, $ionicConfigProvider, globalProvider){
	$stateProvider
	.state('tabs', {
		url: '/tabs',
		templateUrl: 'views/tabs.html'
	})
	.state('tabs.home', {
		url: '/home',
		views: {
			'home': {
				templateUrl: 'views/home/home.html',
				controller: 'homeCtrl'
			}
		}
	})
	.state('tabs.top', {
		url: '/top',
		views: {
			'top': {
				templateUrl: 'views/top/top.html',
				// controller: 'topCtrl'
			}
		}
	})
	.state('tabs.category', {
		url: '/category',
		views: {
			'category': {
				templateUrl: 'views/category/category.html',
				// controller: 'categoryCtrl'
			}
		}
	})
	.state('tabs.me', {
		url: '/me',
		views: {
			'me': {
				templateUrl: 'views/me/me.html',
				// controller: 'meCtrl'
			}
		}
	});

	$urlRouterProvider.otherwise('/tabs/home');

	//配置全局风格
	$ionicConfigProvider.platform.ios.tabs.style('standard');
	$ionicConfigProvider.platform.android.tabs.style('standard');
	$ionicConfigProvider.platform.ios.tabs.position('bottom');
	$ionicConfigProvider.platform.android.tabs.position('bottom');
	$ionicConfigProvider.platform.ios.navBar.alignTitle('center');
	$ionicConfigProvider.platform.android.navBar.alignTitle('center');
	$ionicConfigProvider.platform.ios.backButton.previousTitleText('');
	$ionicConfigProvider.platform.android.backButton.previousTitleText('');

	globalProvider.globalPath = 'xx.consolelog.net';
}]);

var freshSer = angular.module('fresh-service', [ ]);

freshSer.provider('global', function(){
	this.globalPath = '';
	this.$get = function(){
		var that = this;
		var obj = {};
		obj.getGolbalPath = function(){
			return that.globalPath;
		};
		return obj;
	};

});
