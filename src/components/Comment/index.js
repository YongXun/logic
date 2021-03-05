import React from 'react';
import { Avatar , Row , Col } from 'antd';

import { UserOutlined } from '@ant-design/icons';

import './style.css'

const Visitor = props => {
    return(
        <div className="comment-header-wrapper">
            <div><Avatar size={30} icon={<UserOutlined />} /></div>
            <div><span>游客</span></div>
        </div>
    )
}

const User = props => {
    return(
        <div className="comment-header-wrapper">
            <div><Avatar size={30} icon={<UserOutlined />} /></div>
            <div><span>游客</span></div>
        </div>
    )
}

const Comment = props => {

    const { isUser , content } = props;
    return(
        <div className="comment-wrapper">
            <Row type="flex" justify="center">
                <div className="comment-header">
                    {
                        isUser?
                        <User />
                        :
                        <Visitor />
                    }
                </div>
                <div className="comment-content">{content}</div>
            </Row>
        </div>
    )
}

export default Comment;