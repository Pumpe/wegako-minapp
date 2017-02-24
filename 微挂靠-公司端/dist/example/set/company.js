var app = getApp();

Page({
    data:{
        company:['上海发财运输公司','上海顺丰快运'],
    },
    onReady: function () {
            wx.setNavigationBarTitle({title:"挂靠公司管理"});
        },
    onLoad:function(opt){
        var that =this,company=[];
        app.fetchApi('api/php','',function(res){
            company=res.data;
            that.setData({
                company:company
            })
        },'',function(){
            console.log("没有数据")
        })
    },
    open:function(e){
        var i= e.currentTarget.dataset.i;
        wx.navigateTo({
          url: 'addcomp?i='+i
        })
    }
})