import { Link, useNavigate } from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios"

import { BaseUrlContext } from './components/providers/BaseUrlProvider';

export const CreateThread = () => {
  const baseUrl = useContext(BaseUrlContext);
  const thredPostUrl = `${baseUrl}/threads`;
  const [newThread, setNewThread] = useState("");
  const navigate = useNavigate();

  function createNewThread() {
    // /* axios使用の場合 */
    axios.post(thredPostUrl, {
      title: newThread
    }).then(function(response) {
      alert("スレッドを作成しました。");
      navigate("/");
      console.log("succeeded to create thread")
    }, function(error) {
      console.log(`failed to create thread: ${error}`)
    });

    /* fetch使用の場合*/
    // fetch(thredPostUrl, {
    //   method: 'POST',
    //   headers: {'Content-Type': 'application/json'},
    //   body: JSON.stringify({
    //     title: newThread
    //   })
    // }).then(function(response) {
    //   console.log("succeeded to create thread")
    // }, function(error) {
    //   console.log(`failed to create thread: ${error}`)
    // });
  }

  return (
    <>
      <h2>スレッド新規作成</h2>
      <input 
        className="inputTitle"
        type="text"
        placeholder="スレッドタイトル"
        value={newThread}
        onChange={(event) => setNewThread(event.target.value)} />
      <div>
        <Link to="/">Topに戻る</Link>
        <button onClick={createNewThread}>作成</button>
      </div>
    </>
  );
}