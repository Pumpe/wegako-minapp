#微挂靠数据接口
## 目录
#### &sect; [概述](#overview)

#### &sect; [类别](#category)
* [首页](#index)

## <a name="overview"> &sect; 概述</a>
接口主要是针对wx.request发起的 HTTPS 请求，请求的content-type 默认为 'application/json';微信客户端的TLS版本为1.2，我们之前也遇到过一部分锤子等Android 机型还未支持 TLS 1.2，所以数据接口的开发人员要确保服务器的TLS版本能够向下兼容，请求的默认最大时长为60s，最大并发数为5个。


## <a name="index"> &sect; 首页</a>