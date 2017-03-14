Page({
    data:{

    },
    onLoad:function(){
        
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"公司信息"});
    },
    sure:function(){
        wx.navigateBack({delta:1})
    },
    ch:function(){
        wx.redirectTo({url: '../reg_info'})
    }
})