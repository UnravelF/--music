// pages/detail-video/index.js
import {getMVURL, getMVDetail, getRelatedVideo} from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const id = options.id
    
    // 1.请求播放地址
    getMVURL(id).then(res =>{
      console.log(res);
    })
    // 2.请求视频信息
    getMVDetail(id).then(res => {
      console.log(res);
    })
    // 3.请求相关视频
    getRelatedVideo(id).then(res => {
      console.log(res);
    })
  },
})