import gfRequest from './index'

export function getTopMV(offset, limit = 10) {
  return gfRequest.get("/top/mv", {
    offset,
    limit
  })
}