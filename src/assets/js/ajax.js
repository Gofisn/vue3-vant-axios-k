import service, {
    POST,
    GET
} from './service'

export function getData(data, callback) {
    return GET('/api/mini-game', data).then((res) => {
        callback(res)
    }).catch((err) => {})
}
