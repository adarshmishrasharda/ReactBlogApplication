import './App.css';
import List from './Components/Listcomponent';
import Post from './Components/BlogPostComponent';
import New from './Components/AddBlogComponent';
import Edit from './Components/Editcomponent';
import { Route, Routes } from 'react-router-dom';
import { useState, createContext } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

export const GlobalData = createContext();

function App() {
  const [data, setData] = useState(null);
  const [i, setId] = useState(0);

  const getData = (item,id) => {
    setData(item);
    setId(id);
  }

  return (
    <GlobalData.Provider value={{ data, getData,i}}>
      <Router>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/AddBlogComponent" element={<New />} />
          <Route path="/BlogPostComponent" element={<Post />} />
          <Route path="/Editcomponent" element={<Edit />} />
        </Routes>
      </Router>
      <div className="footer" />
    </GlobalData.Provider>
  );
}

export default App;
