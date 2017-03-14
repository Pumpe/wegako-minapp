// example/yingyun/yingyun.js
Page({
    data: {
        content: [],
        one: [],
        two: [],
        three: [],
        oneopen:false,
        twoopen:false,
        threeopen:false,
        isfull:false,
        checked:true,
        shownavindex:''
    },
  onReady: function () {
        wx.setNavigationBarTitle({title:"营运证缴费管理"});
    },
    onLoad: function(){
        this.setData({
        one:['按到期时间','按发证时间顺序','按发证时间倒序'],
        two:['不限','9月','10月','11月','12月','2017年1月','2017年2月'],
        three:['不限','待缴费','已逾期','待审验','完成审验']
        })
    },
    listone: function(e){
    if(this.data.oneopen){
      this.setData({
        oneopen:false,
        twoopen:false,
        threeopen:false,
        isfull:false,
        shownavindex: 0
      })
    }else{
      this.setData({
        content:this.data.one,
        oneopen:true,
        twoopen:false,
        threeopen:false,
        isfull:true,
        shownavindex:e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  listtwo: function(e){
    if(this.data.twoopen){
      this.setData({
        oneopen:false,
        twoopen:false,
        threeopen:false,
        isfull:false,
        shownavindex: 0
      })
    }else{
      this.setData({
        content:this.data.two,
        oneopen:false,
        twoopen:true,
        threeopen:false,
        isfull:true,
        shownavindex:e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  listthree: function(e){
    if(this.data.threeopen){
      this.setData({
        oneopen:false,
        twoopen:false,
        threeopen:false,
        isfull:false,
        shownavindex: 0
      })
    }else{
      this.setData({
        content:this.data.three,
        oneopen:false,
        twoopen:false,
        threeopen:true,
        isfull:true,
        shownavindex:e.currentTarget.dataset.nav
      })
    }
    console.log(e.target)
  },
  hidebg: function(e){
    this.setData({
      oneopen:false,
      twoopen:false,
      threeopen:false,
      isfull:false,
      shownavindex: 0
    })
  }
})