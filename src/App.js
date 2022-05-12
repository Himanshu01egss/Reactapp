import logo from './logo.svg';
import './App.css';
import Header from './include/Header.js';
import Home from './component/Home.js';
import About from './component/About.js';
import Blog from './component/Blog.js';
import Contact from './component/Contact.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
