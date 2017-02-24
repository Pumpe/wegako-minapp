// example/finance/withdrawlist.js
Page({
  data: {
        payopen:false,
        isfull:false
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"提现记录"});
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