import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { ThreadList } from './ThreadList';
import { CreateThread } from './CreateThread';
import { PostList } from './PostList';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        <Routes>
          <Route exact path="/" element={<ThreadList />} />
          <Route path="/thread/new" element={<CreateThread />} />
          <Route path="/thread/:thread_id" element={<PostList />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
