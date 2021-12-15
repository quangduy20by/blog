import "./singlePost.css";
import React from "react";

const SinglePost = (props) => {
    const {title, content, handleSubmit} = props;
  const [value, setValue] = React.useState(
      content
  );
    const [disable, setDisable] = React.useState(true);
    const handleSend = (value) => {
        handleSubmit(value);
        setDisable(true);
    }
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="./image/img7.jpg" alt="" className="singlePostImg" />
      </div>
      <h1 className="singlePostTitle">
          {title}
        <div className="singlePostEdit">
          {disable ? (
            <i
              className="singlePostIcon far fa-edit"
              onClick={() => setDisable(false)}
            />
          ) : (
            <i
              className="singlePostIcon far fa-save"
              onClick={() =>handleSend(value)}
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
