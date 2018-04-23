var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
const app = getApp()
Page({
    data: {
      tabs: ["我接的单", "我下的单"],
        activeIndex: 0,
        sliderOffset: 0,
        sliderLeft: 0,
        Introduction: "我只是一段简短的商品简介",
        number : 1,
        pay : 20,
        id: "164654"
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
                    sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
                });
            }
        });
    },
    tabClick: function (e) {
        this.setData({
            sliderOffset: e.currentTarget.offsetLeft,
            activeIndex: e.currentTarget.id
        });
    },
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


// 跳转详情
  goDetails : function(){
    wx.navigateTo({
      url: '../order/order',
    })
  },
  goOrder : function(){
    wx.navigateTo({
      url: '../orderdetails/orderdetails',
    })
  }
});