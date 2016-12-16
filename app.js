//app.js
App({
  onLaunch: function () {
    
  },
  /**
   * 配置信息
   */
  config:{
    //path:"http://192.168.10.71:8080/xiaochengxu-server/"
    path:"https://sso.ifanr.com/hackathon/ruixin/xiaochengxu-server/"
  },
  /**
   * 信息存储
   */
  globalData:{
    userInfo:null
  },
  /**
   * 获取微信信息
   * @param {Object} cb
   */
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
            	var userInfo = res.userInfo
					    var nickName = userInfo.nickName
					    var avatarUrl = userInfo.avatarUrl
					    var gender = userInfo.gender //性别 0：未知、1：男、2：女 
					    var province = userInfo.province
					    var city = userInfo.city
					    var country = userInfo.country
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  /**
   * 验证是否为新用户
   */
  login: function(data,callback){
    var that = this;
    data = {
      	"openid":"SinKnight",
        "nickname":"SinKnight",
        "gender":1,
        "tags":[]
    }
    wx.request({
        method:"post",
			  url: that.config.path + 'user/login', //仅为示例，并非真实的接口地址
			  data: JSON.stringify(data),
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  /**
   * 设置默认收货地址
   * id:收货地址id
   */
  setDefaultAddr: function(id,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'addr/def?id='+id, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 添加收货地址
   * 	"sysUserId":1,
			"reciverName":"收件人",
			"reciverPhone":"13463999999",
			"addr":"广东省广州市天河区车陂幼儿园",
			"isDefault":true
   */
  addAddr: function(data,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'addr/add', //仅为示例，并非真实的接口地址
			  data: JSON.stringify(data),
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 删除收货地址
   * id: 地址id
   */
  delAddr: function(id,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'addr/del?id='+id, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 获取收货地址列表
   */
  getAddrList: function(callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'addr/get', //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 获取订单列表
   * page: 页码
   */
  getOrderList: function(page,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'order/get?page='+page, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 获取订单详情
   * id: 订单id
   */
  getOrderDetail: function(id,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'order/details?id='+id, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 设置用户消费水平
   * level: 
   */
  setLevel: function(level,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'user/consumption/set?clevel='+level, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 获取用户信息从服务器
   */
  getUserInfoFromServer: function(callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'user/info', //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  /**
   * 获取所有标签
   */
  getTags: function(callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'user/tag/all', //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 分页获取推荐商品
   */
  getGoodsList: function(pageNum,pageSize,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'commodity/recommend?pageNum='+pageNum+'&pageSize='+pageSize, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  },
  
  
  /**
   * 订单提交
   * cid: 商品id
   * count: 数量
   */
  orderSubmit: function(cid,count,callback){
  	var that = this;
  	wx.request({
        method:"post",
			  url: that.config.path + 'order/commit?cid='+cid+'&count='+count, //仅为示例，并非真实的接口地址
			  header: {
			      'content-type': 'application/json',
            'data-type': 'json'
			  },
			  success: function(res) {
          callback(res);
			  }
			});
  }
})