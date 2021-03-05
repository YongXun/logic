import React , { useState } from 'react';

import { Avatar , Row , Col , Space , Button, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';

const Visitor = props => {
    return(
        <>
            <Row type="flex" justify="center">
                <Avatar size={64} icon={<UserOutlined />} />
            </Row>
            <Row type="flex" justify="center">
                <span className="user-name">游客</span>
            </Row>
            <Row type="flex" justify="center">
                <Space>
                    <Button type="primary"><Link to="/login">登录</Link></Button>
                    <Button><Link to="/register">注册</Link></Button>
                </Space>
            </Row>
        </>
    )
}

const IsUser = props => {

    const {signout , author} = props;

    const [isModalVisible, setIsModalVisible] = useState(false);

    return(
        <>
            <Modal title="" visible={isModalVisible} onOk={signout} onCancel={()=>setIsModalVisible(false)}>
                <p>确定退出您的账号吗？</p>
            </Modal>
            <Row type="flex" justify="center">
                <Avatar size={64} icon={<UserOutlined />} />
            </Row>
            <Row type="flex" justify="center">
                <span className="user-name">{author.name}</span>
            </Row>
            <Row type="flex" justify="center">
                <Space>
                    <Button type="primary"><Link to="editor">前往写作</Link></Button>
                    <Button onClick={()=>setIsModalVisible(true)}>退出</Button>
                </Space>
            </Row>
        </>
    )
}

const User = props => {

    let { isLogin , signout , author} = props;

    return(
        <div className="user-wrapper">
            {
                isLogin?
                <IsUser signout={signout} author={author}/>
                :
                <Visitor />
            }
        </div>
    )

}

const mapStateToProps = state => {
    return{
        isLogin:state.isLogin,
        author:state.author
    }
}

const mapDispatchToProps = dispatch => {
    return{
        signout(){
            let action = {
                type:'signout'
            }
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            console.log('登出')
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(User);