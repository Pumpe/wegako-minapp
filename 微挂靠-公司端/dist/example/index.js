Page({
    data: {
        hidden :true,
    },
    hiddenTips:function(){
        var that=this;
        that.setData({
            hidden:false
        })
    },
    onShareAppMessage: function () {
        return {
            title: '邀请车主加入',
            path: '/example/invite/invite'
        }
    }
});
