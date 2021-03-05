import React , { useState } from 'react';
import E from 'wangeditor'
import LEdit from 'wangeditor'

import { Row , Col , Button , List , Input } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

const demo = [
    {
        name:'朝花夕拾',
        essays:[
            {
                title:'标题',
                content:'<h1>正文</h1>'
            }
        ],
    },
    {
        name:'朝花夕拾',
        essays:[
            {
                title:'哈哈',
                content:'<h1>正文</h1>'
            }
        ],
    },
    {
        name:'朝花夕拾',
        essays:[
            {
                title:'哈喽',
                content:'<h1>正文</h1>'
            }
        ],
    },
    {
        name:'朝花夕拾',
        essays:[
            {
                title:'标题',
                content:'<h1>正文</h1>'
            }
        ],
    },
    {
        name:'朝花夕拾',
        essays:[
            {
                title:'标题',
                content:'<h1>正文</h1>'
            }
        ],
    },
]

const ShowReel = props => {
    return(
        <span className="showreel-title">{props.title}</span>
    )
}

class Editor extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            editor:null,
            editorContent:demo,
            showreel:demo,
            essays:[],
            selectShowReel:{},
            selectEssay:{},
            newShowReel:'',
            newEssay:''
        }
    }

    componentDidMount(){
        const editor = new E(this.refs.editorMenu,this.refs.editorText)
        editor.config.onchange = html => {
            this.setState({
                editorContent: editor.txt.html()
            })
        }
        
        editor.config.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'fontSize',  // 字号
            'fontName',  // 字体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'emoticon',  // 表情
            'image',  // 插入图片
            'table',  // 表格
            'video',  // 插入视频
            'code',  // 插入代码
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor.config.uploadImgShowBase64 = true
        editor.create()

        this.setState({editor})
    }   

    setText = html => {
        this.setState({
            editorContent:html
        })
    }

    addShowReel = props => {
        this.setState({ 
            showreel:[
                ...this.state.showreel,
                {
                    name:this.state.newShowReel
                }
            ]
        })
    }

    changeShowReel = essays => {
        this.setState({essays})
    }

    addEssay = () => {
        this.setState({
            essays:[
                ...this.state.essays,
                {
                    title:this.state.newEssay
                }
            ]
        })
    }

    changeEssay = content => {
        this.state.editor.txt.html(content)
    }

    render(){
        return(
            <Row type="flex" justify="center" style={{height:'100vh'}}>
                <Col xs={4} style={{height:'100%'}}>
                    <Row type="flex" justify="center">
                        <Button type="primary"><Link to="/">返回首页</Link></Button>
                    </Row>
                    <Row type="flex" justify="center">
                        <Col><Input value={this.state.newShowReel} placeholder="输入文集名称" onChange={e=>this.setState({newShowReel:e.target.value})}></Input></Col>
                        <Col><Button type="primary" onClick={this.addShowReel.bind(this)}>新建文集</Button></Col>
                    </Row>
                    <Row style={{height:'90%'}}>
                        <List 
                            header={<span style={{fontSize:'1.2rem',fontWeight:'600'}}>作品集</span>}
                            itemLayout="vertical"
                            dataSource={this.state.showreel}
                            renderItem={item=>(
                                <List.Item onClick={this.changeShowReel.bind(this,item.essays)}>
                                    <ShowReel title={item.name}></ShowReel>
                                </List.Item>
                            )}
                            style={{width:'100%',overflowY:'scroll',maxHeight:'80%'}}
                        />
                    </Row>
                </Col>
                <Col xs={4} style={{height:'100%'}}>
                    <Row type="flex" justify="center">
                        <Col><Input value={this.state.newEssay} placeholder="输入文章名称" onChange={e=>this.setState({newEssay:e.target.value})}></Input></Col>
                        <Col><Button type="primary" onClick={this.addEssay.bind(this)}>新建文章</Button></Col>
                    </Row>
                    <List 
                        header={<span style={{fontSize:'1.2rem',fontWeight:'600'}}>文章</span>}
                        itemLayout="vertical"
                        dataSource={this.state.essays}
                        renderItem={item=>(
                            <List.Item onClick={this.changeEssay.bind(this,item.content)}>
                                <ShowReel title={item.title}></ShowReel>
                            </List.Item>
                        )}
                        style={{width:'100%',overflowY:'scroll',maxHeight:'90%'}}
                    />     
                </Col>
                <Col xs={16} style={{height:'100%'}}>
                    <div id="editor">
                        <div ref="editorMenu" className="editor-menu"></div>
                        <div ref="editorText" className="editor-text">
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default Editor;