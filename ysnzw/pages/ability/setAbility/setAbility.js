// pages/ability/setAbility/setAbility.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textarea: {},
    label: '',
    flg : false,
    list: [],
    name : "",
    professional :"",
    ability : ""
  },
  //获取数据
  getText : function(e){
    this.setData({
      name : e.detail.value
    })
    console.log(this.data.name);
  },
  
  getText2 : function(e){
    this.setData({
      professional : e.detail.value
    })
    console.log(this.data.professional)
  },
  //获取表单的值
  getText3: function (e) {
    console.log('form发生了label事件，携带数据为：', e.detail.value)
    this.setData({ label: e.detail.value });
  },
  //页面跳转
  clickNext : function(e){
    var that = this;
    var name = that.data.name;
    var professional = that.data.professional;
    var label = that.data.label;
    console.log(name);
    console.log(professional);
    //判断
    if (professional == "" && label == ""){
      wx.showToast({
        title: '不能为空哦',
        image:"../../../img/ability/cw.png",
        duration: 2000
      })
    } else if (label == "" || label == " "){
      wx.showToast({
        title: '能力不能为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })
    } else if (professional == "" || professional == " "){
      wx.showToast({
        title: '职业不能为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })
    }else{
    wx.navigateTo({
      url: '../setAbility2/setAbility2',
    })
    }
  },
  // 添加标签
  add_after: function () {
    //要增加的数组
    var newarray = [{
      id: 5,
      name: this.data.label,
      count: 89
    }];
    var label = this.data.label;
    // name: this.data.label添加这里的数据
    if(label == ""){
      wx.showToast({
        title: '输入框为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })      
    }else{
    this.setData({
      'list': this.data.list.concat(newarray),
      "flg" : true,
      "msg" :"",
      "label":""
    });
    }
    // concat链接两个数组(newarray)在后则就是在数组后添加数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  //头像呢称获取
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})