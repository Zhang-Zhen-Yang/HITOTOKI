// pages/home/home.js
let datas = require('./data.js');
console.log(datas);
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsList:datas.data,
    swipeList:[
      { img:'http://www.kingjim.co.jp/sp/coharu_mp20/images/case-img-01.jpg'},
      { img:'http://www.kingjim.co.jp/sp/coharu_mp20/images/case-img-02.jpg'},
      { img:'http://www.kingjim.co.jp/sp/coharu_mp20/images/case-img-03.jpg'},
      { img:'http://www.kingjim.co.jp/sp/masurie/images/img_mv_02.png',tag:'masurie'},
      { img:'http://www.kingjim.co.jp/sp/masurie/images/img_mv_01.png',tag:'masurie'}
    ]
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
  
  }
})