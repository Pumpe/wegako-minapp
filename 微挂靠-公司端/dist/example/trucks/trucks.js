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
        shownavindex:'',
        index:0,
        index2:0,
        index3:0
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
        one:[{'id':0,'val':'按创建时间顺序','checked':true},{'id':1,'val':'按创建时间倒序'},{'id':2,'val':'按上牌时间顺序'},{'id':3,'val':'按上牌时间倒序'}],
        two:[{'id':0,'val':'不限','checked':true},{'id':1,'val':'挂靠公司1'},{'id':2,'val':'挂靠公司2'},{'id':3,'val':'挂靠公司3'},{'id':4,'val':'挂靠公司4'},{'id':5,'val':'挂靠公司5'},{'id':6,'val':'挂靠公司6'}],
        three:[{'id':0,'val':'不限','checked':true},{'id':1,'val':'正常运营'},{'id':2,'val':'已报停'},{'id':3,'val':'已报废'},{'id':4,'val':'已转出'},{'id':5,'val':'已过户'}]
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
  },
  hidebg: function(e){
    this.setData({
      oneopen:false,
      twoopen:false,
      threeopen:false,
      isfull:false,
      shownavindex: 0
    })
  },
  select1:function(e){
    var i = e.currentTarget.dataset.index;
    var that = this;
    var index = that.data.index;
    index = i;
    that.setData({
      index:index      
    })
  },
  select2:function(e){
    var i = e.currentTarget.dataset.index;
    var that = this;
    var index2 = that.data.index;
    index2 = i;
    that.setData({
      index2:index2     
    })
  },
  select3:function(e){
    var i = e.currentTarget.dataset.index;
    var that = this;
    var index3 = that.data.index;
    index3 = i;
    that.setData({
      index3:index3     
    })
  }
});