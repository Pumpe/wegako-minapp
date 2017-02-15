// example/notice/detail.js
function imageUtil(e) { 
 var imageSize = {}; 
 var originalWidth = e.detail.width;//图片原始宽 
 var originalHeight = e.detail.height;//图片原始高 
 var originalScale = originalHeight/originalWidth;//图片高宽比 
 console.log('originalWidth: ' + originalWidth) 
 console.log('originalHeight: ' + originalHeight) 
 //获取屏幕宽高 
 wx.getSystemInfo({ 
  success: function (res) { 
   var windowWidth = res.windowWidth-30; 
   var windowHeight = res.windowHeight; 
   var windowscale = windowHeight/windowWidth;//屏幕高宽比 
   console.log('windowWidth: ' + windowWidth) 
   console.log('windowHeight: ' + windowHeight) 
   if(originalScale < windowscale){//图片高宽比小于屏幕高宽比 
    //图片缩放后的宽为屏幕宽 
     imageSize.imageWidth = windowWidth; 
     imageSize.imageHeight = (windowWidth * originalHeight) / originalWidth; 
   }else{//图片高宽比大于屏幕高宽比 
    //图片缩放后的高为屏幕高 
     imageSize.imageHeight = windowHeight; 
     imageSize.imageWidth = (windowHeight * originalWidth) / originalHeight; 
   } 
     
  } 
 }) 
 console.log('缩放后的宽: ' + imageSize.imageWidth) 
 console.log('缩放后的高: ' + imageSize.imageHeight) 
 return imageSize; 
} 
  
module.exports = { 
 imageUtil: imageUtil 
} 

Page({
  data: { 
  imagefirstsrc: 'http://bpic.588ku.com/back_pic/00/03/85/1656205138bbe2d.png',//图片链接   
  imagewidth: 0,//缩放后的宽 
  imageheight: 0,//缩放后的高   
 }, 
 onReady: function () {
        wx.setNavigationBarTitle({title:"公告详情"});
    },
 onLoad: function () { 
 }, 
 imageLoad: function (e) { 
  var imageSize = imageUtil(e) 
  this.setData({ 
   imagewidth: imageSize.imageWidth, 
   imageheight: imageSize.imageHeight 
  }) 
 } 
})