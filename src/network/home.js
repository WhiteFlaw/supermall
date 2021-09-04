import { request } from "./request"

export function getHomeMultidata() {
    /* 向request传参一个配置对象config,把request收到的值return,并存储到getHomeMultidata()函数中 */
    return request({
        url: '/home/multidata',
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
        //url和params共同結合baseURL拼接出了完整URL,相當於此處僅僅寫了一個URL;
    })
}

