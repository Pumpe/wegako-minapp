// example/address/profile.js
var sliderLeft = 15; // 设置slider的两边空白
Page({
  data: {
        tabs: ["车主档案", "挂靠车辆", "活动轨迹"],
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:" "});
    },
    onLoad: function () {
        var that = this;
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    sliderWidth: res.windowWidth / that.data.tabs.length - sliderLeft*2
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
    calling:function(){
    wx.makePhoneCall({
      phoneNumber: '13800000000', //此号码并非真实电话号码，仅用于测试
      success:function(){
        console.log("拨打电话成功！")
      },
      fail:function(){
        console.log("拨打电话失败！")
      }
    })
  }
})