import "./post.css";
import { Link } from "react-router-dom";

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="./image/img6.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">ABC</span>
                    <span className="postCat">ABC</span>
                </div>
                <Link to="./post">
                <span className="postTitle">Lorem ipsum dolor sit abcd</span>
                </Link>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni magnam, a totam cumque praesentium
             at ducimus labore ex incidunt delectus recusandae quibusdam et! Totam laborum sit modi numquam, voluptates explicabo!. 
             Magni magnam, a totam cumque praesentium at ducimus labore ex incidunt delectus recusandae quibusdam et! 
             Totam laborum sit modi numquam, voluptates explicabo delectus recusandae quibusdam et! Totam laborum sit modi numquam, 
             voluptates explicabo!</p>
        </div>
        
    )
}
