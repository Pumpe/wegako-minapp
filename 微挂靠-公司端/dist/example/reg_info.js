var app = getApp();
Page({
    data:{
        userData:{
            'company':'',
            'tel':'',
            'address':'',
            'relAddress':'',
            'serviceTel':'',
            'claimTel':'',
            'name':'',
            'phone':''
        }
    },
    onLoad:function(){
        var that =this;
        
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"填写公司信息"});
    },
    getVal0:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.company = val;
        that.setData({
            userData:userData
        })
    },
    getVal1:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.tel = val;
        that.setData({
            userData:userData
        })
    },
    getVal2:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.relAddress = val;
        that.setData({
            userData:userData
        })
    },
    getVal3:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.serviceTel = val;
        that.setData({
            userData:userData
        })
    },
    getVal4:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.claimTel = val;
        that.setData({
            userData:userData
        })
    },
    getVal5:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.name = val;
        that.setData({
            userData:userData
        })
    },
    getVal6:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.phone = val;
        that.setData({
            userData:userData
        })
    },
    getAdd:function(e){
        var that =this;
        var val = e.detail.value;
        var userData = that.data.userData;
        userData.address = val;
        that.setData({
            userData:userData
        })
    },
    updata:function(){
        var that = this;
        var userData = that.data.userData;
        console.log(userData)
        for( var i in userData ){
            if(userData[i].value==null){
                wx.showToast({
                    title: '信息不能为空',
                    icon: 'loading',
                    duration: 1000
                })

                setTimeout(function(){
                    hideToast()
                },1000)
            }else{
                app.fetchApi('',userData,function(res){})
            }
        }


    }
})