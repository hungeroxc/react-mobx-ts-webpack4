import axios, { AxiosRequestConfig } from 'axios'
import { message } from 'antd'
import qs from 'qs'

import { DEFAULTBASEURL } from '@constants/index'

interface HttpRequest {
    get?(url: string, data: any, baseUrl?: string): Promise<any>
    post?(url: string, data: any, baseUrl?: string): Promise<any>
    delete?(url: string, data: any, baseUrl?: string): Promise<any>
    put?(url: string, data: any, baseUrl?: string): Promise<any>
}

const http: HttpRequest = {}
const methods = ['get', 'post', 'delete', 'put']

methods.forEach(method => {
    http[method] = (url, data, baseUrl?) => {
        // 设置axios请求配置
        const config: AxiosRequestConfig = {
            url,
            method,
            baseURL: baseUrl || DEFAULTBASEURL.baseURL
        }
        // 新建自定义配置axios实例，其中配置项只含有默认基础url
        const instance = axios.create(DEFAULTBASEURL)
        // 请求拦截
        instance.interceptors.request.use(
            cfg => {
                // 此处可以进行token设置
                return cfg
            },
            // 错误抛出
            error => Promise.reject(error)
        )
        // 相应请求拦截
        instance.interceptors.response.use(
            res => {
                // 此处对响应做处理
                message.destroy()
                message.success(res.data.data.msg)
                return res
            },
            error => Promise.reject(error)
        )
        if (method === 'get') {
            config.params = data
        } else {
            config.data = qs.stringify(data)
        }
        return (
            instance
                .request(config)
                .then(res => res)
                // 错误统一处理
                .catch(err => {
                    message.destroy()
                    message.error(err)
                })
        )
    }
})

export default http
