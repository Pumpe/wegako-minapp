// example/set/insurance.js
Page({
  onReady: function () {
        wx.setNavigationBarTitle({title:"保险公司管理"});
    },
  open: function(){
        wx.showActionSheet({
            itemList: ['修改保险公司信息', '删除保险公司'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        });
    }
})