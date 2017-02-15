// example/trucks/paylist.js
Page({
    data: {
        content: [],
        pay: [],
        payopen:false,
        isfull:false,
        checked:true
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"黄蓉（沪C37946）"});
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
});