import React, { useCallback, useState, useRef } from "react";
import Post from "./Post";

function Content({ text, replies, depth }) {
  const [open, setOpen] = useState(true);
  const postRef = useRef(null);

  const toggleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const bringFocus = useCallback(() => {
    if (postRef.current !== null) postRef.current.scrollIntoView();
  }, []);

  const handleClick = useCallback(() => {
    toggleOpen();
    bringFocus();
  }, [bringFocus, toggleOpen]);

  return (
    <div className="content">
      <button
        onClick={handleClick}
        className={`content-collapse ${open ? "" : "collapsed"}`}
      ></button>

      {open && (
        <div>
          <p ref={postRef}>{text}</p>
          {replies &&
            replies.map((reply, i) => (
              <Post
                key={reply.author + i}
                author={reply.author}
                text={reply.text}
                replies={reply.replies}
                depth={depth + 1}
              />
            ))}
        </div>
      )}
    </div>
  );
}

export default React.memo(Content);
