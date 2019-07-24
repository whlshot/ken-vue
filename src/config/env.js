/**
 * baseUrl: 域名地址
 *
 * routerMode: 路由模式
 */

let baseUrl = ''
let routerMode = 'history'
if (process.env.NODE_ENV == 'development') {
  baseUrl = 'http://localhost:8081/'
} else {
  baseUrl = 'http://线上地址'
}

export {baseUrl, routerMode}
