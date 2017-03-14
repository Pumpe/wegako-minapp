// example/address/profile.js
var sliderLeft = 15; // 设置slider的两边空白
Page({
  data: {
        tabs: ["车主档案", "挂靠车辆", "活动轨迹"],
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0,
        carInfo:[
            {'src':'','num':'沪DD4690','mode':'正常营运','company':'上海发财运输'},
            {'src':'','num':'皖S8802','mode':'已报废','company':'中通快运'},
            {'src':'','num':'京A11001','mode':'正常营运','company':'菜鸟快递'}
        ],
        path:[
            {'time':'2016.10.1','coord':'上海市虹口区曲阳路336号'},
            {'time':'2016.11.1','coord':'上海市虹口区曲阳路36号'},
            {'time':'2016.12.1','coord':'上海市虹口区哈哈l路36号'},
            {'time':'2017.12.2','coord':'上海市虹口区货车路336号'}
        ]
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