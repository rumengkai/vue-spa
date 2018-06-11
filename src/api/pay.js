import fetch from '@/utils/fetch'

export function createOrder(params) {
  return fetch({
    url: '/pay/weixin/create_order',
    method: 'post',
    params
  })
}

export function weixinCheck(params) {
  return fetch({
    url: '/pay/weixin/check',
    method: 'post',
    params
  })
}

/* 免费领取 */
export function payFree(params) {
  return fetch({
    url: '/pay/orders/pay_free',
    method: 'post',
    params
  })
}
// 取消订单
export function cancelOrder(params) {
  return fetch({
    url: '/pay/orders/cancel',
    method: 'post',
    params
  })
}
