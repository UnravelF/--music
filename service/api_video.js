import gfRequest from './index'

export function getTopMV(offset, limit = 10) {
  return gfRequest.get("/top/mv", {
    offset,
    limit
  })
}

// 请求mv播放地址
/**
* @parmas {number} id MV的id
*/ 
export function getMVURL(id) {
  return gfRequest.get("/mv/url", {
    id
  })
}

export function getMVDetail(mvid) {
  return gfRequest.get("/mv/detail", {
    mvid
  })
}

export function getRelatedVideo(id) {
  return gfRequest.get('/related/allvideo', {
    id
  })
}

