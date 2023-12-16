import { useEffect, useState } from "react";
import { ThreadItem } from "./components/ThreadItem";
import axios from "axios"

export const TheadList = () => {
  const bulletinUrl = "https://railway.bulletinboard.techtrain.dev/";
  const thedsOffset = "threads?offset=1";
  const [theads, setTheads] = useState([]);

  useEffect(() => { 
    /* axios使用の場合 */
    axios.get(bulletinUrl + thedsOffset)
    .then(res => setTheads(res.data))

    /* fetch使用の場合*/
    // fetch(bulletinUrl + thedsOffset)
    // .then(res => res.json())
    // .then(json => setTheads(json))
  }, [])

  return (
    <>
      <div className="container">
        <h2>新着スレッド</h2>
        {theads.map(thead => (
          <ThreadItem id={thead.id} title={thead.title} />
        ))}
      </div>
    </>
  );
}