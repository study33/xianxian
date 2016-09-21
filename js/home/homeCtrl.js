freshfresh.controller('homeCtrl', ['$scope', 'homeServices', '$ionicSlideBoxDelegate', '$ionicSideMenuDelegate',function($scope, homeServices, $ionicSlideBoxDelegate,$ionicSideMenuDelegate){
	$scope.selectSlide = 0;

	//请求频道数据
	homeServices.getHomeNavData(
		function (data){
			$scope.navData = data;
			console.log($scope.navData);
		},
		networkError
	);

	//请求banner数据
	homeServices.getBannerListData(
		function (data){
			$scope.banners = data;
			//刷新轮播图
			$ionicSlideBoxDelegate.update();
		},
		networkError
	);

	function networkError(){
		alert('网络错误');
	}
	//导航点击事件
	$scope.navAction = function(index, id){
		$scope.selectSlide = index;
		$ionicSlideBoxDelegate.$getByHandle('home-box').slide(index);
	};
	//侧栏
	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleLeft();
  };

  	$scope.toggleRight = function () {
		$ionicSideMenuDelegate.toggleRight();
  	};
}]);
