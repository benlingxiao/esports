//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list:[]
  },
  onLoad: function () {
    var that = this;

    app.getOrderList(1,function(data){
      if(data.data.result == 'SUCCESS'){
        that.setData({list:data.data.data.resultList});
      }
    });
  }
})
