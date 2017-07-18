// kitta.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //顶部导航
    nav:[
      { img:'http://www.kingjim.co.jp/sp/kitta/images/nav-01.png'},
      { img:'http://www.kingjim.co.jp/sp/kitta/images/nav-02.png'},
      { img:'http://www.kingjim.co.jp/sp/kitta/images/nav-03.png'}
    ],
    swipeIndex:0,
    navActiveIndex:0,

    //first
    kittaTTe:[
      { img:'http://www.kingjim.co.jp/sp/kitta/images/hero-image-01.png',opacity:0},
      { img:'http://www.kingjim.co.jp/sp/kitta/images/hero-image-02.png',opacity:0},
      { img:'http://www.kingjim.co.jp/sp/kitta/images/hero-image-03.png',opacity:0}
    ],

    //second
    lineup:{
      baseBaseUrl:'http://www.kingjim.co.jp/sp/kitta/images/nav-item-',
      baseDetailsUrl:'http://www.kingjim.co.jp/sp/kitta/images/item-',
      base:[
        { img: 'kit001.png', tag: 'プレーン',},
        { img: 'kit002.png', tag: 'シマシマ' },
        { img: 'kit003.png', tag: 'ドット' },
        { img: 'kit004.png', tag: 'チェック' },
        { img: 'kit005.png', tag: 'チェック' },
        { img: 'kit006.png', tag: 'メッセージ' },
        { img: 'kit007.png', tag: 'フラワー' },
        { img: 'kit008.png', tag: 'アニマル' },
        { img: 'kit009.png', tag: 'ウツワ' },
        { img: 'kit010.png', tag: 'ファブリック' },
        { img: 'kit011.png', tag: 'ユメ' },
        { img: 'kit012.png', tag: 'アサゴハン' },
      ],
      baseNew:[
        { img: 'kit013.png', tag: 'プレーン2' },
        { img: 'kit014.png', tag: 'シマシマ2' },
        { img: 'kit015.png', tag: 'ドット2' },
        { img: 'kit016.png', tag: 'チェック2' },
        { img: 'kit017.png', tag: 'フレーム2' },
        { img: 'kit018.png', tag: 'ノルディック' },
        { img: 'kit019.png', tag: 'キカガク' },

        { img: 'kit020.png', tag: 'オーロラ' },
        { img: 'kit021.png', tag: 'ワガラ' },
        { img: 'kit022.png', tag: 'フラワー2' },
        { img: 'kit023.png', tag: 'マボロシ' },
        { img: 'kit024.png', tag: 'ヤマ' },
        { img: 'kit025.png', tag: 'フルーツ' },
        { img: 'kit026.png', tag: 'ネコ' },
        { img: 'kit027.png', tag: 'フラワー3' },
        { img: 'kit028.png', tag: 'ホウソウシ' },
        { img: 'kit029.png', tag: 'ファーム' },
        { img: 'kit030.png', tag: 'オデカケ' },
      ],
      slimBaseUrl:'http://www.kingjim.co.jp/sp/kitta/images/nav-item-',
      slim:[
        { img: 'kits001.png', tag: 'ミックス' },
        { img: 'kits002.png', tag: 'ミックス2' },
        { img: 'kits003.png', tag: 'ミックス3' },
        { img: 'kits004.png', tag: 'フェスティバル' },
        { img: 'kits005.png', tag: 'ライン' },
        { img: 'kits006.png', tag: 'チロリアン' },
        
      ],
      detailsImg: 'http://www.kingjim.co.jp/sp/kitta/images/item-kit001.png',
      dismiss:'http://www.kingjim.co.jp/sp/kitta/images/btn-close.png',
      show:false
    },

    //third
    //相册
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
    this.startFading();
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
  },
  startFading(){
    console.log('startFading');
    let oData = this.data.kittaTTe;
    oData.forEach((item)=>{
        item.opacity = 1;
    })
    console.log(oData);
    this.setData({
      kittaTTe: oData
    });
  },
  //
  lineupDetailsDismiss(e){
    let lineup = this.data.lineup;
      lineup.show = false;
    this.setData({
      lineup
    });
  },
  //
  showDetails(e){
    let {index,type} = e.currentTarget.dataset,
        detailsImagUrl;
    switch(type){
      case 'base': detailsImagUrl = this.data.lineup.baseDetailsUrl + this.data.lineup.base[index].img;
        break;
      case 'baseNew': detailsImagUrl = this.data.lineup.baseDetailsUrl + this.data.lineup.baseNew[index].img;
        break;
      case 'slim': detailsImagUrl = this.data.lineup.baseDetailsUrl + this.data.lineup.slim[index].img;
        break;
    } 
    console.log(detailsImagUrl);
    let lineup = this.data.lineup;
    lineup.detailsImg = detailsImagUrl;
    lineup.show = true;
    this.setData({
      lineup: lineup
    })
  }
})