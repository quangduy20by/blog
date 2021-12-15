import Post from "../post/Post"
import "./posts.css";
import React,{useState, useEffect} from "react";
import axios from "axios";



const Posts = () => {
    const [articles, setAricles] = useState([]);
    useEffect(()=>{
        axios.get('https://61a9984633e9df0017ea3e6d.mockapi.io/api/v1/articles').then(
            res => {
                setAricles(res.data)
            }
        )
    }
    ,[])
    return (    
        <div className="posts">
            {articles.map((article) => {
                return (
                    <Post title={article.title} content={article.content} id={article.id}/>
                )
            })}
        </div>
    )
}
export default Posts;