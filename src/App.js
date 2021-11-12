import "./styles.css";
import { data } from "./data.js";
import { useEffect, useState } from "react";
import Post from "./components/Post";

export default function App() {
  const [content, setContent] = useState(null);
  useEffect(() => {
    setContent(data);
  }, []);

  return (
    <div>
      {content !== null && (
        <Post
          author={content.author}
          text={content.text}
          replies={content.replies}
        />
      )}
    </div>
  );
}
