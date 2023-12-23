import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios"

import { ThreadItem } from "./components/ThreadItem";

export const ThreadList = () => {
  const baseUrl = "https://railway.bulletinboard.techtrain.dev";
  const thredGetUrl = `${baseUrl}/threads?offset=0`;
  const [threads, setThreads] = useState([]);

  useEffect(() => { 
    /* axios使用の場合 */
    axios.get(thredGetUrl)
    .then(res => setThreads(res.data))

    /* fetch使用の場合*/
    // fetch(thredGetUrl)
    // .then(res => res.json())
    // .then(json => setThreads(json))
  }, [])

  return (
    <>
      <div className="container">
        <h2>新着スレッド</h2>
        {threads.map(thread => (
          <ThreadItem id={thread.id} title={thread.title} />
        ))}
        <Link to="/thread/new">スレッド新規作成</Link>
      </div>
    </>
  );
}