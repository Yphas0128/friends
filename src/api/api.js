// 请求接口
import http from '../utils/http'
// import APPCONST from '../utils/appconst'
http.requestData.baseUrl = 'https://www.qecho.cn/' + 'api/'
const login = params => {
  return http.requestData('login', params).then(res => res)
}

export default {
  login
}
