// pages/ability/setAbility2/setAbility2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone : "",
    email : "",
    charge : "",
    introduction : ""

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  // 获取数据
  getText1: function (e) {
    this.setData({
      introduction : e.detail.value
    })
    console.log(this.data.introduction);
  },

  getText2: function (e) {
    this.setData({
      phone: e.detail.value
    })
    console.log(this.data.phone);
  },

  getText3: function (e) {
    this.setData({
      email: e.detail.value
    })
    console.log(this.data.email);
  },

  getText4: function (e) {
    this.setData({
      charge: e.detail.value
    })
    console.log(this.data.charge);
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
  //  下一步
  next : function(){
    var that = this;
    var introduction = that.data.introduction;
    var phone = that.data.phone;
    var email = that.data.email;
    var charge = that.data.charge;    
    if (introduction == "" && phone == "" && email == "" && charge == ""){
      wx.showToast({
        title: '不能为空哦',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })      
    } else if (introduction == "" || introduction == ""){
      wx.showToast({
        title: '个人信息不能为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })  
    } else if (phone == "" || phone == " "){
      wx.showToast({
        title: '电话号码不能为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })  
    } else if (email == "" || email == " "){
      wx.showToast({
        title: '邮箱不能为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })  
    }else if(charge == "" || charge == " "){
      wx.showToast({
        title: '收费不能为空',
        image: "../../../img/ability/cw.png",
        duration: 2000
      })  
    }else {
    wx.navigateTo({
      url: '../massage/massage',
    })
    }
  }
,
// 返回
  back : function(){
    wx.showModal({
    title: '提示',
    content: '是否要返回上一页',
    success: function(res) {
      if (res.confirm) {
        console.log('用户点击确定')
        wx.navigateTo({
          url: '../setAbility/setAbility',
        })

      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    }
  })
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