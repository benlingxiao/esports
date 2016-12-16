//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
		
  },
  onLoad: function () {
  	/**
  	 * 验证当前用户是否第一次登陆
  	 */
  	var that = this;
  	app.getUserInfo(function(user){

			app.login(123,function(data){
				var url = '';
				if(data.data.data){
					url = '../typeChose/typeChose';
				}else{
					url = '../list/list';
				}

				wx.redirectTo({
					url: url,
					success: function(){
					}
				})
			});
  	});
  }
})
