// pages/home-vedio/index.js
import { getTopMV } from '../../service/api_video'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    topMVs: [],
    hasMore: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getTopMVData(0)
  },

  // 封装网络请求的方法
  async getTopMVData(offset) {
    // 判断是否可以请求 当offset达到服务器该请求的最大数时 停止请求 资源已经全部获取
    if(!this.data.hasMore) return
    // 请求加载动画
    wx.showNavigationBarLoading()

    // 真正发送网路请求
    const res = await getTopMV(offset)
    let newData = this.data.topMVs
    if(offset === 0) {
      newData = res.data.data
    } else {
      newData = newData.concat(res.data.data)
    }
    this.setData({topMVs: newData})
    this.setData({hasMore: res.data.hasMore})
    // 请求结束 结束动画
    wx.hideNavigationBarLoading()
    if(offset === 0) {
      wx.stopPullDownRefresh()
    }
  },

  // 封装事件处理方法
  handleVideoItemClick(event) {
    // 获取id
    console.log("点击", event.currentTarget.dataset.item.id);
    const id = event.currentTarget.dataset.item.id
    // 页面跳转
    wx.navigateTo({
      url: '/pages/detail-video/index?id=' + id,
    })
  },

  // 下拉刷新
  async onPullDownRefresh() {
    this.getTopMVData(0)
  },
  // 滚动到底部
  async onReachBottom() {
    this.getTopMVData(this.data.topMVs.length)
  }
})