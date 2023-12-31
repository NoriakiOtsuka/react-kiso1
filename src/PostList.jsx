import { useEffect, useState, useContext } from "react";
import { useParams } from 'react-router-dom';
import axios from "axios"

import { BaseUrlContext } from './components/providers/BaseUrlProvider';
import { PostItem } from "./components/PostItem";
import { CreatePost } from "./components/CreatePost";

export const PostList = () => {
  const baseUrl = useContext(BaseUrlContext);
  const thredGetUrl = `${baseUrl}/threads?offset=0`;
  const [thread, setThreads] = useState([]);

  const urlParam = useParams();
  const postGetUrl = `${baseUrl}/threads/${urlParam.thread_id}/posts`;
  const [posts, setPosts] = useState([]);

  useEffect(() => { 
    axios.get(thredGetUrl)
      .then(res => {
        res.data.map((thread) => {
          if (thread.id === urlParam.thread_id) {
            setThreads(thread);
          }
        });
      })

    axios.get(postGetUrl)
      .then(res => setPosts(res.data.posts))
  }, [])

  const posted = () => {
    axios.get(postGetUrl)
      .then(res => setPosts(res.data.posts))
  }

  return (
    <>
      <div className="container">
        <h2>{thread.title}</h2>
        {posts.map(post => (
          <PostItem posts={post.post} />
        ))}
        <CreatePost posted={posted} />
      </div>
    </>
  );
}