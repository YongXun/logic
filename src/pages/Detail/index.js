import React from 'react';
import { connect } from 'react-redux';
import { Row , Col , Button , Input , List} from 'antd';
import { Link } from 'react-router-dom'

import Header from '../../components/Header';
import Comment from '../../components/Comment';

import './style.css'

const Detail = props => {

    const { essays } = props;

    // 获取文章ID
    const essayID = parseInt(props.match.params.p);

    console.log(essays)

    const essay = essays.find((item)=>item.essayID === essayID)

    // 获取文章标题与内容

    return(
        <div className="detail-wrapper">
            <Header/>
            <Row type="flex" justify="center">
                <h2 dangerouslySetInnerHTML={{__html:essay.title}}  className="detail-title"></h2>
            </Row>
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                    <div dangerouslySetInnerHTML={{__html:essay.content}}  className="detail-content"></div>
                </Col>
            </Row>
            <Row type="flex" justify="center">
                <Button type="primary"><Link to="/">返回首页</Link></Button>
            </Row>
            <Row type="flex" justify="center">
                <Col xs={20} sm={20} md={11} lg={11} xl={11}>
                    <Input placeholder="在此写下您的评论"></Input>
                </Col>
                <Col xs={4} sm={4} md={1} lg={1} xl={1}>
                    <Button>提交</Button>
                </Col>
            </Row>
            <Row  type="flex" justify="center">
                <Col xs={24} sm={24} md={12} lg={12} xl={12}>

                    <List
                    header={<span>共有{essay.comments.length}条评论</span>}
                    itemLayout="vertical"
                    dataSource={essay.comments}
                    renderItem={item=>(
                        <List.Item>
                            <Comment {...item}/>
                        </List.Item>
                    )}
                    />

                    
                </Col>
            </Row>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        essays:state.essays
    }
}

const mapDispatchToProps = props => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);