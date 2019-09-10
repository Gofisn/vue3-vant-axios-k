import {
    POST,
    GET,
    POSTFORMAT
} from './service'
let base = '/api'
// 挂单列表
export const getBusinessBuyList = (data) => GET(base + '/transv1/sales/get-list', data)
// 申请挂单
export const goSellOut = (data) => POST(base + '/transv1/sales/create-order', data)

export const businessAppeal = (data) => POSTFORMAT(base + '/transv1/trans/appeal', data)