import React , { useState } from 'react';

import { Link } from 'react-router-dom';
import { Row , Input , Button , message } from 'antd';
import { connect } from 'react-redux';

import request from '../../api/request';
import { debounce } from '../../util';

import './style.css'

const style = {
    wrapper:{
        width:'100vw',
        height:'100vh',
        backgroundColor:'#f6f6f6'
    }
}

const checkInput = (email,password) => {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return email && password && reg.test(email);
}



const Login = props => {

    const [ email , setEmail ] = useState('');
    const [ password , setPassword ] = useState('');

    const { login , history } = props;

    const signin = () => {
        if(!checkInput(email,password)){
            message.info('请输入正确格式的邮箱以及您的密码！');
            return;
        }
        else{
            request('/login/',{method:'POST',data:{email,password}}).then(res=>{
                const { isExist , token , refreshToken } = res.data;
                if(isExist){
                    message.success('登录成功！')
                    localStorage.setItem('token',token)
                    localStorage.setItem('refreshToken',refreshToken)
                    history.push('/');
                    login();
                }
                else{
                    message.info('登录失败！请检查您的邮箱与密码')
                }
            })
        }
    }

    return(
        <div style={style.wrapper} className="login-wrapper">
            <div className="login-container">
                <Row type="flex" justify="center">
                    <span className="login-title">Magic</span>
                </Row>
                <Row type="flex" justify="center">
                    <Input 
                    type="text"
                    placeholder="请输入您的邮箱"
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <Input 
                    type="password" 
                    placeholder="请输入您的密码"
                    onChange={e=>setPassword(e.target.value)}
                    />
                </Row>
                <Row type="flex" justify="center">
                    <Button type="primary" onClick={debounce(signin,1000,true)}>登录</Button>
                </Row>
                <Row type="flex" justify="center">
                    还没有账号？点击<Link to="./register">注册</Link>
                </Row>
                <Row type="flex" justify="center">
                    <Link to="./">返回首页</Link>
                </Row>
            </div>
        </div>
    )

}

const mapDispatchToProps = dispatch => {
    return{
        login(){
            let action = {
                type:'signin'
            }
            dispatch(action);
        }
    }
}

export default connect(null,mapDispatchToProps)(Login);