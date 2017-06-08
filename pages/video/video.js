Page({
    data:{
        video_url:''
    },
    open:function(){
        let _this = this;
        wx.chooseVideo({
          sourceType: ['album', 'camera'], // album 从相册选视频，camera 使用相机拍摄
          // maxDuration: 60, // 拍摄视频最长拍摄时间，单位秒。最长支持60秒
          camera: ['front', 'back'],
          success: function(res){
            // success
            let tempfile = res.tempFilePath;
            _this.setData({video_url:tempfile});
            let height = res.height,
                width = res.width;
            console.log(res);
            wx.showToast({
                title:res.width
            });
          },
          fail: function(res) {
            // fail
          },
          complete: function(res) {
            // complete
            
          }
        })
    }
})