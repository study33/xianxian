freshSer.service('homeServices', ['$http', 'global', function($http, global){

	this.getHomeNavData = function(successCallback, errorCallback){
		$http.get(global.getGolbalPath()+'/data/home/homeNav.json')
		.success(function(data){
			//调用成功的回调方法
			//将请求的数据通过方法回传回去
			successCallback(data.categoryTreeInfo);
		})
		.error(function(error){
			errorCallback(error);
		});
	};

	this.getBannerListData = function(successCallback, errorCallback){
		$http.get(global.getGolbalPath()+"/data/home/homeBanners.json")
		.success(function(data){
			console.log(data.bannerInfo);
			var newData = data.bannerInfo.map(function(item, index){
				var newItem = {};
				newItem.id = item.id;
				newItem.imageUrl = item.imageUrl;
				return newItem;
			});
			successCallback(newData);
		})
		.error(function(error){
			errorCallback(error);
		});
	};
}]);
