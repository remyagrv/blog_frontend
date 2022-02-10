import React from 'react';
import Home from './components/home/home';
import About from './components/about/about';
import Error from './components/error/error';
import ArticleList from './components/article/articlelist';
import Article from './components/article/article';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Signup from './components/login/Signupp';
import Login from './components/login/Login';
function App() {
  return (
    <div>
      
      <Router>
       
        <Routes>
          <Route path ="/" element={<Login/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/article-list" element={<ArticleList/>}></Route>
          <Route path="/article/:name" element={<Article/>}></Route>
          <Route path="/signup" element={<Signup/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        <Route path="*" element={<Error/>}></Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
