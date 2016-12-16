//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },
  onLoad: function () {
  },
  navigate: function(){
    wx.redirectTo({
      url: '../list/list'
    })
  }
})
