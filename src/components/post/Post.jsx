import "./post.css";
import { Link } from "react-router-dom";
import React from 'react'

export default function Post(props) {
    return (
        <div className="post">
            <img className="postImg" src="./image/img6.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">ABC</span>
                    <span className="postCat">ABC</span>
                </div>
                <Link to={{pathname: '/post', search: `?title=${props.title}&${props.content}`}} >
                <span className="postTitle">{props.title}</span>
                </Link>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">{props.content}</p>
        </div>
        
    )
}
