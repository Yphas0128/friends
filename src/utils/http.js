// wepy 请求封装
import wepy from 'wepy'
const config = require('./appconst')
// 请求封装函数
const requestData = async (url, params = {}) => {
  console.log(requestData.baseUrl)
  let token = wx.getStorageSync('token')
  console.log(params.header)
  return await wepy.request({
    url: config.domain + url, // 开发服务器接口地址
    data: params.data || {}, // 请求参数
    method: params.methods || 'GET',
    dataType: params.dataType || 'json',
    header: params.header || {
      'Content-type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  })
}

requestData.baseUrl = config.domain
export default {
  requestData
}
