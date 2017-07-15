// kitta.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nav:[
      { img:'http://www.kingjim.co.jp/sp/kitta/images/nav-01.png'},
      { img:'http://www.kingjim.co.jp/sp/kitta/images/nav-02.png'},
      { img:'http://www.kingjim.co.jp/sp/kitta/images/nav-03.png'}
    ],
    swipeIndex:0,
    navActiveIndex:0,

    gallery:[
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-01.jpg', msg:'旅の記録を貼りつけて。'},
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-04.jpg', msg:'ちょっとしたメモやコトバに添えて。'},
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-03.jpg', msg: 'ペンケースやポーチに入れて。'},
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-02.jpg', msg: '日々のスナップを留めて。'},
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-05.jpg', msg: 'ノートや手帳のインデックスとして。'}, 
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-06.jpg', msg: 'ラッピングのタグに貼りつけて、ギフトのアクセントに。'},
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-07.jpg', msg: 'メッセージカードのデコレーションとして。'}, 
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-08.jpg', msg: 'カードサイズなので、手帳のポケットにもすっきり。'}, 
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-09.jpg', msg: 'クリップを装飾して、色とりどりに。'}, 
      { img: 'http://www.kingjim.co.jp/sp/kitta/images/gallery-10.jpg', msg: '分類用の見出しとして。'}, 
    ],
    galleryIndex:5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  swipeChange:function(e){
    console.log(e);
    this.setData({
      navActiveIndex:e.detail.current
    });
  },
  tap:function(){
    console.log('ddd');
  },
  setCurrent:function(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      swipeIndex: index,
      navActiveIndex: index
    });
    console.log(e);
  },
  gallerySelect:function(e){
    let index = e.currentTarget.dataset.index;
    this.setData({
      galleryIndex:index
    })
  }
})