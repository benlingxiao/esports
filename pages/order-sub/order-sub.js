//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    order:null
  },
  onLoad: function () {

    var that = this;
    var id = '';
    wx.getStorage({
      key: 'orderId',
      success: function(res){
        id = res.data;
        console.log(id);
        app.getOrderDetail(id,function(data){
          if(data.data.result="SUCCESS"){
            that.setData({
              commodities:data.data.data.commodities[0],
              addr:data.data.data.addr,
              order:data.data.data.order
            });
          }
        })
      }
    });
    
  },

  navaaa:function(){
    wx.redirectTo({
      url: '../paySuc/paySuc',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
});
