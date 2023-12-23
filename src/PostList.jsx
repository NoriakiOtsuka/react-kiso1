import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"

import { PostItem } from "./components/PostItem";
import { CreatePost } from "./components/CreatePost";

export const PostList = () => {
  const baseUrl = "https://railway.bulletinboard.techtrain.dev";
  const thredGetUrl = `${baseUrl}/threads?offset=0`;
  const [threads, setThreads] = useState([]);

  const urlParam = useParams();
  const postGetUrl = `${baseUrl}/threads/${urlParam.thread_id}/posts`;
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    axios.get(thredGetUrl)
      .then(res => setThreads(res.data[0]))

      axios.get(postGetUrl)
        .then(res => setPosts(res.data.posts))
  }, [])

  return (
    <>
      <div className="container">
        <h2>{threads.title}</h2>
        {posts.map(post => (
          <PostItem posts={post.post} />
        ))}
      </div>
    </>
  );
}