//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  	pageNum: 1,
  	pageSize: 5,
  	list:[],
    current: 0
  },
  onLoad: function () {
  	var that = this;
    app.getGoodsList(that.data.pageNum,that.data.pageSize,function(data){
      if(data.data.result == "SUCCESS"){
    	  that.setData({
          list:data.data.data.resultList,
          pageNum: 1,
          pageSize: 5,
          current: 0
        });
      }
    });
  },

  /**
   * 商品滚动后
   */
  bindchange: function(e){
    var that = this;
    var current = e.detail.current;
    var length = that.data.list.length;
    that.setData({
      pageSize:that.data.pageSize,
      pageNum:that.data.pageNum,
      list:that.data.list,
      current:current
    });
    console.log(that.data.current);
    if(that.data.current>(length-2)){
      that.setData({
        pageSize: 5,
        pageNum:that.data.pageNum+1,
        current: that.data.current,
        list:that.data.list
      });

      app.getGoodsList(that.data.pageNum,that.data.pageSize,function(data){
        if(data.data.result == 'SUCCESS'){
          var list = that.data.list;
          list.push(data.data.list);
          that.setData({
            list:list,
            pageSize: 5,
            pageNum:that.data.pageNum,
            current: that.data.current,
          });
        }else{
          wx.showModal({
            title: '提示',
            content: data.data.message,
            showCancel: false,
            success: function(res) {
              
            }
          })
        }
      });
    }
  },

  /**
   * 提交订单
   */
  submitBtn: function(){
    var that = this;
    var current = that.data.current;
    var id = that.data.list[current].id;
    wx.showToast({
      title: '正在下单',
      icon: 'loading'
    })
    app.orderSubmit(id,1,function(data){
        wx.hideToast();
        console.log(data);
        if(data.data.result == 'SUCCESS'){
          wx.setStorage({
            key: 'orderId',
            data: data.data.data,
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
          wx.navigateTo({
            url: '../order-sub/order-sub'
          })
        }else{
          wx.showModal({
            title: '提示',
            content: data.data.message,
            showCancel: false,
            success: function(res) {
              
            }
          })
        }
    });
  }
})
