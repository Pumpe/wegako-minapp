// example/finance/statistic.js
Page({
    data: {
        payopen:false,
        isfull:false
    },
  onReady: function () {
        wx.setNavigationBarTitle({title:"账单统计"});
    },
    listpay: function(e){
    if(this.data.payopen){
      this.setData({
        payopen:false,
        isfull:false
      })
    }else{
      this.setData({
        payopen:true,
        isfull:true
      })
    }
    console.log(e.target)
  },
  hidebg: function(e){
    this.setData({
      payopen:false,
      isfull:false
    })
  }
})