import { useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"

import { BaseUrlContext } from "./providers/BaseUrlProvider";

export const CreatePost = props => {
  const { posted } = props;
  const baseUrl = useContext(BaseUrlContext);
  const urlParam = useParams();
  const postPostUrl = `${baseUrl}/threads/${urlParam.thread_id}/posts`;
  const [newPost, setNewPost] = useState("");

  function createNewPost() {
    if(newPost !== "") {
      axios.post(postPostUrl, {
        post: newPost
      }).then(function(response) {
        posted();
        console.log("succeeded to create thread")
      }, function(error) {
        console.log(`failed to create thread: ${error}`)
      });
    }
  }

  return (
    <>
      <input
        className="inputTitle" 
        type="text" 
        placeholder="投稿しよう！"
        value={newPost}
        onChange={(event) => setNewPost(event.target.value)} />
      <button onClick={createNewPost}>投稿</button>
    </>
  );
}