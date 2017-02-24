// example/finance/account.js
Page({
  onReady: function () {
        wx.setNavigationBarTitle({title:"银行账号设置"});
    },
  data: {
        array: ['中国银行', '工商银行', '农业银行', '建设银行'],
        index: 0
    },
    bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
        this.setData({
            index: e.detail.value
        })
    }
})