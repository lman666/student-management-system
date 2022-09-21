import axios from 'axios'
import store from '@/store'
import router from '@/router'
import { Message } from 'element-ui'

const myAxios = axios.create({

})

// 定义请求拦截器
// api里每次调用request都会先走这个请求拦截器
myAxios.interceptors.request.use(function (config) {
  if (store.state.token) {
    config.headers.Authorization = store.state.token
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

// 定义响应拦截器
myAxios.interceptors.response.use(function (response) {
  // 响应http状态码为2xx或3xx 时触发成功的回调，形参中的response是“成功的结果”
  // return 到axios原地Promise对象，作为成功的结果
  return response
}, function (error) {
  // 响应状态吗为4xx, 5xx时触发失败的回调，形参中的error是“失败的结果”
  // return 到axios原地Promise对象位置，作为失败拒绝的状态（如果那边用try+catch函数捕获，可以捕获到我们传递过去的这个error变量的值）
  if (error.response.status === 401) {
    store.commit('updateToken', '')
    store.commit('updateUserInfo', {})

    router.push('/login')

    Message.error('用户身份已过期！')
  }
  return Promise.reject(error)
})

export default myAxios
