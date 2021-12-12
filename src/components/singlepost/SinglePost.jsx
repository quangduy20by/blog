import "./singlePost.css";
import React from "react";

const SinglePost = () => {
  const [disable, setDisable] = React.useState(true);
  const [value, setValue] = React.useState(
    "title title title title title title title title title title title "
  );
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./image/img7.jpg" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
        Lorem ipsum dolor sit aqua
        <div className="singlePostEdit">
          {disable ? (
            <i
              className="singlePostIcon far fa-edit"
              onClick={() => setDisable(false)}
            />
          ) : (
            <i
              className="singlePostIcon far fa-save"
              onClick={() => setDisable(true)}
            />
          )}

          <i className="singlePostIcon far fa-trash-alt"></i>
        </div>
      </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">
          Author : <b>Safak</b>
        </span>
        <span className="singlePostDate"> 1 hour ago</span>
      </div>
      <input
        disabled={disable}
        className="singlePostDesc"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
export default SinglePost;
