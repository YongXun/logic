import React , { useState , useEffect } from 'react';
import axios from 'axios';

import { Row , Col , List} from 'antd';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import EssayCard from '../../components/EssayCard';
import User from '../../components/User';
import request from '../../api/request';

import './style.css'

const Discover = props => {

    const user = {
        user_id:0,
        user_name:'一只东永'
    }

    const {  author , showreels , essays } = props;

    const demo = ()=>{
        request('/author/getMessage',{method:'GET'}).then(res=>{console.log(res)})
    }

    return(
        <div>
            <Header/>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <div className="discover-left">
                        <List 
                            header={<span>文章列表</span>}
                            itemLayout="vertical"
                            dataSource={essays}
                            renderItem={(item=>(
                                <List.Item>
                                    <EssayCard {...item} />
                                </List.Item>
                            ))}
                        />
                    </div>
                </Col>
                <Col xs={0} sm={0} md={0} lg={4} xl={4}>
                    <div className="discover-right">
                        <User {...user}/>
                        <button onClick={demo}>测试</button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        isLogin:state.isLogin,
        showreels:state.showreels,
        essays:state.essays
    }
}

const mapDispatchToProps = dispatch => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Discover);