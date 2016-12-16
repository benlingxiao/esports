//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
  },
  /**
   * 选择问题
   */
  choseLevel: function(e){
    var el = e.target;
  	var level = el.dataset.value;
    wx.showToast({
      title: '正在跳转',
      icon: 'loading',
      duration: 2000
    });

    app.setLevel(level,function(data){
      if(data.data.result == 'SUCCESSS'){
        wx.hideToast();
        wx.navigateTo({
          url: '../list/list',
        });
      }
    });
  },

  /**
   * 跳过
   */
  nextStep: function(){
    wx.redirectTo({
      url: '../list/list'
    })
  }
})
