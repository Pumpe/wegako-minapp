// example/set/admin.js
Page({
  onReady: function () {
        wx.setNavigationBarTitle({title:"管理员设置"});
    },
  open: function(){
        wx.showActionSheet({
            itemList: ['备注真实姓名','设置权限','删除管理员'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        });
    }
})