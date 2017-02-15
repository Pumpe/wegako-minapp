// example/set/company.js
Page({
  onReady: function () {
        wx.setNavigationBarTitle({title:"挂靠公司管理"});
    },
  open: function(){
        wx.showActionSheet({
            itemList: ['修改挂靠公司名称', '删除挂靠公司'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        });
    }
})