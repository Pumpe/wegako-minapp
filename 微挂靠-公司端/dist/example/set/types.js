// example/set/types.js
Page({
  onReady: function () {
        wx.setNavigationBarTitle({title:"险种设置"});
    },
  open: function(){
        wx.showActionSheet({
            itemList: ['修改险种', '删除险种'],
            success: function(res) {
                if (!res.cancel) {
                    console.log(res.tapIndex)
                }
            }
        });
    }
})