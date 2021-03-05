import React from 'react';
import { Row , Col , Menu } from 'antd';
import { HomeFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './style.css';

const Header = () => {
    return(
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} md={24} md={10} lg={10} xl={10}>
                    <div className="header-title">
                        <h2>Magic</h2>
                    </div>
                </Col>
                <Col xs={0} md={0} md={14} lg={8} xl={6}>
                    <Menu mode="horizontal" defaultSelectedKeys="discover">
                        <Menu.Item key="discover">
                            <HomeFilled />
                            <Link to="/">发现</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;