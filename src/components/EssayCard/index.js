import React from 'react';

import { Link } from 'react-router-dom';
import { CommentOutlined , HeartOutlined} from '@ant-design/icons';

import './style.css'

const EssayCard = props => {

    const { title , content , date , authorName , essayID , comments , love} = props;

    return(
        <div className="essay">
            <p className="essay-title"><Link to={`/detail/${essayID}`}>{title}</Link></p>
            <div className="essay-content" dangerouslySetInnerHTML={{__html:content.replace(/\w*/,'')}}></div>
            <div className="essay-footer">
                <span className="mr-16">{authorName}</span>
                <span className="mr-16"><CommentOutlined />{comments.length}</span>
                <span className="mr-16"><HeartOutlined />{love}</span>
            </div>
        </div>
    )
}

export default EssayCard;