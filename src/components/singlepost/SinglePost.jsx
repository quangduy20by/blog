import './singlePost.css';

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="./image/img7.jpg" alt="" className="singlePostImg"/>
            </div>
            <h1 className="singlePostTitle">
                Lorem ipsum dolor sit aqua
                <div className="singlePostEdit">
                <i className="singlePostIcon far fa-edit"></i>
                <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author : <b>Safak</b>
                </span>
                <span className="singlePostDate"> 1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolores fugiat at cumque, 
                quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi eaque exercitationem 
                sapiente veniam quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi 
                quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturiquo quod corrupti 
                ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi sapiente veniam quo quod corrupti 
                ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi quo quod corrupti ea, ut, placeat numquam 
                accusamus sit doloremqueveniam quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi 
                quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturiquo quod corrupti 
                ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi sapiente veniam quo quod corrupti 
                ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi quo quod corrupti ea, ut, placeat numquam 
                accusamus sit doloremqueveniam quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi 
                quo quod corrupti ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturiquo quod corrupti 
                ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi sapiente veniam quo quod corrupti 
                ea, ut, placeat numquam accusamus sit doloremque atque maxime excepturi quo quod corrupti ea, ut, placeat numquam 
                accusamus sit doloremque
            </p>
        </div>
    )
}
