// example/notice/select.js
Page({
    data: {
        inputShowed: false,
        inputVal: "",
        chartArr:['A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        textData:[{ "tag": "A", "textArray": [
                    {'letter':'A','name':'阿里','num':'沪b4654','id':'0.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'letter':'A','name':'阿里','num':'沪b4654','id':'0.1','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'letter':'A','name':'阿里','num':'沪b4654','id':'0.2','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'letter':'A','name':'阿里','num':'沪b4654','id':'0.3','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
                ] }, 
               { "tag": "B", "textArray": [
                    {'letter':'B','name':'布欧','num':'沪b4654','id':'1.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'letter':'B','name':'布欧','num':'沪b4654','id':'1.1','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'letter':'B','name':'布欧','num':'沪b4654','id':'1.2','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                    {'letter':'B','name':'布欧','num':'沪b4654','id':'1.3','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] },
               { "tag": "C", "textArray": [
                   {'letter':'C','name':'陈奕迅','num':'沪b4654','id':'2.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "D", "textArray": [
                   {'letter':'D','name':'大龙','num':'沪b4654','id':'3.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "E", "textArray": [
                   {'letter':'E','name':'Eson','num':'沪b4654','id':'4.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "F", "textArray": [
                   {'letter':'F','name':'芳芳','num':'沪b4654','id':'5.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "G", "textArray": [
                    {'letter':'G','name':'巩俐','num':'沪b4654','id':'6.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "H", "textArray": [
                   {'letter':'H','name':'贺龙','num':'沪b4654','id':'7.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "I", "textArray": [
                   {'letter':'I','name':'艾小青','num':'沪b4654','id':'8.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "J", "textArray": [
                   {'letter':'J','name':'吉利','num':'沪b4654','id':'9.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "K", "textArray": [
                   {'letter':'K','name':'柯震东','num':'沪b4654','id':'10.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "L", "textArray": [
                   {'letter':'L','name':'李亮','num':'沪b4654','id':'11.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "M", "textArray": [
                   {'letter':'M','name':'孟芳','num':'沪b4654','id':'12.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] },
               { "tag": "N", "textArray": [
                   {'letter':'N','name':'倪少','num':'沪b4654','id':'13.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "O", "textArray": [
                   {'letter':'O','name':'欧阳','num':'沪b4654','id':'14.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "P", "textArray": [
                   {'letter':'P','name':'怕什么','num':'沪b4654','id':'15.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "Q", "textArray": [
                   {'letter':'Q','name':'青睐','num':'沪b4654','id':'16.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "R", "textArray": [
                   {'letter':'R','name':'认可','num':'沪b4654','id':'17.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "S", "textArray": [
                   {'letter':'S','name':'思思','num':'沪b4654','id':'18.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "T", "textArray": [
                   {'letter':'T','name':'特特','num':'沪b4654','id':'19.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "U", "textArray": [
                   {'letter':'U','name':'油漆','num':'沪b4654','id':'20.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'},
                   {'letter':'U','name':'油漆','num':'沪b4654','id':'20.1','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "V", "textArray": [
                   {'letter':'V','name':'于挺','num':'沪b4654','id':'21.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "W", "textArray": [
                   {'letter':'W','name':'吴振','num':'沪b4654','id':'22.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "X", "textArray": [
                   {'letter':'X','name':'小正','num':'沪b4654','id':'23.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "Y", "textArray": [
                   {'letter':'Y','name':'压抑','num':'沪b4654','id':'24.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "Z", "textArray": [
                   {'letter':'Z','name':'浙江','num':'沪b4654','id':'25.0','avator':'http://soulferry.xyz/DEMO/avator.jpg'}
               ] }, 
               { "tag": "#", "textArray": [] }
               ],

        toView:'',
        height:'',
        hidden:false,
        length:33,
        searchRes:[],
        minKeys:[]
    },
    onLoad:function(options){
        var that =this;
        wx.getSystemInfo({
          success: function(res) {
            // success
            that.setData({
                height:res.windowHeight
            })
          }
        })

        var textData = this.data.textData;
        var searchRes = this.data.searchRes;
        for ( let na of textData ){
            na.textArray.forEach((item) => {
                searchRes.push(item)
            })
        }
        that.setData({
            searchRes:searchRes
        })
    },
    showInput: function () {
        this.setData({
            inputShowed: true
        });
    },
    hideInput: function () {
        this.setData({
            inputVal: "",
            inputShowed: false,
            minKey:[]
        });
    },
    clearInput: function () {
        this.setData({
            inputVal: "",
            minKey:[]
        });
    },
    inputTyping: function (e){
        var that = this;
        var textData = that.data.textData;
        var inputVal = e.detail.value;
        var data = that.data;
        var mindKeys = that.data.minKeys;
        mindKeys=[]
        var searchRes = that.data.searchRes;
        if(typeof(inputVal ) == "undefined" || inputVal.length == 0){
            mindKeys=[]
        }else{
            for(var i = 0; i <searchRes.length; i++){
                var Key1 = searchRes[i].name;
                var Key2 = searchRes[i].num;
                if(Key1.indexOf(inputVal ) > -1 || Key2.indexOf(inputVal)>-1){
                    mindKeys.push(searchRes[i]);
                }
            }
        }

        that.setData({
            inputVal,
            minKeys:mindKeys
        });

    },
    sortTap:function(e){
        var id= e.currentTarget.id,that=this;
        that.setData({
            toView:id,
            inputVal: "",
            inputShowed: false,
            minKey:[]

        })
    },
    onReady: function (options) {
        wx.setNavigationBarTitle({title:"发送范围"});
    }
})