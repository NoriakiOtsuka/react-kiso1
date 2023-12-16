import { Link } from 'react-router-dom';

export const CreateThread = () => {

  return (
    <>
      <h2>スレッド新規作成</h2>
      <input className="inputTitle" type="text" placeholder="スレッドタイトル"/>
      <div>
        <Link to="/">Topに戻る</Link>
        <button>作成</button>
      </div>
    </>
  );
}