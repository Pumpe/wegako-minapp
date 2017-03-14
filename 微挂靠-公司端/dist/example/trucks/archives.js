// example/truck/archives.js
var sliderLeft = 15; // 设置slider的两边空白
Page({
    data: {
        tabs: ["缴费", "档案", "车贷", "保险", "出险"],
        activeIndex: "0",
        sliderOffset: 0,
        sliderLeft: 0,
        files: []
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"车辆档案"});
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
    chooseImage: function (e) {
        var that = this;
        wx.chooseImage({
            sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: function (res) {
                // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                that.setData({
                    files: that.data.files.concat(res.tempFilePaths)
                });
            }
        })
    },
    previewImage: function(e){
        wx.previewImage({
            current: e.currentTarget.id, // 当前显示图片的http链接
            urls: this.data.files // 需要预览的图片http链接列表
        })
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
  },
  open: function(){
        wx.showActionSheet({
            itemList: ['正常运营', '已报废', '已报停', '已转出', '已过户'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        });
    }
})