//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
  },
  navigate: function(){
    wx.navigateTo({
      url: '../list/list'
    });
  }
})
