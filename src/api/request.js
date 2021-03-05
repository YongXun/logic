import { baseURL } from './api';
import API from './api';
import axios from 'axios';

const request = (url,options) => {

    // 获取用户token
    const token = localStorage.getItem('token');

    const configs = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
        url,
        baseURL,
        ...options
    }

    return axios.request(configs)
    .then(res=>res)
    .catch(err=>checkStatus(err)) 
}

// 标志 是否正在刷新token
let isRefreshing = false;

const checkStatus = err => {
    if(err &&  err.response && err.response.status === 401){
        // 用户登录信息失效，刷新Token再次请求
        return err.response
    }
    else{
        // 其他错误
        return err.response
    }
}

// 刷新Token的请求
const refreshTokenRequst = () => {

}

// 因认证失败的请求队列
let requestList = [];

const addRequest = callback => {
    requestList.push(callback);
}

const afterTokenRefreshed = () => {
    requestList.forEach(callback=>{
        callback();
    })
    requestList = [];
}

export default request;