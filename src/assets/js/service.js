import axios from 'axios'
import {
    Toast
} from 'vant'

let baseurl = process.env.NODE_ENV === 'development' ? '' : ''
const service = axios.create({
    baseURL: baseurl, // url = base url + request url
    // withCredentials: true, // 表示跨域请求时是否需要使用凭证
})

// request拦截器 request interceptor
service.interceptors.request.use(
    config => {
        // 不传递默认开启loading
        if (!config.hideloading) {
            // loading
            Toast.loading({
                forbidClick: true
            })
        }
        // if (store.getters.token) {
        //   config.headers['X-Token'] = ''
        // }
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)
// respone拦截器
service.interceptors.response.use(
    response => {
        Toast.clear()
        const res = response.data
        if (res.status && res.status !== 200) {
            // 登录超时,重新登录
            if (res.status === 401) {
                // store.dispatch('FedLogOut').then(() => {
                //   location.reload()
                // })
            }
            return Promise.reject(res || 'error')
        } else {
            return Promise.resolve(res)
        }
    },
    error => {
        Toast.clear()
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)

//(发送post请求)
export function POST(url, params) {

    return service.post(url, {
        params: param
    })
    .then(response => {})
    .catch((error) => {})
}
// 发送get请求
export function GET(url, param) {
    return service.get(url, {
            params: param
        })
        .then(response => {})
        .catch((error) => {})

}

export default service