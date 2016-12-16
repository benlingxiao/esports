//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    addr:[]
  },
  onLoad: function () {
    var that = this;

    app.getAddrList(function(data){
      if(data.data.result == 'SUCCESS'){
        that.setData({list:data.data.data});
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
  },

  getAddrList: function(){
    app.getAddrList(function(data){
      if(data.data.result == 'SUCCESS'){
        that.setData({list:data.data.data});
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
  },
  /**
   * 删除
   */
  delAddr:function(e){
    var that = this;
    var id = e.target.dataset.id;

    wx.showModal({
      title: '提示',
      content: "确定删除吗？",
      success: function(res) {
          app.delAddr(id,function(data){
            if(data.data.result == 'SUCCESS'){
              app.getAddrList(function(data){
                if(data.data.result == 'SUCCESS'){
                  that.setData({list:data.data.data});
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
          });
      }
    })
  },

  navigator: function(e){
    var id = e.target.dataset.id;
    wx.setStorage({
      key: 'addrId',
      data: id,
      success: function(res){
        wx.navigateTo({
          url: '../addr-edit/addr-edit',
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
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
