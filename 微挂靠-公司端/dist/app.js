App({
    onLaunch: function () {
        var that= this,param={},userLoginKey={};
        // if(that.getStorage('userLoginKey')) return
        wx.login({
            success: function(res){
                if(res.code){
                    var param={
                        'nickName':'',
                        'avatar':'',
                        'sex':'',
                        'code':'',
                        'entryData':'',
                        'iv':''
                    };
                    param.code=res.code;
                    that.getUserInfo(function(res2){
                        param.nickName=res2.userInfo.nickName;
                        param.avatar=res2.userInfo.avatarUrl;
                        switch(res2.userInfo.gender){
                            case 0: 
                                param.sex=''
                            break;
                            case 1: 
                                param.sex='男'
                            break;
                            case 2: 
                                param.sex='女'
                            break;
                            default:
                            break;
                            }
                            
                        param.entryData= encodeURIComponent(res2.encryptedData);//一定要把加密串转成URI编码
                        param.iv = res2.iv;

                        that.setStorage('userParam',param)

                        //请求自己的服务器
                        that.fetchApi('http://www.gk360che.com',param,function(res){
                            //对比数据库数据  没有则填写公司信息
                            //后台判断用户信息并返回数据
                            // public function weixinlogin( $user_id=null )
                            //     {
                            //             global $App_Error_Conf,$Gift_Ids,$Server_Http_Path,$Is_Local,$Test_User,$Good_Vcode,$WeiXin_Xd_Conf;
                            //             $validator_result = input_validator(array('code','iv','encryptedData'));
                            //             if(!empty($validator_result)){
                            //                     return response($validator_result);
                            //             }
                            //             $js_code = $_REQUEST['code'];
                            //             $encryptedData = $_REQUEST['encryptedData'];
                            //             $iv = $_REQUEST['iv'];
                            //             $appid = $WeiXin_Xd_Conf['appid'];
                            //             $secret =  $WeiXin_Xd_Conf['secret'];
                            //             $grant_type =  $WeiXin_Xd_Conf['grant_type'];
                            //             //从微信获取session_key
                            //             $user_info_url = $WeiXin_Xd_Conf['code2session_url'];
                            //             $user_info_url = sprintf("%s?appid=%s&secret=%s&js_code=%s&grant_type=%",$user_info_url,$appid,$secret,$js_code,$grant_type);
                            //             $weixin_user_data = json_decode(get_url($user_info_url));
                            //             $session_key = $weixin_user_data->session_key;
                            // //解密数据
                            // $data = '';
                            // $wxBizDataCrypt = new WXBizDataCrypt($appid, $session_key);
                            // $errCode=$wxBizDataCrypt>decryptData($appid,$session_key,$encryptedData, $iv, $data );
                            // }
                        });
                    })
                }else{
                    wx.showModal({
                        title: '获取用户信息失败',
                        content: res.errMsg,
                        success: function(res) {
                            if (res.confirm) {
                                console.log('用户点击确定')
                            }
                        }
                    })
                }
            }
            })
    },
    onShow: function () {
        console.log('App Show');
    },
    onHide: function () {
        console.log('App Hide')
    },
    getUserInfo:function(success,fail,complete){
        wx.getUserInfo({
          success:success,
          fail: fail,
          complete:complete
        })
    },
    fetchApi:function(url,params,success,fail,complete){
        wx.request({
            url: url,
            data: params,
            method: 'GET', 
            header: {
                'Content-Type':"application/json",
            },
            dataType:'json',
            success:success,
            fail:fail,
            complete:complete
        })
    },
    setStorage:function(str,data,success,fail,complete){
        wx.setStorage({
          key: str,
          data: data,
          success:success,
          fail:fail,
          complete:complete
        })
    },
    chooseImage:function(count,success,fail,complete){
        wx.chooseImage({
          count: count, 
          sizeType: ['original', 'compressed'], 
          sourceType: ['album', 'camera'],
          success:success,
          fail:fail,
          complete:complete
        })
    },
    getStorage:function(str,success,fail,complete){
        wx.getStorage({
          key: str,
          success:success,
          fail:fail,
          complete:complete
        })
    },
    removeStorage:function(str,success,fail,complete){
        wx.removeStorage({
         key: str,
          success:success,
          fail:fail,
          complete:complete
        })
    },
    clearStorage:function(str,success,fail,complete){
        wx.clearStorage({
          key: str,
          success:success,
          fail:fail,
          complete:aomplete
        })
    },
    upload:function(url,filePath,name,formData,success,fail,complete){
        wx.uploadFile({
          url: url,
          filePath:filePath,
          name:name,
          header: {'Content-Type':"application/json"}, // 设置请求的 header
          formData: formData, // HTTP 请求中其他额外的 form data
          success:success,
          fail:fail,
          complete:aomplete
        })
    },
    download:function(url,Type,success,fail,complete){
        wx.downloadFile({
          url: url,
          type: Type,
          header: {'Content-Type':"application/json"}, // 设置请求的 header
          success:success,
          fail:fail,
          complete:aomplete
        })
    },
    globalData: {
        hasLogin: false
    }
});