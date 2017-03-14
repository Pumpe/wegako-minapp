var app = getApp();
Page({
    data:{
        index:0,
        inputVal:'',
        oldVal:''
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"添加挂靠公司"});
    },
    onLoad:function(options){
        var i = options.i;
        var appid=app.data.appid;
        var param ={
            'index':i,
            'appid':appid
        }
        app.fetchApi('url/php',param,function(res){

        },function(){
            wx.showToast({
            title: '获取数据失败',
            icon: 'loading',
            duration: 1000
            })

            setTimeout(function(){
            wx.hideToast()
            },1200)
        },function(){
            console.log("keyi")
        })
    },
    getVal:function(e){
        var that= this;
        var Val = e.detail.value;
        var inputVal = that.data.inputVal;
        inputVal = Val;

        that.setData({
            inputVal:inputVal
        })
    },
    sure:function(){
        var that = this;
        var oldVal = that.data.oldVal;
        var inputVal = that.data.inputVal;
        var param = {
            'appid':'',
            'i':'',
            'val':''
        }
        
        if(inputVal == oldVal || !that.data.index){
            wx.navigateBack({url:'company'})
        }else{
            app.fetchApi('url',param,function(res){
                wx.navigateBack({url:'company'})
            })
        }
    },
    //删除
    del:function(){
        var that = this;
        var oldVal = that.data.oldVal;
        var inputVal = that.data.inputVal;
        var param = {
            'appid':'',
            'i':'',
            'val':''
        }
        if(!that.data.index){
            wx.navigateBack({url:'set'})
        }else{
            app.fetchApi('url',param,function(res){
                wx.navigateBack({url:'company'})
            })
        }
    }
})