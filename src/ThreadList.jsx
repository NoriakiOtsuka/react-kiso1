import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios"

import { ThreadItem } from "./components/ThreadItem";
import { CreateThread } from './CreateThread';

export const ThreadList = () => {
  const bulletinUrl = "https://railway.bulletinboard.techtrain.dev/";
  const thedsOffset = "threads?offset=1";
  const [threads, setThreads] = useState([]);

  useEffect(() => { 
    /* axios使用の場合 */
    axios.get(bulletinUrl + thedsOffset)
    .then(res => setThreads(res.data))

    /* fetch使用の場合*/
    // fetch(bulletinUrl + thedsOffset)
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