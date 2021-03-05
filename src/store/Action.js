import { SIGNIN } from './ActionTypes';

import request from '../api/request';

export const SignIn = (author) => {
    return{
        type:'SIGNIN',
        value:author
    }   
}

export const toSignIn = (email,password) => (dispatch) => {
    request('/login/',{method:'POST',data:{email,password}}).then(res=>{
        const { isExist , token , refreshToken } = res.data;
        if(isExist){
            message.success('登录成功！')
            localStorage.setItem('token',token)
            localStorage.setItem('refreshToken',refreshToken)
        }
        else{
            message.info('登录失败！请检查您的邮箱与密码')
        }
    })
}