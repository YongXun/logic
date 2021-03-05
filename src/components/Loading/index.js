import React from 'react';
import { Row } from 'antd';

import './style.css';

const Loading = () => {

    return(
        <div className="loading-wrapper">
            <Row>
                <div className="spinner">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
            </Row>
            <Row>
                <span>页面正在飞速赶来...</span>
            </Row>
        </div>
    )
}

export default Loading;