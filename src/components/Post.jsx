import React from "react";
import Content from "./Content";
import User from "./User";

function Post({ author, text, replies, depth = 0 }) {
  return (
    <div className="post" style={{ paddingLeft: `${depth * 25}px` }}>
      <User name={author.name} avatar={author.avatar} />
      <Content text={text} replies={replies} depth={depth} />
    </div>
  );
}

export default React.memo(Post);
