import axios from 'axios'

export function request(config) {
    //创建axios示例;
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000
    })

    //axios拦截器;
    //请求拦截
         instance.interceptors.request.use(config => {
            return config
        }, error => {
            console.log(error);
        })
        //
        instance.interceptors.response.use(response => {
            return response.data
        }, error => {
            console.log(error);
        }) 

    return instance(config);
}
