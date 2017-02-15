// example/truck/truck.js
Page({
    data: {
        inputShowed: false,
        inputVal: "",
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
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"车辆档案管理"});
    },
    onLoad: function(){
        this.setData({
        one:['按创建时间顺序','按创建时间倒序','按上牌时间顺序','按上牌时间倒序'],
        two:['不限','挂靠公司1','挂靠公司2','挂靠公司3','挂靠公司4','挂靠公司5','挂靠公司6'],
        three:['不限','正常运营','已报停','已报废','已转出','已过户']
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
});