//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    name:'',
    phone: '',
    addr:''
  },
  onLoad: function () {
    
  },

  setName: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      phone: that.data.phone,
      addr: that.data.addr,
      name: value
    });
  },
  setPhone: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      name: that.data.name,
      addr: that.data.addr,
      phone:value
    });
  },
  setAddr: function(e){
    var that = this;
    var value = e.detail.value;
    that.setData({
      name: that.data.name,
      phone: that.data.phone,
      addr:value
    });
  },

  submitBtn: function(){
    var that = this;

    var adata = {
      reciverName:that.data.name,
      reciverPhone:that.data.phone,
      addr:that.data.addr,
      isDefault:true
    };

    wx.showToast({
      title: '正在添加',
      icon: 'loading'
    })
    app.addAddr(adata,function(data){
      if(data.data.result == 'SUCCESS'){
        wx.hideToast();
        
        wx.navigateBack({delta:2});
      }
    });
  }
})
