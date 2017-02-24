var app = getApp();
Page({
    data:{
        userData:[],
        userRelData:[]
    },
    onLoad:function(){
        var that =this;
        app.getStorage('userParam',function(res){
            var userData = res.data;
            that.setData({
                userData:userData
            })
        })
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"设置"});
    }
})