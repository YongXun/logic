import React , { useState } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Row , Col , Input , Button , message} from 'antd';

import { debounce } from '../../util';

import './style.css'

const style = {
    wrapper:{
        width:'100vw',
        height:'100vh',
        backgroundColor:'#f6f6f6'
    }
}

const getValidCode = email => {

    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

    if(!reg.test(email)){
        message.info('请输入正确格式的邮箱！');
        return;
    }
    
    axios.post(`http://192.168.0.100:3000/email/getCode`,
    {
        email
    }).then(res=>{
        if(res.data.send){
            message.success('验证码已经发送到您的邮箱！');
        }
        else{
            message.info('发送失败，请稍后重试！')
        }
    }).catch(err=>{
        message.info('发送失败，请稍后重试！')
    })
}

const Register = props => {
    const [ email , setEmail] = useState('');
    const [ name , setName ] = useState('');
    const [ password , setPassword] = useState('');
    const [ validCode , setValidCode ] = useState('');

    const register = () => {
        console.log('执行注册请求')
        // 1 检查信息是否填写完毕
        if(!email || !name || !password || !validCode){
            message.info('请完善您的信息！');
            return;
        }

        // 2 检查邮箱是否符合格式
        let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
        if(!reg.test(email)){
            message.info('请输入正确格式的邮箱！');
            return;
        }

        // 3 进行网络请求
        axios.post('http://192.168.0.100:3000/login/register',
        {
            email,name,password,validCode
        }).then(res=>{
            const { isExist , isMatch , isSave } = res.data;
            if(!isExist && isMatch && isSave){
                message.success('注册成功！');
            }else if(isExist){
                message.info('该邮箱已经注册，请勿重复注册！');
                return;
            }else if(!isMatch){
                message.info('邮箱验证码不匹配')
                return;
            }else{
                message.info('服务器繁忙，请稍后重试！')
                return;
            }
        })
    }

    return(
        <div style={style.wrapper} className="login-wrapper">
            <div className="login-container">
                <Row type="flex" justify="center">
                    <span className="login-title">Magic</span>
                </Row>
                <Row type="flex" justify="center">
                    <Input placeholder="请输入您的邮箱" type="text" onChange={e=>{setEmail(e.target.value)}}/>
                    <div className="valid-btn-wrapper">
                        <Button type="primary"  onClick={()=>{getValidCode(email)}}>获取验证码</Button>
                    </div>
                    <Input placeholder="请输入您的用户名" type="text" onChange={e=>{setName(e.target.value)}}/>
                    <Input placeholder="请输入您的密码" type="password" onChange={e=>{setPassword(e.target.value)}}/>
                    <Input placeholder="请输入您的邮箱验证码" type="text" onChange={e=>{setValidCode(e.target.value)}}/>
                </Row>
                <Row type="flex" justify="center">
                    <Button type="primary" onClick={debounce(register,1000,true)}>注册</Button>
                </Row>
                <Row type="flex" justify="center">
                    还没有账号？点击<Link to="./login">登录</Link>
                </Row>
                <Row type="flex" justify="center">
                    <Link to="./">返回首页</Link>
                </Row>
            </div>
        </div>
    )

}

export default Register;