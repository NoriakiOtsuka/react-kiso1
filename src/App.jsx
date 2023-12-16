import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { ThreadList } from './ThreadList';
import { CreateThread } from './CreateThread';

function App() {  

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
        </header>
        {/* <ThreadList /> */}
        <Routes>
          <Route path="" element={<ThreadList />} />
          <Route path="/thread/new" element={<CreateThread />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
