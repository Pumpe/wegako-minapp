var app = getApp();

Page({
    data: {
        titVal: [],
        idx:0,
        selected:[],//选择接收人
        title:'',//文章标题
        titleData:[],//文章的主要内容
        wheight:0,
        textShow:false
    },
    onReady: function () {
        wx.setNavigationBarTitle({title:"发布公告"});
    },
    onLoad:function(options){
        var that=this;
        var titleData=that.data.titleData;

        app.getStorage('titleData',function(res){
            if(res.data){
                titleData=res.data
            }else{
                titleData=[]
            }
        },'',function(){
            that.setData({
                titleData:titleData
            })
            app.getStorage('itemData',function(res){
                var idx = res.data[0].index,
                  text= res.data[0].text;
                if(!idx){
                    console.log("a")
                    titleData.push({'src':'','text':text})
                }else{
                    titleData[idx].text=text
                }
            },function(){
                that.setData({
                    titleData:titleData
                })
                app.removeStorage('itemData')
                app.setStorage('titleData',titleData)
            })
        })

        wx.getSystemInfo({
          success: function(res) {
            // success
            that.setData({
                wheight:res.windowHeight
            })
          }
        })
    },
    addImg:function(e){
        var that= this;
        var index = e.currentTarget.dataset.index;
        var titleData = that.data.titleData;
        app.chooseImage(1,function(res){
            if(!index){
                titleData.push({'src':res.tempFilePaths,'text':''})
            }else{
                var data = {'src':res.tempFilePaths,'text':''};
                index++;
                titleData.splice(index,0,data)
            }
            that.setData({
                titleData:titleData
            }) 
        })
    },
    addText:function(e){
        var that =this;
        var index = e.currentTarget.dataset.index,
            titleData = that.data.titleData; 
        var data = {'src':'','text':''};
        
        index++;
        titleData.splice(index,0,data);

        that.setData({
            titleData:titleData
        })

       app.setStorage('titleData',titleData)
    },
    click:function(e){
        var idx = e.currentTarget.dataset.index;
        var that = this;
        var titleData = that.data.titleData;
        titleData.forEach(function(item,i){
            if( i == idx ){
                item.click = !item.click || false;
            }
        })
        that.setData({
            titleData:titleData
        })
    },
    del:function(e){
        var index = e.currentTarget.dataset.index;
        var that = this;
        var titleData = that.data.titleData;

        titleData.splice(index,1);

        that.setData({
            titleData:titleData
        })

        app.setStorage('titleData',titleData)
    },
    chTxt:function(e){
        var that = this;
        var show = that.data.textShow;
        var idx= that.data.idx;
        var i = e.currentTarget.dataset.index;
        var titleData = that.data.titleData;
        var titVal = that.data.titVal;
        idx= i;
        titVal = titleData[i].text;
        show = !show;
        that.setData({
            textShow:show,
            idx:idx,
            titVal:titVal
        })
    },
    saveVal:function(e){
        var that = this;
        var show = that.data.textShow;
        var titleData = that.data.titleData;
        var titVal = that.data.titVal;
        var index = that.data.idx;
        titleData[index].text = titVal;
        titVal='';
        show = !show;
        that.setData({
            textShow:show,
            titleData:titleData,
            titVal:titVal
        })
        
    },
    getText:function(e){
        var that = this;
        var titVal= that.data.titVal;
        titVal = e.detail.value;
        that.setData({
            titVal:titVal
        })
    },
    onUnload:function(){
        var that =this;
        var titleData = that.data.titleData;
        wx.showModal({
            title: '退出编辑',
            content: '是否保存未完成文章内容？',
            success: function(res) {
                if (res.confirm) {
                    app.setStorage('titleData',titleData)
                }else{
                    wx.clearStorage({
                      key: 'titleData'
                    })
                }
            }
        })
    }
});