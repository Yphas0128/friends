// 基本常量库
// eslint-disable-next-line no-undef
const config = {
  alianceKey: 'PS7K0R7sfFNGtNrc', // 后台分配的allianceKey
  dev: {// 开发环境
    domain: 'http://www.dzyf.com/friend/public/api/chat/auth/', // 后台接口地址
    bgImage: 'tmp/wx0f587d7c97a68e2b.o6zAJs3oh85Zb1lJE8oWix57vny0.91gGjMXALWNEf6b9dd803a7fe4bf5f75b6afd5705a73.jpg'// 个人中心背景图片
  },
  prod: {// 生产环境
    domain: 'https://love.qiuhuiyi.cn/api/wechat',
    qiniuDomain: 'https://image.qiuhuiyi.cn',
    bgImage: 'tmp/wx0f587d7c97a68e2b.o6zAJs3oh85Zb1lJE8oWix57vny0.91gGjMXALWNEf6b9dd803a7fe4bf5f75b6afd5705a73.jpg'
  }
}
const domain = config.dev.domain
const qiniuDomain = config.dev.qiniuDomain
const bgImage = config.dev.qiniuDomain
const alianceKey = config.alianceKey
module.exports = {
  domain, qiniuDomain, bgImage, alianceKey
}
