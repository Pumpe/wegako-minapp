// example/notice/read.js
var sliderLeft = 15; // 设置slider的两边空白
Page({
    data: {
        tabs: ["未读(108)", "已读(288)"],
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0,
        inputShowed: false,
        inputVal: ""
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"公告详情"});
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
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: ""
        });
    },
    inputTyping: function (e) {
        this.setData({
            inputVal: e.detail.value
        });
    }
});