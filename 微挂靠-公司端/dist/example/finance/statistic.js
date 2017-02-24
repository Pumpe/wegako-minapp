// example/finance/statistic.js
var charts= require("../../moudel/chartMode")
Page({
    data: {
        payopen:false,
        isfull:false,
        width:0,
        height:0
    },
    onLoad:function(options){
      var that =this;
      wx.getSystemInfo({
        success: function (res) {
          that.setData({
            width: res.windowWidth,
            height: res.windowHeight,
          })
        }
      })
    },
    // 绘制图标
    initGraph:function(){
      let params = {}
      params.canvas_id = 'pieGraph'
      params.data = [{
        name: '挂靠',
        data: 78,
        color:'#ed7871',
        src:'../images/icon_code_l5.jpg'
      }, {
        name: '保险',
        data: 35,
        color:'#fdd283',
        src:'../images/icon_code_l4.jpg'
      }, {
        name: '行驶证',
        data: 78,
        color:'#377ac0',
        src:'../images/icon_code_l2.jpg'
      }, {
        name: '营运证',
        data: 63,
        color:'#8cd7ea',
        src:'../images/icon_code_l1.jpg'
      },{
        name:'二维',
        data:75,
        color:'#69ccb0',
        src:'../images/icon_code_l.png'
      },{
        name:'车贷',
        data:56,
        color:'#f46459',
        src:'../images/icon_code_l3.jpg'
      }]
      params.width = this.data.width

      charts.shapePie(params)

      params.canvas_id = 'lineGraph'
      params.ytitle = ''
      params.xcate = ['7月', '8月', '9月', '10月', '11月', '12月']
      params.data = [{
          name: '缴费收入情况',
          data: [0.15, 0.2, 0.45, 0.37, 0.4, 0.8],
          format: function (val) {
              return val.toFixed(2) + '万';
          }
      }]
      charts.shapeLine(params)

    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"账单统计"});
        this.initGraph();
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